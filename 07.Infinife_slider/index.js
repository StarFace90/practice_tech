const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".slides");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const interval = 1000;

let slides = document.querySelectorAll(".slide");
console.log(slides); // div.slide [6]

let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

console.log(firstClone); // bear 사진
console.log(lastClone); // tiger 사진

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

//console.log(slideWidth);

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNext();
  }, interval);
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".slide");
  console.log(slides[index].id);
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToPrev = () => {
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s"; // 스무스하게 넘기는 효과
};

const moveToNext = () => {
  slides = document.querySelectorAll(".slide");
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".7s"; // 스무스하게 넘기는 효과
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);

prevBtn.addEventListener("click", moveToPrev);
nextBtn.addEventListener("click", moveToNext);

startSlide();
