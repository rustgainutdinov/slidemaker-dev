import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";
import { isImage } from "../../methods/typeGuardMethods/isImage";

const image = getDefaultImage();
const rectangle = getDefaultRectangle();

describe('isImageTest', () => {
    test('checkImageTest', () => {
        expect(isImage(image)).toBe(true);
    });
    test('checkRectangleTest', () => {
        expect(isImage(rectangle)).toBe(false);
    });
})