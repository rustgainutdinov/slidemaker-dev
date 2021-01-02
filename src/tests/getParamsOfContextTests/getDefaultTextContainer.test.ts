import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";

describe('getDefaultContentTests', () => {
    test('getDefaultContentPositionTest', () => {
        expect(getDefaultTextContainer().width).toBe(100);
    });

    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultTextContainer().richText).toStrictEqual({
            color: '#000000',
            font: 12,
            value: 'new Text'
        });
    });
})