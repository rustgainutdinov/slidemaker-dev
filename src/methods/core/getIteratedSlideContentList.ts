import Content from "../../model/slide/content/Content";
import {Slide} from "../../model/slide/Slide";

export function getIteratedSlideContentList(slide: Slide): Array<Content> {
    let sortedContents = [];
    for (const key in slide.contentList) {
        const content = slide.contentList[key];
        sortedContents[content.layer] = content;
    }
    return sortedContents;
}