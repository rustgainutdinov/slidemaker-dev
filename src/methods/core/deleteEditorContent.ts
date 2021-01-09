import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import { deleteSlidesListContent } from "./deleteFromSlideList";

export function deleteEditorContent(editor: Editor, content: Content | null): Editor {
    if (!editor.currentSlide) return editor;
    const deleteSlideContent = deleteSlidesListContent(editor, content);

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...deleteSlideContent
            }
        }
    }
}