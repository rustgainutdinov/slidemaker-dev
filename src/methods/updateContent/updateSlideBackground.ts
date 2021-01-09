import Editor from "../../model/Editor";

export function updateSlideBackground(editor: Editor, background: string): Editor {
    if (!editor.currentSlide) {
        return editor;
    }
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            backgroundImage: '',
            background: background
        }
    };
}
