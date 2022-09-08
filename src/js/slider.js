
let offset = 0; // начальная позиция
const sliderLine = document.querySelector('.slider__line');
document.querySelector('.block__button-next').addEventListener('click', function () {
  offset = offset + 1197;
  if (ofset > 4580) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

  document.querySelector('.block__button-prev').addEventListener('click', function(){
    offset = offset - 1197;
    if (ofset<0) {
      offset = 4580;
    }

  sliderLine.style.left = -offset + 'px';
});