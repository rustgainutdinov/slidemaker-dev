import createCircle from "../../Methods/AddContent/createCircle";
import getDefaultEditor from "../../Methods/AddContent/getDefaultEditor";

const editor = getDefaultEditor();
const newEditor = createCircle(editor);

describe('changeCurrentContentTest', () => {
    const firstId = editor.currentContent.uuid;
    const secondId = newEditor.currentContent.uuid;

    test('addContentToEditor', () => {
        expect(firstId).not.toBe(secondId);
    });
})