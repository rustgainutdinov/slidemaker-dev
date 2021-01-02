import ContentType from "../../const/ContentType";
import createRectangle from "../../Methods/AddContent/createRectangle"
import getDefaultPosition from "../../Methods/AddContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../Methods/AddContent/getParamsOfContent/getDefaultRectangleSize";
import getDefaultEditor from "../../Methods/AddContent/getDefaultEditor";
import Content from "../../Model/Slide/Content/Content";
import Rectangle from "../../Model/Slide/Content/shape/Rectangle";
import throwNewExeption from "../Exeption";

function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}
const editor = getDefaultEditor()

describe('createRectangleTest', () => {
    const newEditor = createRectangle(editor);

    test('addContentToEditor', () => {
        expect(newEditor.currentContent.type).toBe(ContentType.Rectangle);

        expect(checkInstance()).toBe(true)

        if (!isRectangle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }
        expect(newEditor.currentContent.bottomRightCoordinate).toStrictEqual(getDefaultPosition());
        expect(newEditor.currentContent.rectangleSize).toStrictEqual(getDefaultRectangleSize());
    });

    function checkInstance() {
        if (isRectangle(newEditor.currentContent)) {
            return true;
        } else {
            return false
        }
    }
})