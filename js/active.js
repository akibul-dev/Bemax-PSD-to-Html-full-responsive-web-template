$(document).ready(function(){
// main-menu.........................................

jQuery('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'

});
    // slider...............................................
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
                items: 2
            },
            768:{
                items: 3
            },
            1000:{
                items:5
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

            768:{
                items:1
            },
            1000:{
                items:1
            },

            1200:{
                items:1
            }
            

        }
    })


    $('.popup').magnificPopup({
        type: 'image'
        // other options
      });

});



