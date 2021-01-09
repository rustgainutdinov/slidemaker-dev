import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";
import { getDefaultRectangle } from "../../methods/addContent/getParamsOfContent/getDefaultRectangle";
import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";
import { isTextContainer } from "../../methods/typeGuardMethods/isTextContainer";

const TextContainer = getDefaultTextContainer();
const rectangle = getDefaultRectangle();

describe('isTextContainerTest', () => {
    test('checkTestContainerTest', () => {
        expect(isTextContainer(TextContainer)).toBe(true);
    });
    test('checkRectangleTest', () => {
        expect(isTextContainer(rectangle)).toBe(false);
    });
})