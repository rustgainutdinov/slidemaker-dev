import Editor from "../../model/Editor";
import {updateEditorContent} from "../core/updateEditorContent";

function changeCurrentContent(editor: Editor, newContentUuid: string): Editor {
    if (!editor.currentSlide || !editor.currentContent) return editor;
    return updateEditorContent(editor, {
        ...editor.currentSlide.contentList[newContentUuid],
        layer: editor.currentContent.layer + 1
    })
}

export default changeCurrentContent
