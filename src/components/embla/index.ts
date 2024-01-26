import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './buttons'

const OPTIONS: EmblaOptionsType = { align: 'start', containScroll: 'trimSnaps' };

const emblaNode = <HTMLElement>document.querySelector('.embla');
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport');
const prevBtn = <HTMLElement>emblaNode.querySelector('.embla__prev');
const nextBtn = <HTMLElement>emblaNode.querySelector('.embla__next');
const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn);

emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
