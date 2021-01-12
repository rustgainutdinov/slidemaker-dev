import {ReactElement} from "react";
import Point from "../../../../model/slide/content/Point";
import {ElCoordinates, GetHtmlElCoordinates} from "../draggable/helpers";

export type ChangeElSize = (widthOffset: number, heightOffset: number) => void;

export type SelectedOutlineProps = {
    children: ReactElement,
    width: number,
    height: number,
    position: Point,
    changeSize: ChangeElSize,
    isCurrent: boolean
}

export const getDotCoordinates: GetHtmlElCoordinates = (el: HTMLElement): ElCoordinates => {
    let style = el.style;
    let x = style.getPropertyValue('x');
    let y = style.getPropertyValue('y');
    return {x: x ? +(x.substr(0, x.length - 2)) : 0, y: y ? +(y.substr(0, y.length - 2)) : 0}
};

export const getOutlineStyles = (width: number, height: number, position: Point) => {
    return {
        width: width + 20,
        height: height + 20,
        strokeWidth: 2,
        stroke: '#cecece',
        fill: 'rgba(0,0,0,0)',
        x: position.x - 10,
        y: position.y - 10,
        strokeDasharray: "5,5"
    }
};

export const getResizeDotStyle = (position: Point) => {
    return {
        fill: '#cecece',
        width: 14,
        height: 14,
        x: position.x, y: position.y,
    };
};