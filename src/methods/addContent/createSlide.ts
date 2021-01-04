import Editor from "../../model/Editor";
import { Slide } from "../../model/slide/Slide";

function getDefaultSlide(editor: Editor): Editor {
    const slide: Slide = {
        slideId: editor.currentSlide.slideId + 1,
        background: 'ffffff',
        contentList: {},
        svgDemo: "",
        animation: 1
    };

    return {
        ...editor,
        currentSlide: slide
    };
}

export default getDefaultSlide;
