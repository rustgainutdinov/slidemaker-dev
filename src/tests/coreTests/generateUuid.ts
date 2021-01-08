import generateUuid from "../../methods/core/generateUuid";

const firstUuid = generateUuid();
const secondUuid = generateUuid();

describe('GenerateUuidTest', () => {
    test('firstUuidNotToBeSecondUuid', () => {
        expect(firstUuid).not.toBe(secondUuid);
    });
})