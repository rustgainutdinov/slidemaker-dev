import ContentType from "../../const/ContentType";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import getDefaultShape from "../../methods/addContent/getParamsOfContent/getDefaultShape";
import { updateCircleRadius } from "../../methods/updateContent/updateCircleRadius";
import Content from "../../model/slide/content/Content";
import Circle from "../../model/slide/content/shape/Circle";
import throwNewExeption from "../Exeption";

function isCircle(content: Content): content is Circle {
    return 'circle' in content;
}
const editor = getDefaultEditor();

describe('updateCircleRadiusTest', () => {
    const circle: Circle = {
        ...getDefaultShape(ContentType.Circle),
        radius: 100,
        circle: undefined
    };
    editor.currentContent = circle;
    const newEditor = updateCircleRadius(editor, 200);

    test('checkNewRadius', () => {
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        }
        if (!isCircle(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        expect(newEditor.currentContent.radius).toBe(200);
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