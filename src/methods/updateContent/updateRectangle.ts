import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}

function updateRectangle(editor: Editor, newRectangle: Content): Editor {
    if (!isRectangle(editor.currentContent)) {
        return editor
    }
    return {
        ...editor,
        currentContent: {
            ...newRectangle
        },
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [newRectangle.uuid]: newRectangle
            }
        }
    };
}

export default updateRectangle