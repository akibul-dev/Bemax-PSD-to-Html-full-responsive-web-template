$(document).ready(function(){


    // slider
    $('.slider-active').owlCarousel({
        loop:true,
        
navText:['<i class="fa-sharp fa-solid fa-angle-left"></i>','<i class="fa-sharp fa-solid fa-angle-right"></i>',],        nav:true,
        
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
        }
    });






    // project slider

    $('.active-project').owlCarousel({
        loop:true,
        nav:true,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


    $('.blog-warper').owlCarousel({
        loop:true,
        
        navText:['<i class="fa-sharp fa-solid fa-angle-left"></i>','<i class="fa-sharp fa-solid fa-angle-right"></i>',],        nav:true,
   
        
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
        }
    })


    $('.popup').magnificPopup({
        type: 'image'
        // other options
      });

});



