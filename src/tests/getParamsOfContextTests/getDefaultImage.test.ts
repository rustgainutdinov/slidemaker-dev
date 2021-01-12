import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";

describe('getDefaultImageTests', () => {
    test('getDefaultImagePositionTests', () => {
        expect(getDefaultImage().position).toStrictEqual({
            x: 50,
            y: 50
        });
    });

    test('getDefaultImageUrlTests', () => {
        expect(getDefaultImage().url).toBe('https://www.imgonline.com.ua/examples/bee-on-daisy.jpg')
    });

    test('getDefaultImageSizeTests', () => {
        expect(getDefaultImage().size).toStrictEqual({
            width: 300,
            height: 380
        })
    });
})