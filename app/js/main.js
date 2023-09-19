document.getElementById("year").innerHTML = new Date().getFullYear();

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
// preloader start
window.onload =() => {
    const preloader = document.querySelector(".preloader");
    preloader.style.display ="none";

    // hero animation
    tl.from(".nav__item, .nav__btnWrapper", {
        opacity:0,
        y:-60,
        duration:0.5,
        stagger:0.1,
        ease:Expo.easeOut
    });
    tl.from(".fade-left",{
        opacity:0,
        x:100,
        duration:0.6,
        ease:Power4.easeOut,
    },"-=0.1");
    tl.from(".fade-up",{
        opacity:0,
        y:60,
        duration:0.6,
        stagger:0.5,
        ease:Power4.easeOut,
    }, "-=0.3");
    tl.from(".aside__item", {
        opacity:0,
        x:-50,
        duration:0.2,
        stagger:0.2,
        ease:Expo.easeInOut
    },"-=0.1");
  
}
// preloader end

// sticky navbar start
window.addEventListener("scroll", function() {
    if(this.scrollY > 10){
        $(".header").addClass("sticks");
    }else{
        $(".header").removeClass("sticks");
    }
})
// sticky navbar end

// Toggle Nav Menu start
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("active");
        $(".nav").toggleClass("active");
        $(".nav__menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });
})
// Toggle Nav Menu end

// Counter start
const counterSection = document.querySelector(".counters");
const counts = document.querySelectorAll(".count");
if(counts != null && counterSection != null){
    let counterObserver = new IntersectionObserver((entries, observer)=>{
        let [entry] = entries;
        if(!entry.isIntersecting) return;
        let speed = 200;
        counts.forEach((count,index)=>{
            const updateCounts =()=>{
                let targetNumber = +count.dataset.target;
                let initialValue = +count.innerText;
                let incPerCount = targetNumber / speed;
                if(initialValue < targetNumber){
                    count.innerText = Math.ceil(initialValue + incPerCount);
                    setTimeout(updateCounts, 20);
                }
            }
            updateCounts();
        });
        observer.unobserve(counterSection);
    });
    counterObserver.observe(counterSection);
}
// Counter end

// swiper start
const swiper1 = new Swiper(".swiper-container", {
    slidePerView:1,
    spaceBetween:20,
    loop:true,
    grabCursor:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

const swiper2 = new Swiper(".swiper-career", {
    slidePerView:1,
    loop:true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});
// swiper end

// Gsap ANimation start
const fadeIn = gsap.utils.toArray(".fadeIn");
fadeIn.forEach((content,i)=>{
    const anim = gsap.from(content, {
        opacity:0, duration:1
    });
    ScrollTrigger.create({
        trigger:content,
        animation:anim,
        toggleActions:'play',
        duration:1,
        ease:Power4.easeOut
    })
});

const fadeInLeft = gsap.utils.toArray(".fadeIn-left");
fadeInLeft.forEach((content,i)=>{
    const anim = gsap.from(content, {
        opacity:0, duration:1,x:-50
    });
    ScrollTrigger.create({
        trigger:content,
        animation:anim,
        toggleActions:'play',
        duration:1,
        ease:Power4.easeOut
    })
});

const fadeUp = gsap.utils.toArray(".fadeUp");
fadeUp.forEach((content,i)=>{
    const anim = gsap.from(content, {
        opacity:0, y:60, duration:1
    });
    ScrollTrigger.create({
        trigger:content,
        animation:anim,
        toggleActions:'play',
        duration:1,
        stagger:1,
        ease:Power4.easeOut
    })
});

const imageReveal = gsap.utils.toArray(".img-reveal");
imageReveal.forEach((content,i)=>{
    const anim = gsap.fromTo(content, 
        { opacity:0, left:"0%",},
        { opacity:1, left:"100%", duration:1.5}
        );
    ScrollTrigger.create({
        trigger:content,
        animation:anim,
        toggleActions:'play',
        ease:Power4.easeOut
    })
});


const slideLeft = gsap.utils.toArray(".slide-left");
slideLeft.forEach((content,i)=>{
    const anim = gsap.fromTo(content, 
        { opacity:0, x:-50,},
        { opacity:1, x:0, duration:1}
        );
    ScrollTrigger.create({
        trigger:content,
        animation:anim,
        toggleActions:'play',
        duration:1,
        ease:Power4.easeOut
    })
});

const slideRight = gsap.utils.toArray(".slide-right");
slideRight.forEach((content,i)=>{
    const anim = gsap.fromTo(content, 
        { opacity:0, x:50,},
        { opacity:1, x:0, duration:1}
        );
    ScrollTrigger.create({
        trigger:content,
        animation:anim,
        toggleActions:'play',
        duration:1,
        ease:Power4.easeOut
    })
});



