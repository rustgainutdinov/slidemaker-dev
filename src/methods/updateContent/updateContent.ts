import {Slide} from "../../model/slide/Slide";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";

export function updateContent(editor: Editor, newContent: Content) {
    const newSlidesList: Array<Slide> = editor.currentPresentation.sliderList.map((slide: Slide): Slide => {
        if (slide.slideId !== editor.currentSlide.slideId) {
            return slide;
        }
        return {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [newContent.uuid]: newContent
            }
        }
    });
    return {
        ...editor,
        currentContent: {
            ...newContent
        },
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    };
}