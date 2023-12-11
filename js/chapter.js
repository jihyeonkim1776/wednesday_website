const swiper = new Swiper(".normal", {
  initialSlide: 1,
  direction: "horizontal",
  autoplay: true,
  loop: true,
  loopedSlides: 3, // 보여지는 슬라이드 수와 동일하게 설정
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 0,
  slidesPerView: 3,
  centeredSlides: true,
  speed: 1000,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    depth: 300,

    slideShadows: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const tree1 = document.querySelector(".tree #tree1");
  const tree2 = document.querySelector(".tree #tree2");
  const fog1 = document.querySelector("#fog1");
  const fog2 = document.querySelector("#fog2");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    tree1.style.transform = `translateX(${scrollY * 0.5}px)`;
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    tree2.style.transform = `translateX(${scrollY * -0.5}px)`;
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    fog1.style.transform = `translateX(${scrollY * -0.2}px)`;
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    fog2.style.transform = `translateX(${scrollY * 0.2}px)`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const crows = document.querySelectorAll(".bird .crow");
  const commonInitialOffset = 100; // Adjust this value as needed

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    crows.forEach((crow, index) => {
      const initialOffset = index * 50; // Adjust this value for different initial positions
      crow.style.transform = `translateY(${
        scrollY * -0.9 + initialOffset + commonInitialOffset
      }px) translateX(${scrollY * (-0.5 + index * 0.5)}px)`;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const birds = document.querySelectorAll(".bird img");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    birds.forEach((bird) => {
      // Toggle visibility based on scroll position
      if (scrollY > 50) {
        bird.style.visibility = "visible";
      } else {
        bird.style.visibility = "hidden";
      }
    });
  });
});

// chapter3

const items = document.querySelectorAll("article");

for (let el of items) {
  el.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });

  el.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}
