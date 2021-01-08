import createTextContainer from "../../methods/addContent/createTextContainer";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor"
import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import { isTextContainer } from "../../methods/typeGuardMethods/isTextContainer";
import updateTextContainer from "../../methods/updateContent/updateTextContainer";
import TextContainer from "../../model/slide/content/TextContainer";
import throwNewExeption from "../Exeption";


describe('updateTextContainerTests', () => {
    const editor = getDefaultEditor();
    const textContainer: TextContainer = {
        ...getDefaultTextContainer(),
        width: 300
    }
    const editorAfterAddedTextContainer = createTextContainer(editor);
    const newEditor = updateTextContainer(editorAfterAddedTextContainer, textContainer);
    test('updateTextContainerTests', () => {
        if (newEditor.currentContent == null) return

        if (!isTextContainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (newEditor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultTextContainer(),
            uuid: newEditor.currentContent.uuid,
            width: 300
        });
    });
})