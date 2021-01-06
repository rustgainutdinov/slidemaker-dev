import generateUuid from "../../core/generateUuid";
import BorderType from "../../../const/BorderType";
import Rectangle from "../../../model/slide/content/shape/Rectangle";

export function getDefaultRectangle(): Rectangle {
    return {
        position: {
            x: 100,
            y: 100
        },
        uuid: generateUuid(),
        border: {
            width: 10,
            color: '#00FF00',
            type: BorderType.SOLID,
        },
        rectangleSize: {
            width: 100,
            height: 50
        },
        background: '#000000',
        rectangle: undefined,
        layer: 0
    };
}