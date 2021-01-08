import createCircle from "../../methods/addContent/createCircle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor"
import { getDefaultCircle } from "../../methods/addContent/getParamsOfContent/getDefaultCircle";
import { isCircle } from "../../methods/typeGuardMethods/isCircle";
import updateCircle from "../../methods/updateContent/updateCircle";
import Circle from "../../model/slide/content/shape/Circle";
import throwNewExeption from "../Exeption";


describe('updateCircleTests', () => {
    const editor = getDefaultEditor();
    const circle: Circle = {
        ...getDefaultCircle(),
        radius: 300
    }
    const editorAfterAddedCircle = createCircle(editor);
    const newEditor = updateCircle(editorAfterAddedCircle, circle);
    test('updateCircleTests', () => {
        if (newEditor.currentContent == null) return

        if (!isCircle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (newEditor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultCircle(),
            uuid: newEditor.currentContent.uuid,
            radius: 300
        });
    });
})