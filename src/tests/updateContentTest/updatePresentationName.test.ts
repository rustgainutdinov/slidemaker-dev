import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { updatePresentationName } from "../../methods/updateContent/updatePresentationName";

const editor = getDefaultEditor();
const newPresentationName: string = 'testName';
const editorAfterChangePresentationName = updatePresentationName(editor, newPresentationName);

describe('ChangePresentationNameTest', () => {
    test('NewPresentationNameTest', () => {
        expect(editorAfterChangePresentationName.currentPresentation.name).toBe(newPresentationName);
    });
})