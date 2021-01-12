import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";

describe('getDefaultImageTests', () => {
    test('getDefaultImagePositionTests', () => {
        expect(getDefaultImage().position).toStrictEqual({
            x: 50,
            y: 50
        });
    });

    test('getDefaultImageUrlTests', () => {
        expect(getDefaultImage().url).toBe('https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg')
    });

    test('getDefaultImageSizeTests', () => {
        expect(getDefaultImage().size).toStrictEqual({
            width: 300,
            height: 380
        })
    });
})