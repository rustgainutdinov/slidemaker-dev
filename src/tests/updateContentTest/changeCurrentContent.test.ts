import createCircle from "../../methods/addContent/createCircle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";

const editor = getDefaultEditor();
const newEditor = createCircle(editor);

describe('changeCurrentContentTest', () => {
    if (editor.currentContent == null || newEditor.currentContent == null) return
    const firstId = editor.currentContent.uuid;
    const secondId = newEditor.currentContent.uuid;

    test('addContentToEditor', () => {
        expect(firstId).not.toBe(secondId);
    });
})