import ContentType from "../../const/ContentType";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import updateCircleBorder from "../../methods/updateContent/updateCircleBorder";
import Content from "../../model/slide/content/Content";
import Circle from "../../model/slide/content/shape/Circle";
import throwNewExeption from "../Exeption";

function isCircle(content: Content): content is Circle {
    return 'circle' in content;
}
const editor = getDefaultEditor();

describe('updateCircleBorderTest', () => {
    const circle: Circle = {
        ...getDefaultShape(ContentType.Circle),
        radius: 100,
        circle: undefined
    };
    editor.currentContent = circle;
    const newEditor = updateCircleBorder(editor, 2, "red", 1);
    test('checkNewBorder', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        }
        if (!isCircle(newEditor.currentContent)) {
            throwNewExeption;
            return
        }

        expect(newEditor.currentContent.border.color).toBe("red");
        expect(newEditor.currentContent.border.width).toBe(2);
        expect(newEditor.currentContent.border.type).toBe(1);

        expect(checkInstance(newEditor.currentContent)).toBe(true)
    });

    function checkInstance(content: Content) {
        if (isCircle(content)) {
            return true;
        } else {
            return false
        }
    }
})