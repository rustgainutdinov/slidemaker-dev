import Editor from "../../model/Editor";

export function updateSlideBackground(editor: Editor, background: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }

    const slides = editor.currentPresentation.slides;
    slides[editor.currentSlide.slideId] = {
        ...editor.currentSlide,
        background: background,
    }

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            background: background,
        },
        currentPresentation: {
            ...editor.currentPresentation,
            slides: slides
        }
    };
}
