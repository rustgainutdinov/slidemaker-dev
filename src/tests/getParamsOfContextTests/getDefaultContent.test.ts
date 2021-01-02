import ContentType from "../../const/ContentType";
import getDefaultContent from "../../methods/addContent/getParamsOfContent/getDefaultContent";

describe('getDefaultContentTests', () => {
    const type = ContentType.Circle;
    test('getDefaultContentPositionTest', () => {
        //Однвременно тест на функцию GetDefaultPosition
        expect(getDefaultContent(type).position).toStrictEqual({
            x: 100,
            y: 100
        });
    });

    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultContent(type).layer).toBe(0);
    });

    test('getDefaultContentPositionlayer', () => {
        expect(getDefaultContent(type).type).toBe(1);
    });
})

