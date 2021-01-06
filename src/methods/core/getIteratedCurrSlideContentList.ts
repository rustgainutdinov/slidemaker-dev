import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";

export function getIteratedCurrSlideContentList(editor: Editor): Array<Content> {
    if (!editor.currentSlide) {
        return [];
    }
    let sortedContents = [];
    let layer = 0;
    for (const key in editor.currentSlide.contentList) {
        sortedContents[layer++] = editor.currentSlide.contentList[key];
    }
    return sortedContents;
}