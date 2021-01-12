import Rectangle from "../../../../model/slide/content/shape/Rectangle";
import {ElCoordinates, GetHtmlElCoordinates} from "../../control/draggable/helpers";

export type RectangleProps = {
    rectangle: Rectangle,
    onCurrentElementChanged: () => void,
    isCurrent: boolean
}

export const getRectangleCoordinates: GetHtmlElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('x');
    let y = el.getAttribute('y');
    return {x: x ? +x : 0, y: y ? +y : 0}
};