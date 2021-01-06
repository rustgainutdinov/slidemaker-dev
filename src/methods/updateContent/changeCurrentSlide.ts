import Editor from "../../model/Editor";

function changeCurrentSlide(editor: Editor, slideId: number): Editor {
    return {
        ...editor,
        currentSlide: editor.currentPresentation.slides[slideId],
        currentContent: null
    }
}

export default changeCurrentSlide
