import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import getDefaultShape from "./getParamsOfContent/getDefaultShape";

function createCircle(editor: Editor): Editor {
    const circle: Circle = {
        ...getDefaultShape(ContentType.Circle),
        radius: 100,
        circle: undefined
    };
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [circle.uuid]: circle
            }
        },
        currentContent: circle
    }
}

export default createCircle
