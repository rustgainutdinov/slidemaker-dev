import ContentType from "../../const/ContentType";
import createTextContainer from "../../methods/addContent/createTextContainer";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import Content from "../../model/slide/content/Content";
import TextContainer from "../../model/slide/content/TextContainer";
import throwNewExeption from "../Exeption";

const editor = getDefaultEditor();
function isTextCntainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}

describe('createTextContainerTest', () => {
    const newEditor = createTextContainer(editor);
    const textContainer = getDefaultTextContainer();

    test('addContentToEditor', () => {
        expect(newEditor.currentContent.type).toBe(ContentType.TextContainer);
        expect(checkInstance()).toBe(true);

        if (!isTextCntainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        expect(newEditor.currentContent.richText).toStrictEqual(textContainer.richText);
        expect(newEditor.currentContent.width).toBe(textContainer.width);
    });

    function checkInstance() {
        if (isTextCntainer(newEditor.currentContent)) {
            return true;
        } else {
            return false
        }
    }
})