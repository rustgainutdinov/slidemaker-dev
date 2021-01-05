import Editor from "../../model/Editor";

function changeCurrentSlide(editor: Editor, slideId: number): Editor {
    let newCurrentSlide = editor.currentPresentation.sliderList[slideId];
    let newCurrentContent;
    for (let key in newCurrentSlide.contentList) {
        if (!newCurrentContent) {
            newCurrentContent = newCurrentSlide.contentList[key];
            continue;
        }
        if (newCurrentContent.layer < newCurrentSlide.contentList[key].layer) {
            newCurrentContent = newCurrentSlide.contentList[key]
        }
    }
    if (!newCurrentContent) {
        return editor;
    }
    return {
        ...editor,
        currentSlide: newCurrentSlide,
        currentContent: newCurrentContent
    }
}

export default changeCurrentSlide
