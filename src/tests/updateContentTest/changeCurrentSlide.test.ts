import createSlide from "../../methods/addContent/createSlide";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";

const editor = getDefaultEditor();
const newEditor = createSlide(editor);

describe('changeCurrentSlideTest', () => {
    if (editor.currentContent == null || newEditor.currentContent == null) return
    const firstId = editor.currentSlide?.slideId;
    const secondId = newEditor.currentSlide?.slideId;

    test('addSlideToEditor', () => {
        expect(firstId).not.toBe(secondId);
    });
})