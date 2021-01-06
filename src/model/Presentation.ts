import {Slide} from "./slide/Slide"
type Presentation = {
	name: string,
	date: Date,
	author: string,
	slides: Array<Slide>
};

export default Presentation
