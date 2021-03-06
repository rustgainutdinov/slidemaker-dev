import createRectangle from "../../methods/addContent/createRectangle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";
import { isRectangle } from "../../methods/typeGuardMethods/isRectangle";
import Editor from "../../model/Editor";
import throwNewExeption from "../Exeption";

const editor: Editor = getDefaultEditor();

describe('createRectangleTest', () => {
    if (editor.currentContent == null) {
        return
    };
    test('createRectangleTest', () => {
        const newEditor = createRectangle(editor);
        if (newEditor.currentContent == null) return

        if (!isRectangle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (editor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultRectangle(),
            uuid: newEditor.currentContent.uuid,
            layer: editor.currentContent?.layer + 1
        })
    });

});