import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import { updateEditorContent } from "../core/updateEditorContent";
import { isImage } from "../typeGuardMethods/isImage";

function updateImage(editor: Editor, newImage: Content): Editor {
    if (!editor.currentContent || !isImage(editor.currentContent)) return editor;
    return updateEditorContent(editor, newImage);
}

export default updateImage