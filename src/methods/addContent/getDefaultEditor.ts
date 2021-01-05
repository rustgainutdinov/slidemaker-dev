import Editor from "../../model/Editor";
import TextContainer from "../../model/slide/content/TextContainer";
import {Slide} from "../../model/slide/Slide";
import {getDefaultRichText, getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";

export default function getDefaultEditor(): Editor {
    const content: TextContainer = {
        ...getDefaultTextContainer(),
        richText: {
            ...getDefaultRichText(),
            value: "NEW Presentation"
        }
    };
    const slide: Slide = {
        slideId: 0,
        background: "#fff",
        animation: 1,
        svgDemo: "",
        contentList: {
            [content.uuid]: content,
        }
    };
    return {
        currentPresentation: {
            name: "newPresentation",
            date: new Date(),
            author: "newAuthor",
            sliderList: [slide]
        },
        currentContent: content,
        currentSlide: slide
    }
}