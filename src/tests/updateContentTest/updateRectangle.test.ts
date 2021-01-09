import createRectangle from "../../methods/addContent/createRectangle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor"
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";
import { isRectangle } from "../../methods/typeGuardMethods/isRectangle";
import updateRectangle from "../../methods/updateContent/updateRectangle";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import throwNewExeption from "../Exeption";


describe('updateRectangleTests', () => {
    const editor = getDefaultEditor();
    const rectangle: Rectangle = {
        ...getDefaultRectangle(),
        background: '#000'

    }
    const editorAfterAddedRectangle = createRectangle(editor);
    const newEditor = updateRectangle(editorAfterAddedRectangle, rectangle);
    test('updateRectangleTests', () => {
        if (newEditor.currentContent == null) return

        if (!isRectangle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (newEditor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultRectangle(),
            uuid: newEditor.currentContent.uuid,
            background: '#000'
        });
    });
})