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
        height: 400,
        richText: {
            color: '#000000', fontWeight: 600, fontFamily: 'Roboto',
            fontSize: 40, fontStyle: 'normal', value: 'Текст', textDecoration: 'none'
        },
        textContainer: undefined,
        layer: 0
    };
}