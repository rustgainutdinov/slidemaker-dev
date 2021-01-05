import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import getDefaultShape from "./getParamsOfContent/getDefaultShape";
import {Slide} from "../../model/slide/Slide";

function createCircle(editor: Editor): Editor {
    const circle: Circle = {
        ...getDefaultShape(ContentType.Circle),
        radius: 100,
        circle: undefined,
        layer: editor.currentContent.layer + 1
    };
    const newSlidesList: Array<Slide> = editor.currentPresentation.sliderList.map((slide: Slide): Slide => {
        if (slide.slideId !== editor.currentSlide.slideId) {
            return slide;
        }
        return {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [circle.uuid]: circle
            }
        }
    });
    return {
        ...editor,
        currentContent: circle,
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    }
}

export default createCircle
