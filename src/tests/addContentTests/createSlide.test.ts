import createSlide from "../../methods/addContent/createSlide";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { isTextContainer } from "../../methods/typeGuardMethods/isTextContainer";
import Editor from "../../model/Editor";
import throwNewExeption from "../Exeption";

const editor: Editor = getDefaultEditor();

describe('createRectangleTest', () => {
    if (editor.currentContent == null) {
        return
    };
    test('createRectangleTest', () => {
        const newEditor = createSlide(editor);
        if (newEditor.currentContent == null) return

        if (!isTextContainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (editor.currentContent == undefined) return
        expect(newEditor.currentContent.richText).toStrictEqual({
            color: '#000000', fontWeight: 600, fontFamily: 'Roboto',
            fontSize: 40, fontStyle: 'normal', value: 'Текст'
        })
        expect(newEditor.currentContent.width).toBe(400);
        expect(newEditor.currentContent.position).toStrictEqual({
            x: 100,
            y: 100
        })
        expect(newEditor.currentPresentation.slides.length).toBe(editor.currentPresentation.slides.length + 1)
    });

});