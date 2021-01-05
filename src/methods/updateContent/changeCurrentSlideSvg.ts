import Editor from "../../model/Editor";

function changeCurrentSlideSvg(editor: Editor, svg: string): Editor {
    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            svgDemo: svg
        },
    }
}

export default changeCurrentSlideSvg
