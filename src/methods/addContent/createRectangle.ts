import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import getDefaultPosition from "./getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "./getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "./getParamsOfContent/getDefaultShape";

function createRectangle(editor: Editor): Editor {
    const rectangle: Rectangle = {
        ...getDefaultShape(ContentType.Rectangle),
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize(),
        rectangle: undefined
    };

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [rectangle.uuid]: rectangle
            }
        },
        currentContent: rectangle
    };
}

export default createRectangle
