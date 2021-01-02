import ContentType from "../../const/ContentType";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import getDefaultPosition from "../../methods/addContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../methods/addContent/getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import updateRectangleBorder from "../../methods/updateContent/updateRectangleBorder";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import throwNewExeption from "../Exeption";

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}
const editor = getDefaultEditor();

describe('updateRectangleBorderTest', () => {
    const rectangle: Rectangle = {
        ...getDefaultShape(ContentType.Rectangle),
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize(),
        rectangle: undefined
    };
    editor.currentContent = rectangle;
    const newEditor = updateRectangleBorder(editor, 2, "red", 1)

    test('checkNewBorder', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        }
        if (!isRectangle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        expect(newEditor.currentContent.border.color).toBe("red");
        expect(newEditor.currentContent.border.width).toBe(2);
        expect(newEditor.currentContent.border.type).toBe(1);

        expect(checkInstance(newEditor.currentContent)).toBe(true)
    });

    function checkInstance(content: Content) {
        if (isRectangle(content)) {
            return true;
        } else {
            return false
        }
    }
})