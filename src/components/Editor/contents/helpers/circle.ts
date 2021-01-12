import {ElCoordinates, GetHtmlElCoordinates} from "../../control/draggable/helpers";
import Circle from "../../../../model/slide/content/shape/Circle";

export const getCircleCoordinates: GetHtmlElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('cx');
    let y = el.getAttribute('cy');
    return {x: x ? +x : 0, y: y ? +y : 0}
};

export type CircleProps = {
    circle: Circle,
    onCurrentElementChanged: () => void,
    isCurrent: boolean,
}