import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import TextContainer from "../../model/slide/content/TextContainer";
import getDefaultContent from "./getParamsOfContent/getDefaultContent";
import {getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";
import {Slide} from "../../model/slide/Slide";

function createTextContainer(editor: Editor): Editor {

    const textContainer: TextContainer = {
        ...getDefaultContent(ContentType.TextContainer),
        ...getDefaultTextContainer(),
        layer: editor.currentContent.layer + 1,
        textContainer: undefined
    };
    const newSlidesList: Array<Slide> = editor.currentPresentation.sliderList.map((slide: Slide): Slide => {
        if (slide.slideId !== editor.currentSlide.slideId) {
            return slide;
        }
        return {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [textContainer.uuid]: textContainer
            }
        }
    });
    return {
        ...editor,
        currentContent: textContainer,
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    };
}

export default createTextContainer;
