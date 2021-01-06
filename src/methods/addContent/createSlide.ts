import Editor from "../../model/Editor";
import {Slide} from "../../model/slide/Slide";
import {getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";
import getDefaultSlide from "./getParamsOfContent/getDefaultSlide";

function createSlide(editor: Editor): Editor {
    const content = getDefaultTextContainer();
    const slide: Slide = {
        ...getDefaultSlide(),
        contentList: {
            [content.uuid]: content
        },
        slideId: editor.currentPresentation.slides.length
    };
    return {
        ...editor,
        currentPresentation: {
            ...editor.currentPresentation,
            slides: [...editor.currentPresentation.slides, slide]
        },
        currentSlide: slide,
        currentContent: content
    };
}

export default createSlide;
