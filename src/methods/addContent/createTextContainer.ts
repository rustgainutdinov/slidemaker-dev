import ContentType from "../../const/ContentType";
import Editor from "../../model/Editor";
import TextContainer from "../../model/slide/content/TextContainer";
import generateUuid from "../generateUuid";
import getDefaultContent from "./getParamsOfContent/getDefaultContent";
import { getDefaultTextContainer } from "./getParamsOfContent/getDefaultTextContainer";

function createTextContainer(editor: Editor): Editor {

    const textContainer: TextContainer = {
        ...getDefaultContent(ContentType.TextContainer),
        ...getDefaultTextContainer()
    };
    const uuid = generateUuid();
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [uuid]: textContainer
            }
        },
        currentContent: textContainer
    };
}

export default createTextContainer;
