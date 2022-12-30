export default class Slide {
  constructor(slideItem, slideWrapper) {
    this.slideItem = document.querySelector(slideItem);
    this.slideWrapper = document.querySelector(slideWrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.slideWrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {
  }

  onEnd(event) {
    this.slideWrapper.removeEventListener('mousemove', this.onMove)
  }

  addEventSlide() {
    this.slideWrapper.addEventListener('mousedown', this.onStart);
    this.slideWrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addEventSlide();
    return this;
  }
}