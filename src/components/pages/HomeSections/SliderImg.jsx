import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 5000, easing: (t) => t };
import img1 from "../../../assets/brand/Layer 1.svg";
import img2 from "../../../assets/brand/2.svg";
import img3 from "../../../assets/brand/image 14.svg";
import img4 from "../../../assets/brand/4.svg";
import img5 from "../../../assets/brand/image 16.svg";
import img6 from "../../../assets/brand/6.svg";
import img7 from "../../../assets/brand/7.svg";
import scss from "./SliderImg.module.scss";

const brands = [
	{
		img: img1,
	},
	{
		img: img2,
	},
	{
		img: img3,
	},
	{
		img: img4,
	},
	{
		img: img5,
	},
	{
		img: img6,
	},
	{
		img: img7,
	},
];
const SliderImg = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 1000px)": {
				slides: { perView: 3, spacing: 0 },
			},
		},
		slides: { perView: 2, spacing: 10 },
		loop: true,
		renderMode: "performance",
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 6, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 6, true, animation);
		},
	});
	return (
		<section className={scss.Section3}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards} ref={sliderRef}>
						{brands.map((item, index) => (
							<div key={index} className="keen-slider__slide">
								<img src={item.img} alt="brand" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SliderImg;
