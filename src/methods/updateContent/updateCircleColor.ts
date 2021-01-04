import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import Content from "../../model/slide/content/Content";

function isCircle(content: Content): content is Circle {
    return 'circle' in content;
}

function updateCircleColor(editor: Editor, color: string) {
    if (!isCircle(editor.currentContent)) {
        return
    }
    const circle: Circle = {
        ...editor.currentContent,
        background: color
    };
    return {
        ...editor,
        currentContent: {
            ...circle
        }
    };
}

export default updateCircleColor
