import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');

slide.init();
slide.addArrows('.prev', '.next');

/*slide.addControl => por padrão tem os controles já prontos mas também aceita outros controles que podem ser passados por parametro por meio da classe dos mesmos*/

//usando custom-controls
slide.addControl('.custom-controls');