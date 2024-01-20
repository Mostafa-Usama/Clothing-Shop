var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
      },
     breakpoints: {
         640: {
             slidesPerView: 2,
             spaceBetween: 20,
         },
         768: {
             slidesPerView: 4,
             spaceBetween: 40,
         },
         1024: {
             slidesPerView: 6,
             spaceBetween: 15,
         },
     }
    });