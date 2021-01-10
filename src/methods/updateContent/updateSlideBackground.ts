import Editor from "../../model/Editor";

export function updateSlideBackground(editor: Editor, background: string, backgroundImage: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }
    if (background == '') {
        return {
            ...editor,
            currentSlide: {
                ...editor.currentSlide,
                backgroundImage: backgroundImage
            }
        };
    } else if (backgroundImage == '') {
        return {
            ...editor,
            currentSlide: {
                ...editor.currentSlide,
                background: background,
            }
        };
    } else {
        return {
            ...editor,
            currentSlide: {
                ...editor.currentSlide,
                background: background,
                backgroundImage: backgroundImage
            }
        };
    }
}
