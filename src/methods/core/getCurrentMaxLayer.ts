import Editor from "../../model/Editor";

export function getCurrentMaxLayer(editor: Editor): number {
    if (!editor.currentSlide) {
        return 0;
    }
    if (editor.currentContent) {
        return editor.currentContent.layer;
    }
    let layer = 0;
    for (let key  in editor.currentSlide.contentList) {
        if (editor.currentSlide.contentList[key].layer > layer) {
            layer = editor.currentSlide.contentList[key].layer;
        }
    }
    return layer;
}