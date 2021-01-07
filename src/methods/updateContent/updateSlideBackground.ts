import Editor from "../../model/Editor";

function updateSlideBackground(editor: Editor, color: string): Editor {
    if(!editor.currentSlide) {
        return editor;
    }
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            background: color
        }
    };
}

export default updateSlideBackground
