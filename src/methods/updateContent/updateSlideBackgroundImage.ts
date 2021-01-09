import Editor from "../../model/Editor";

export function updateSlideBackgroundImage(editor: Editor, background: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            background: '',
            backgroundImage: background
        }
    };
}