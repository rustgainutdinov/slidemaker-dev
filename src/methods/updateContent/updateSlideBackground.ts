import Editor from "../../model/Editor";

export function updateSlideBackground(editor: Editor, background: string, backgroundImage: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            background: background,
            backgroundImage: backgroundImage
        }
    };
}
