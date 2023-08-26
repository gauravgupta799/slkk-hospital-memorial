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