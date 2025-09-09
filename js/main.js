Fancybox.bind("[data-fancybox]");

var swiper = new Swiper(".mySwiper", {
  //   centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let count = 1; // يبدأ من 1
const value = document.getElementById("value");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

minus.addEventListener("click", () => {
  if (count > 1) {
    // علشان ميقلش عن 1
    count--;
    value.textContent = count;
  }
});
