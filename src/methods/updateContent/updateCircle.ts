import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import Content from "../../model/slide/content/Content";
import {Slide} from "../../model/slide/Slide"

function isCircle(content: Content): content is Circle {
    return 'circle' in content;
}

function updateCircle(editor: Editor, newCircle: Content): Editor {
    if (!isCircle(editor.currentContent)) {
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
                [newCircle.uuid]: newCircle
            }
        }
    });
    return {
        ...editor,
        currentContent: {
            ...newCircle
        },
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    };
}

export default updateCircle