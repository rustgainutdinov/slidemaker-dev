import ContentType from "../../const/ContentType";
import getDefaultEditor from "../../Methods/AddContent/getDefaultEditor";
import getDefaultPosition from "../../Methods/AddContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../Methods/AddContent/getParamsOfContent/getDefaultRectangleSize";
import getDefaultShape from "../../Methods/AddContent/getParamsOfContent/getDefaultShape";
import updateRectangleSize from "../../Methods/updateContent/updateRectangleSize";
import Content from "../../Model/Slide/Content/Content";
import Rectangle from "../../Model/Slide/Content/shape/Rectangle";
import throwNewExeption from "../Exeption";

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}
const editor = getDefaultEditor();

describe('updateRectangleSizeTest', () => {

    const rectangle: Rectangle = {
        ...getDefaultShape(ContentType.Rectangle),
        bottomRightCoordinate: getDefaultPosition(),
        rectangleSize: getDefaultRectangleSize(),
        rectangle: undefined
    };

    editor.currentContent = rectangle;
    const newEditor = updateRectangleSize(editor, 200, 200)

    test('checkNewSize', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        }
        if (!isRectangle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        expect(newEditor.currentContent.rectangleSize).toStrictEqual({
            width: 200,
            height: 200
        });

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