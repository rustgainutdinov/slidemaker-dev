import BorderType from "../../const/BorderType";
import getDefaultBorder from "../../methods/addContent/getParamsOfContent/getDefaultBorder";

describe('getDefaultBorderTests', () => {

    test('getDefaultBorderColor', () => {
        expect(getDefaultBorder().color).toBe('#00FF00');
    });
    test('getDefaultBorderWidth', () => {
        expect(getDefaultBorder().width).toBe(10);
    });
    test('getDefaultBorderType', () => {
        expect(getDefaultBorder().type).toBe(BorderType.SOLID);
    })
})
