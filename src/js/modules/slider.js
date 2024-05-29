import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';


export const startSlider = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Autoplay, EffectFade],
		effect: "fade",
		loop: true,

		autoplay: {
			delay: 2500,
		}
	});
}