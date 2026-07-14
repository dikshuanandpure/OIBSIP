/* ==========================
   PORTFOLIO SCRIPT
========================== */

// Welcome
window.addEventListener("load", () => {
    console.log("Portfolio Loaded Successfully");
});

/* ==========================
   Typing Animation
========================== */

const words = [
    "Computer Engineering Student",
    "Frontend Web Developer",
    "Java Programmer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


/* ==========================
   Scroll Reveal
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s ease";

    observer.observe(section);

});


/* ==========================
   Active Navbar
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {

        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = sec.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ==========================
   Back To Top Button
========================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}