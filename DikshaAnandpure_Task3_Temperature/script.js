// ============================
// CONVERSION FUNCTION
// ============================
function convertTemperature() {
    const input = document.getElementById('tempInput');
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultDisplay = document.getElementById('resultDisplay');
    const errorMsg = document.getElementById('errorMsg');

    const value = parseFloat(input.value);

    // Validation
    if (isNaN(value) || input.value.trim() === '') {
        errorMsg.classList.add('show');
        resultDisplay.innerHTML = '— <span>Invalid</span>';
        return;
    }

    errorMsg.classList.remove('show');

    let celsius;

    // Convert from any unit to Celsius first
    switch (fromUnit) {
        case 'celsius':
            celsius = value;
            break;
        case 'fahrenheit':
            celsius = (value - 32) * 5 / 9;
            break;
        case 'kelvin':
            celsius = value - 273.15;
            break;
        default:
            celsius = value;
    }

    let result;
    let unitSymbol;

    // Convert from Celsius to target unit
    switch (toUnit) {
        case 'celsius':
            result = celsius;
            unitSymbol = '°C';
            break;
        case 'fahrenheit':
            result = (celsius * 9 / 5) + 32;
            unitSymbol = '°F';
            break;
        case 'kelvin':
            result = celsius + 273.15;
            unitSymbol = 'K';
            break;
        default:
            result = celsius;
            unitSymbol = '°C';
    }

    // ✅ CHANGED: 4 → 2 decimal places
    resultDisplay.innerHTML = `${result.toFixed(2)} <span>${unitSymbol}</span>`;
}

// ============================
// PREVENT SAME UNIT CONVERSION
// ============================
function preventSameUnit() {
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const options = ['celsius', 'fahrenheit', 'kelvin'];

    if (fromUnit.value === toUnit.value) {
        const currentIndex = options.indexOf(fromUnit.value);
        const nextIndex = (currentIndex + 1) % options.length;
        toUnit.value = options[nextIndex];
    }
}

// ============================
// EVENT LISTENERS
// ============================

// On page load - auto convert
window.addEventListener('load', function() {
    document.getElementById('tempInput').value = 35;
    convertTemperature();
});

// On input change - auto convert
document.getElementById('tempInput').addEventListener('input', function() {
    convertTemperature();
});

// On dropdown change - auto convert
document.getElementById('fromUnit').addEventListener('change', function() {
    preventSameUnit();
    convertTemperature();
});

document.getElementById('toUnit').addEventListener('change', function() {
    preventSameUnit();
    convertTemperature();
});