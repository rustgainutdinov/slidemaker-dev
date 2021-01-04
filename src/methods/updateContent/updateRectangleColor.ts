import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}

function updateRectangleColor(editor: Editor, color: string) {
    if (!isRectangle(editor.currentContent)) {
        return
    }
    const rectangle: Rectangle = {
        ...editor.currentContent,
        background: color
    };
    return {
        ...editor,
        currentContent: {
            ...rectangle
        }
    };
}

export default updateRectangleColor
