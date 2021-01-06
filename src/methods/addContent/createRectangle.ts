import Editor from "../../model/Editor";
import {updateEditorContent} from "../core/updateEditorContent";
import {getDefaultRectangle} from "./getParamsOfContent/getDefaultRectangle";

function createRectangle(editor: Editor): Editor {
    if (!editor.currentContent) return editor;

    return updateEditorContent(editor, {
        ...getDefaultRectangle(),
        layer: editor.currentContent.layer + 1
    });
}

export default createRectangle
