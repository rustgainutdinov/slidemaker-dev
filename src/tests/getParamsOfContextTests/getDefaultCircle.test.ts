import BorderType from "../../const/BorderType";
import { getDefaultCircle } from "../../methods/addContent/getParamsOfContent/getDefaultCircle";

describe('getDefaultCircleTests', () => {
    test('getDefaultCircleBorderTests', () => {
        expect(getDefaultCircle().border).toStrictEqual({
            width: 2,
            color: '#000000',
            type: BorderType.SOLID,
        });
    });

    test('getDefaultCirclePositionTests', () => {
        expect(getDefaultCircle().position).toStrictEqual({
            x: 150,
            y: 150
        });
    });

    test('getDefaultCircleBackgroundTests', () => {
        expect(getDefaultCircle().background).toBe('#cecece')
    });

    test('getDefaultCircleRadiusTests', () => {
        expect(getDefaultCircle().radius).toBe(100)
    });
})