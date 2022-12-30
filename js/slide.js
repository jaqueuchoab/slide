export default class Slide {
  constructor(slideItem, slideWrapper) {
    this.slideItem = document.querySelector(slideItem);
    this.slideWrapper = document.querySelector(slideWrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0
    }
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slideItem.style.transform = `translate3d(${distX}px, 0px, 0px)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    console.log(this.dist.movement);
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    if (event.type === 'mousedown') {
      event.preventDefault();
      // O clientX é uma propriedade de leitura da interface MouseEvent que fornece as coordenadas horizontais dentro da área do aplicativo
      this.dist.startX = event.clientX;
    } else {
      this.dist.startX = event.changedsTouches[0].clientX;
    }
  
    this.slideWrapper.addEventListener('mousemove', this.onMove);
    this.slideWrapper.addEventListener('touchmove', this.onMove);
  }

  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    this.slideWrapper.removeEventListener('mousemove', this.onMove);
    this.slideWrapper.removeEventListener('touchmove', this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addEventSlide() {
    this.slideWrapper.addEventListener('mousedown', this.onStart);
    this.slideWrapper.addEventListener('toushstart', this.onStart);
    this.slideWrapper.addEventListener('mouseup', this.onEnd);
    this.slideWrapper.addEventListener('touchend', this.onEnd);
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