import {Slide} from "./slide/Slide"
type Presentation = {
	name: string,
	date: Date,
	author: string,
	sliderList: Array<Slide>
};

export default Presentation
