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

  onEndMove() {
     this.slideWrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
     this.slideWrapper.addEventListener('mousedown', this.onStart);
     this.slideWrapper.addEventListener('mouseup', this.onEndMove);
  }

  bindEvents() {
     this.onStart = this.onStart.bind(this);
     this.onMove = this.onMove.bind(this);
     this.onEndMove = this.onEndMove.bind(this);
  }

  init() {
     this.bindEvents();
     this.addSlideEvents();
  }
}
