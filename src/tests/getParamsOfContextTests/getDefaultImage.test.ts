import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";

describe('getDefaultImageTests', () => {
    test('getDefaultImagePositionTests', () => {
        expect(getDefaultImage().position).toStrictEqual({
            x: 50,
            y: 50
        });
    });

    test('getDefaultImageUrlTests', () => {
        expect(getDefaultImage().url).toBe('https://i.imgur.com/J6EWl6g.png')
    });

    test('getDefaultImageSizeTests', () => {
        expect(getDefaultImage().size).toStrictEqual({
            width: 300,
            height: 380
        })
    });
})