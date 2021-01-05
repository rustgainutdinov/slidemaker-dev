import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import TextContainer from "../../model/slide/content/TextContainer";
import {Slide} from "../../model/slide/Slide"

function isTextContainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}

function updateTextContainer(editor: Editor, newTextContainer: Content): Editor {
    if (!isTextContainer(editor.currentContent)) {
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
                [newTextContainer.uuid]: newTextContainer
            }
        }
    });
    return {
        ...editor,
        currentContent: {
            ...newTextContainer
        },
        currentSlide: newSlidesList[editor.currentSlide.slideId],
        currentPresentation: {
            ...editor.currentPresentation,
            sliderList: newSlidesList
        }
    };
}

export default updateTextContainer