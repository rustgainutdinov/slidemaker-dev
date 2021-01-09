import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { updateSlideBackground } from "../../methods/updateContent/updateSlideBackground";

const editor = getDefaultEditor();
const newBackgroundColor: string = 'testColor';
const editorAfterChangeSlideBackgroundName = updateSlideBackground(editor, newBackgroundColor);

describe('ChangePresentationNameTest', () => {
    test('NewPresentationNameTest', () => {
        expect(editorAfterChangeSlideBackgroundName.currentSlide?.background).toBe(newBackgroundColor);
    });
})