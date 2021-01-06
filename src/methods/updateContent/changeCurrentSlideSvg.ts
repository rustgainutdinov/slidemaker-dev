import Editor from "../../model/Editor";

function changeCurrentSlideSvg(editor: Editor, svg: string): Editor {
    if (!editor.currentSlide) return editor;
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            svgDemo: svg
        },
    }
}

export default changeCurrentSlideSvg
