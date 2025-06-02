const menuopenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");
const navlinks = document.querySelectorAll(".nav-menu .nav-link");

menuopenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
});

menucloseButton.addEventListener("click", () => menuopenButton.click()

);

navlinks.forEach(link => {
    link.addEventListener("click", ()=>menuopenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
  
  });