/*=========================
 LOADER
=========================*/

document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

},800);

});


/*=========================
 SMOOTH SCROLL
=========================*/

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});


/*=========================
 ACTIVE NAVBAR
=========================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;
const offset=sec.offsetTop-150;
const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================
 SCROLL REVEAL
=========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(80px)";
sec.style.transition=".8s ease";

observer.observe(sec);

});


/*=========================
 FLOATING STARS
=========================*/

const stars=document.querySelector(".stars");

if(stars){

for(let i=0;i<80;i++){

const star=document.createElement("span");

star.style.position="absolute";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.width="2px";

star.style.height="2px";

star.style.borderRadius="50%";

star.style.background="white";

star.style.opacity=Math.random();

star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

stars.appendChild(star);

}

}


/*=========================
 COUNTER ANIMATION
=========================*/

const counters=document.querySelectorAll(".fact-card h2");

const speed=150;

const animateCounter=(counter)=>{

const update=()=>{

const target=counter.innerText.replace(/\D/g,'');

const value=+counter.getAttribute("data-count") || +target;

const current=+counter.innerText.replace(/\D/g,'');

const increment=Math.ceil(value/speed);

if(current<value){

counter.innerText=(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target+(counter.innerText.includes("+")?"+":"");

}

};

update();

};

counters.forEach(counter=>{

counter.setAttribute("data-count",counter.innerText.replace(/\D/g,''));

counter.innerText="0";

animateCounter(counter);

});


/*=========================
 BACK TO TOP
=========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#06b6d4";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px cyan";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*=========================
 CONTACT FORM
=========================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🚀 Message Sent Successfully!");

form.reset();

});

}
