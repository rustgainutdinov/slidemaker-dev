import { getDefaultCircle } from "../../methods/addContent/getParamsOfContent/getDefaultCircle";
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";
import { isCircle } from "../../methods/typeGuardMethods/isCircle";

const circle = getDefaultCircle();
const rectangle = getDefaultRectangle();

describe('isCircleTest', () => {
    test('checkCircleTest', () => {
        expect(isCircle(circle)).toBe(true);
    });
    test('checkRectangleTest', () => {
        expect(isCircle(rectangle)).toBe(false);
    });
})