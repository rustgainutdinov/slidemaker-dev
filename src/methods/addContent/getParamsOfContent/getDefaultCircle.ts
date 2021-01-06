import generateUuid from "../../core/generateUuid";
import BorderType from "../../../const/BorderType";
import Circle from "../../../model/slide/content/shape/Circle";

export function getDefaultCircle(): Circle {
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
        background: '#000000',
        radius: 100,
        circle: undefined,
        layer: 0
    };
}