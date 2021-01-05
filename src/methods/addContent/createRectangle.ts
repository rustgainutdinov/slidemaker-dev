import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import getDefaultPosition from "./getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "./getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "./getParamsOfContent/getDefaultShape";
import {Slide} from "../../model/slide/Slide";

function createRectangle(editor: Editor): Editor {
    const rectangle: Rectangle = {
        ...getDefaultShape(ContentType.Rectangle),
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize(),
        layer: editor.currentContent.layer + 1,
        rectangle: undefined
    };
    const newSlidesList: Array<Slide> = editor.currentPresentation.sliderList.map((slide: Slide): Slide => {
        if (slide.slideId !== editor.currentSlide.slideId) {
            return slide;
        }
        return {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [rectangle.uuid]: rectangle
            }
        }
    });
    return {
        ...editor,
        currentContent: rectangle,
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    };
}

export default createRectangle
