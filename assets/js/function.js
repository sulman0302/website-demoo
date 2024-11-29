$( document ).ready(function() {

	 $('.owl-reviews').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay: true,
        autoPlaySpeed: 7000,
        autoPlayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
    });
    

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
  	autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout: 5000,

    responsive:{
        0:{
            items:3
        },
        320:{
        	items:1
        },
        411:{
        	items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

//Sticky menu
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });
//end

});

// slider js
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}