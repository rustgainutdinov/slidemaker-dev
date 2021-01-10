import Editor from "../../model/Editor";
import {updateEditorContent} from "../core/updateEditorContent";
import {getCurrentMaxLayer} from "../core/getCurrentMaxLayer";

function changeCurrentContent(editor: Editor, newContentUuid: string): Editor {
    if (!editor.currentSlide) return editor;
    if (editor.currentContent && (editor.currentContent.uuid == newContentUuid)) return editor;
    return updateEditorContent(editor, {
        ...editor.currentSlide.contentList[newContentUuid],
        layer: getCurrentMaxLayer(editor) + 1
    })
}

export default changeCurrentContent
