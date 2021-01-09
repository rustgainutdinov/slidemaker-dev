import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import { updateEditorContent } from "../../methods/core/updateEditorContent";
import { isTextContainer } from "../../methods/typeGuardMethods/isTextContainer";
import TextContainer from "../../model/slide/content/TextContainer";
import throwNewExeption from "../Exeption";

const editor = getDefaultEditor();
const newTextContainer: TextContainer = {
    ...getDefaultTextContainer(),
    width: 500
}
const newEditor = updateEditorContent(editor, newTextContainer);

describe('UpdateContentTest', () => {
    if (editor.currentContent == null || newEditor.currentContent == null) return
    const contentBeforeUpdate = editor.currentContent;
    const contentAfterUpdate = newEditor.currentContent;

    if (!isTextContainer(contentAfterUpdate)) {
        throwNewExeption();
        return;
    }

    test('ContentBeforeUpdateNotToBeContentAfter', () => {
        expect(contentBeforeUpdate).not.toBe(contentAfterUpdate);
    });
    test('UpdateContentTest', () => {
        expect(contentAfterUpdate).toStrictEqual({
            ...getDefaultTextContainer(),
            uuid: newEditor.currentContent?.uuid,
            width: 500
        });
    });
})