let position = 0; //начальная позиция
const slidesToShow = 4;
const slidesToScroll = 3;
const container = document.querySelector('.container'); //.container
const track = document.querySelector('.slider__content'); //.slider__content
const btnPrev = document.querySelector('.block__button-back');
const btnNext = document.querySelector('.block__button');
const items = document.querySelectorAll('.slider__content-block'); //.slider__block-content
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});


btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `tranlateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();
