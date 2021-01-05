import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import {Slide} from "../../model/slide/Slide"

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}

function updateRectangle(editor: Editor, newRectangle: Content): Editor {
    if (!isRectangle(editor.currentContent)) {
        return editor
    }
    const newSlidesList: Array<Slide> = editor.currentPresentation.sliderList.map((slide: Slide): Slide => {
        if (slide.slideId !== editor.currentSlide.slideId) {
            return slide;
        }
        return {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [newRectangle.uuid]: newRectangle
            }
        }
    });
    return {
        ...editor,
        currentContent: {
            ...newRectangle
        },
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    };
}

export default updateRectangle