import createRectangle from "../../methods/addContent/createRectangle";
import createTextContainer from "../../methods/addContent/createTextContainer";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import { isTextContainer } from "../../methods/typeGuardMethods/isTextContainer";
import Editor from "../../model/Editor";
import throwNewExeption from "../Exeption";

const editor: Editor = getDefaultEditor();

describe('createRectangleTest', () => {
    if (editor.currentContent == null) {
        return
    };
    test('createRectangleTest', () => {
        const newEditor = createTextContainer(editor);
        if (newEditor.currentContent == null) return

        if (!isTextContainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (editor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultTextContainer(),
            uuid: newEditor.currentContent.uuid,
            layer: editor.currentContent?.layer + 1
        })
    });

});