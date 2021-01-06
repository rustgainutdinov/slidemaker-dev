import Editor from "../../model/Editor";
import {getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";
import {updateEditorContent} from "../core/updateEditorContent";

function createTextContainer(editor: Editor): Editor {
    if (!editor.currentContent) return editor;

    return updateEditorContent(editor, {
        ...getDefaultTextContainer(),
        layer: editor.currentContent.layer + 1
    });
}

export default createTextContainer;
