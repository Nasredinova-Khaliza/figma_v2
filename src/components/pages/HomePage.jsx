import Section2 from "./HomeSections/Section2";
import Section3 from "./HomeSections/Section3";
import Section4 from "./HomeSections/Section4";
import SliderImg from "./HomeSections/SliderImg";
import Welcome from "./HomeSections/Welcome";

const HomePage = () => {
	return (
		<>
			<Welcome />
			<SliderImg />
			<Section2 />
			<Section3 />
			<Section4 />
		</>
	);
};

export default HomePage;
