import Editor from "../../model/Editor";
import {Slide} from "../../model/slide/Slide";
import {getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";

function getDefaultSlide(editor: Editor): Editor {
    const defaultContent = getDefaultTextContainer();
    const slide: Slide = {
        slideId: editor.currentPresentation.sliderList.length,
        background: 'ffffff',
        contentList: {
            [defaultContent.uuid]: defaultContent
        },
        svgDemo: "",
        animation: 1
    };

    return {
        ...editor,
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: [...editor.currentPresentation.sliderList, slide]
        },
        currentSlide: slide,
        currentContent: defaultContent
    };
}

export default getDefaultSlide;
