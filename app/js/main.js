document.getElementById("year").innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function() {
    if(this.scrollY > 10){
        $(".header").addClass("sticks");
    }else{
        $(".header").removeClass("sticks");
    }
})

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("active");
        $(".nav").toggleClass("active");
        $(".nav__menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });
})

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


const swiper = new Swiper(".swiper-container", {
    slidePerView:1,
    spaceBetween:20,
    loop:true,
    grabCursor:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});