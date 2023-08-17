var swiper = new Swiper(".mySwiper-1", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        760: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }

});
var swiper = new Swiper(".mySwiper-2", {
    spaceBetween: 10,
    centeredSlides: true,
    // slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        700: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        1000: {
          slidesPerView: 3,
          // spaceBetween: 20
        },

      }

});