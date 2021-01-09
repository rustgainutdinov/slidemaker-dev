import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";
import { isRectangle } from "../../methods/typeGuardMethods/isRectangle";

const image = getDefaultImage();
const rectangle = getDefaultRectangle();

describe('isRectangleTest', () => {
    test('checkRectangleTest', () => {
        expect(isRectangle(rectangle)).toBe(true);
    });
    test('checkImageTest', () => {
        expect(isRectangle(image)).toBe(false);
    });
})