import Editor from "../../model/Editor";

export function updateSlideBackgroundImage(editor: Editor, backgroundImage: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }

    const slides = editor.currentPresentation.slides;
    slides[editor.currentSlide.slideId] = {
        ...editor.currentSlide,
        backgroundImage: backgroundImage
    }

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            backgroundImage: backgroundImage
        },
        currentPresentation: {
            ...editor.currentPresentation,
            slides: slides
        }
    };
}
