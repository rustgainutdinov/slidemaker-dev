import {ElCoordinates, GetHtmlElCoordinates} from "../../control/draggable/helpers";
import Image from "../../../../model/slide/content/Image";

export type ImageProps = {
    image: Image,
    onCurrentElementChanged: () => void,
    isCurrent: boolean
}
export const getImageCoordinates: GetHtmlElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('x');
    let y = el.getAttribute('y');
    return {x: x ? +x : 0, y: y ? +y : 0}
};