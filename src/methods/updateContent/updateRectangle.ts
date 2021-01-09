import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import { updateEditorContent } from "../core/updateEditorContent";
import {isRectangle} from "../typeGuardMethods/isRectangle";

function updateRectangle(editor: Editor, newRectangle: Content): Editor {
    if (!editor.currentContent || !isRectangle(editor.currentContent)) return editor;
    return updateEditorContent(editor, newRectangle);
}

export default updateRectangle