import Editor from "../../model/Editor";

export function updateSlideBackground(editor: Editor, background: string, backgroundImage: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }

    const slides = editor.currentPresentation.slides;
    slides[editor.currentSlide.slideId] = {
        ...editor.currentSlide,
        background: background,
        backgroundImage: backgroundImage
    }

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            background: background,
            backgroundImage: backgroundImage
        },
        currentPresentation: {
            ...editor.currentPresentation,
            slides: slides
        }
    };
}
