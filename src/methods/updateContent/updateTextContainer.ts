import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import { updateEditorContent } from "../core/updateEditorContent";
import {isTextContainer} from "../typeGuardMethods/isTextContainer";

function updateTextContainer(editor: Editor, newTextContainer: Content): Editor {
    if (!editor.currentContent || !isTextContainer(editor.currentContent)) return editor;
    return updateEditorContent(editor, newTextContainer);
}

export default updateTextContainer