import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import { ContentList } from "../../model/slide/Slide";

export function deleteSlidesListContent(editor: Editor, content: Content | null): ContentList {
    const newContentList = {
        ...editor.currentSlide?.contentList
    }
    if (content == null) return {}
    delete newContentList[content.uuid];

    return {
        ...newContentList
    }
}