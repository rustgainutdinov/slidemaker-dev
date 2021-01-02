import {Slide} from "./Slide/Slide"
type Presentation = {
	name: string,
	date: Date,
	author: string,
	sliderList: Array<Slide>
};

export default Presentation
