import ContentType from "../../const/ContentType";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import updateTextContainerWidth from "../../methods/updateContent/updateTextContainerWidth";
import Content from "../../model/slide/content/Content";
import TextContainer from "../../model/slide/content/TextContainer";
import throwNewExeption from "../Exeption";

function isTextCntainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}
function checkInstance(content: Content) {
    if (isTextCntainer(content)) {
        return true;
    } else {
        return false
    }
}
const editor = getDefaultEditor();
const textContainer: TextContainer = {
    ...getDefaultShape(ContentType.TextContainer),
    ...getDefaultTextContainer()
};

editor.currentContent = textContainer;
describe('updateTextContainerWidthTest', () => {

    const newEditor = updateTextContainerWidth(editor, 200)

    test('checkNewSize', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        };
        if (!isTextCntainer(newEditor.currentContent)) {
            throwNewExeption
            return;
        }

        expect(newEditor.currentContent.width).toBe(200);

        expect(checkInstance(newEditor.currentContent)).toBe(true)
    });

})