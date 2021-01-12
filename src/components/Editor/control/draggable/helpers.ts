import {ReactElement} from "react";

export type ElCoordinates = {
    x: number,
    y: number
}

export type GetHtmlElCoordinates = (el: HTMLElement) => ElCoordinates;

export type SetHtmlElCoordinates = (elCoordinates: ElCoordinates) => void;

export type DraggableProps = {
    children: ReactElement,
    getElCoordinates: GetHtmlElCoordinates,
    setFinalElCoordinates: SetHtmlElCoordinates
    setElCoordinates: SetHtmlElCoordinates,
    onDraggableStart: () => void
}

export const getActualElementCoordinates = (e: MouseEvent, initialElShift: ElCoordinates): ElCoordinates => {
    return {
        x: e.pageX - initialElShift.x,
        y: e.pageY - initialElShift.y
    }
};