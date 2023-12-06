/**
 * swiper
 */
const swiper = new Swiper(".wrap", {
  spaceBetween: 0,
  direction: "horizontal", // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  pagination: {
    el: ".swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    type: "fraction",
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    nextEl: ".swiper-button-next", // 이전 버튼 선택자
    prevEl: ".swiper-button-prev", // 다음 버튼 선택자
  },
  spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerView: "3", // 한 번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  speed: 1300,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 10,
    stretch: -5,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
});
