import generateUuid from "../../core/generateUuid";
import BorderType from "../../../const/BorderType";
import Rectangle from "../../../model/slide/content/shape/Rectangle";

export function getDefaultRectangle(): Rectangle {
    return {
        position: {
            x: 150,
            y: 150
        },
        uuid: generateUuid(),
        border: {
            width: 2,
            color: '#000000',
            type: BorderType.SOLID,
        },
        rectangleSize: {
            width: 100,
            height: 50
        },
        background: '#cecece',
        rectangle: undefined,
        layer: 0
    };
}