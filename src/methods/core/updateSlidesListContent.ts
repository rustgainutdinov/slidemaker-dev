import {Slide} from "../../model/slide/Slide";
import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";

export function updateSlidesListContent(editor: Editor, content: Content): Array<Slide> {
    return editor.currentPresentation.slides.map((slide: Slide): Slide => {
        if ((!editor.currentSlide) || (slide.slideId !== editor.currentSlide.slideId)) {
            return slide;
        }
        return {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [content.uuid]: content
            }
        }
    });
}