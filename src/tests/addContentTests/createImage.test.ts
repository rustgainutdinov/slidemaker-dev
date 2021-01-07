import createImage from "../../methods/addContent/createImage";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";
import { isImage } from "../../methods/typeGuardMethods/isImage";
import Editor from "../../model/Editor";
import throwNewExeption from "../Exeption";

const editor: Editor = getDefaultEditor();

describe('createImageTest', () => {
    if (editor.currentContent == null) {
        return
    };

    test('createImageTest', () => {
        const newEditor = createImage(editor);
        if (newEditor.currentContent == null) return

        if (!isImage(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (editor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultImage(),
            uuid: newEditor.currentContent.uuid,
            layer: editor.currentContent?.layer + 1
        })
    });

});