import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import Content from "../../model/slide/content/Content";

function isCircle(content: Content): content is Circle {
    return 'circle' in content;
}

function updateCircle(editor: Editor, newCircle: Content): Editor {
    if (!isCircle(editor.currentContent)) {
        return editor
    }
    return {
        ...editor,
        currentContent: {
            ...newCircle
        }
    };
}

export default updateCircle