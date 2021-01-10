import {updateSlidesListContent} from "./updateSlidesListContent";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";

export function updateEditorContent(editor: Editor, content: Content): Editor {
    if (!editor.currentSlide) return editor;
    const updatedSlides = updateSlidesListContent(editor, content);
    return {
        currentContent: content,
        currentSlide: updatedSlides[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            slides: updatedSlides
        }
    }
}