import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";

export function getIteratedCurrSlideContentList(editor: Editor): Array<Content> {
    if (!editor.currentSlide) {
        return [];
    }
    let sortedContents = [];
    for (const key in editor.currentSlide.contentList) {
        const content = editor.currentSlide.contentList[key];
        sortedContents[content.layer] = content;
    }
    return sortedContents;
}