import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import {updateSlidesListContent} from "../core/updateSlidesListContent";

export function updateContent(editor: Editor, content: Content) {
    if (!editor.currentSlide) return editor;
    const updatedSlides = updateSlidesListContent(editor, content);
    return {
        ...editor,
        currentContent: content,
        currentSlide: updatedSlides[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            slides: updatedSlides
        }
    };
}