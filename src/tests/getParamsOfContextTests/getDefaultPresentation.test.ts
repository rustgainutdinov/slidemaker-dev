import getDefaultPresentation from "../../methods/addContent/getParamsOfContent/getDefaultPresentation";

describe('getDefaultPresentationTests', () => {
    test('getDefaultPresentationTest', () => {
        expect(getDefaultPresentation().author).toBe("newAuthor");
        expect(getDefaultPresentation().name).toBe("newPresentation");
    });
})