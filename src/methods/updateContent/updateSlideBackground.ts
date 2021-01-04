import Editor from "../../model/Editor";

function updateSlideBackground(editor: Editor, color: string) {

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            background: color
        }
    };
}

export default updateSlideBackground
