import {Slide} from "../../../model/slide/Slide";

function getDefaultSlide(): Slide {
    return {
        slideId: 0,
        background: '#FFFFFF',
        contentList: {},
        svgDemo: "",
        backgroundImage: '',
        animation: 1
    }
}

export default getDefaultSlide
