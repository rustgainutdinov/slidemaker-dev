import BorderType from "../../const/BorderType";
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";

describe('getDefaultRectangleTests', () => {
    test('getDefaultRectangleBorderTests', () => {
        expect(getDefaultRectangle().border).toStrictEqual({
            width: 2,
            color: '#000000',
            type: BorderType.SOLID,
        });
    });

    test('getDefaultRectanglePositionTests', () => {
        expect(getDefaultRectangle().position).toStrictEqual({
            x: 150,
            y: 150
        });
    });

    test('getDefaultRectangleBackgroundTests', () => {
        expect(getDefaultRectangle().background).toBe('#cecece')
    });

    test('getDefaultRectangleSizeTests', () => {
        expect(getDefaultRectangle().rectangleSize).toStrictEqual({
            width: 100,
            height: 50
        })
    });
})