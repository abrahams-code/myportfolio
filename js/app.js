/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/*=========================================
    STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(2,6,23,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background = "rgba(11,17,32,.85)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
    SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
".about,.skills,.projects,.project-card,.skill"
);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            el.classList.add("visible");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*=========================================
    BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});


/*=========================================
    HERO TEXT ANIMATION
=========================================*/

const heroTitle = document.querySelector(".hero-left h1");

heroTitle.animate(

[
    {
        opacity:0,
        transform:"translateY(40px)"
    },

    {
        opacity:1,
        transform:"translateY(0)"
    }

],

{
    duration:1200
}

);

/*==========================
Animated Counter
==========================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/120;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});