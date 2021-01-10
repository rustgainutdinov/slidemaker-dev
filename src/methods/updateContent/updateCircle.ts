import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import {updateEditorContent} from "../core/updateEditorContent";
import {isCircle} from "../typeGuardMethods/isCircle";

function updateCircle(editor: Editor, newCircle: Content): Editor {
    if (!editor.currentContent || !isCircle(editor.currentContent)) return editor;
    return updateEditorContent(editor, newCircle);
}

export default updateCircle