import generateUuid from "../../core/generateUuid";
import TextContainer from "../../../model/slide/content/TextContainer";

export function getDefaultTextContainer(): TextContainer {
    return {
        position: {
            x: 100,
            y: 100
        },
        uuid: generateUuid(),
        width: 400,
        richText: {color: '#000000', font: 0, value: 'Text container'},
        textContainer: undefined,
        layer: 0
    };
}