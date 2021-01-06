import Editor from "../../model/Editor";
import { updateEditorContent } from "../core/updateEditorContent";
import { getDefaultImage } from "./getParamsOfContent/getDefaultImage";

function createImage(editor: Editor): Editor {
    if (!editor.currentContent) return editor;

    return updateEditorContent(editor, {
        ...getDefaultImage(),
        layer: editor.currentContent.layer + 1,
    });
}

export default createImage