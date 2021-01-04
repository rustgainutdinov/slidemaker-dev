import Editor from "../../model/Editor";
import {ContentList} from "../../model/slide/Slide";

function changeCurrentContent(editor: Editor, newContentUuid: string): Editor {
    let newContent = editor.currentSlide.contentList[newContentUuid];
    let newContentList: ContentList = {};
    let currContentList = editor.currentSlide.contentList;
    for (let key in currContentList) {
        newContentList[key] = {
            ...currContentList[key],
            layer: currContentList[key].layer - (currContentList[key].layer > newContent.layer ? 1 : 0)
        }
    }

    newContent.layer = editor.currentContent.layer + 1;

    return {
        ...editor,
        currentSlide: {
            ...editor.currentSlide,
            contentList: currContentList
        },
        currentContent: newContent
    }
}

export default changeCurrentContent
