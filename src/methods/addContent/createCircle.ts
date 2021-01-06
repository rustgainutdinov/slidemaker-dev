import Editor from "../../model/Editor";
import {getDefaultCircle} from "./getParamsOfContent/getDefaultCircle";
import {updateEditorContent} from "../core/updateEditorContent";

function createCircle(editor: Editor): Editor {
    if (!editor.currentContent) return editor;

    return updateEditorContent(editor, {
        ...getDefaultCircle(),
        layer: editor.currentContent.layer + 1
    });
}

export default createCircle
