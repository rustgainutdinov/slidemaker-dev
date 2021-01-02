import ContentType from "../../const/ContentType";
import createRectangle from "../../methods/addContent/createRectangle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import getDefaultPosition from "../../methods/addContent/getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "../../methods/addContent/getParamsOfContent/getDefaultRectangleSize";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";
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