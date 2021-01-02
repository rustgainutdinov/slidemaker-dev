import ContentType from "../../const/ContentType";
import getDefaultShape from "../../Methods/AddContent/getParamsOfContent/getDefaultShape";
import getDefaultEditor from "../../Methods/AddContent/getDefaultEditor";
import Content from "../../Model/Slide/Content/Content"
import Circle from "../../Model/Slide/Content/shape/Circle";
import throwNewExeption from "../Exeption";
import { updateCircleRadius } from "../../Methods/updateContent/updateCircleRadius";

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