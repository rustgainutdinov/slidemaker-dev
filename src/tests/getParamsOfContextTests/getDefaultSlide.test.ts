import getDefaultSlide from "../../methods/addContent/getParamsOfContent/getDefaultSlide";

describe('getDefaultSlideTests', () => {
    test('getDefaultSlideTest', () => {
        expect(getDefaultSlide()).toStrictEqual({
            slideId: 0,
            background: '#FFFFFF',
            contentList: {},
            svgDemo: "",
            backgroundImage: '',
            animation: 1
        });
    });
})