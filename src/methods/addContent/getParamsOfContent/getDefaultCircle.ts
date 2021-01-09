import generateUuid from "../../core/generateUuid";
import BorderType from "../../../const/BorderType";
import Circle from "../../../model/slide/content/shape/Circle";

export function getDefaultCircle(): Circle {
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
        background: '#cecece',
        radius: 100,
        circle: undefined,
        layer: 0
    };
}