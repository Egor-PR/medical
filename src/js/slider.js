const container = document.querySelector(".slider__win");
const slides = document.querySelectorAll(".slider__content-block");
const buttonsNext = document.querySelectorAll(".block__button-next");
const buttonsPrev = document.querySelectorAll(".block__button-prev");
const sliderLine = document.querySelector(".slider__line");
sliderLine.style.left = 0;

const containerWidth = container.offsetWidth;

buttonsNext.forEach((button, ndx) => {
  button.addEventListener("click", (e) => {
    if (ndx === buttonsNext.length - 1) {
      return
    }
    const currentLeftPosition = parseFloat(sliderLine.style.left);
    sliderLine.style.left = `${-(containerWidth - currentLeftPosition)}px`;
  })
})
buttonsPrev.forEach((button, ndx) => {
  button.addEventListener("click", (e) => {
    if (ndx === 0) {
      return
    }
    const currentLeftPosition = parseFloat(sliderLine.style.left);
    sliderLine.style.left = `${(currentLeftPosition + containerWidth)}px`;
  })
})