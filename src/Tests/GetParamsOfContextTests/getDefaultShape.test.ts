import BorderType from "../../const/BorderType";
import ContentType from "../../const/ContentType";
import getDefaultShape from "../../Methods/AddContent/getParamsOfContent/getDefaultShape";

describe('getDefaultShapeTests', () => {
    const type = ContentType.Circle;
    test('getDefaultBorderColor', () => {
        expect(getDefaultShape(type).border).toStrictEqual({
            width: 10,
            color: '#00FF00',
            type: BorderType.SOLID
        });
    });
    test('getDefaultShapeBackground', () => {
        expect(getDefaultShape(type).background).toBe('#0000FF');
    });
})
