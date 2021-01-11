import { getDefaultTextContainer } from "../../methods/addContent/getParamsOfContent/getDefaultTextContainer";

describe('getDefaultContentTests', () => {
    test('getDefaultTextContainerWidthTest', () => {
        expect(getDefaultTextContainer().width).toBe(400);
    });

    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultTextContainer().richText).toStrictEqual({
            color: '#000000',
            fontWeight: 600,
            fontFamily: 'Roboto',
            fontSize: 40,
            fontStyle: 'normal',
            value: 'Текст',
            textDecoration: 'none'
        });
    });
})