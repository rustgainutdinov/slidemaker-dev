import {cloneElement} from "react";
import {DraggableProps, ElCoordinates, getActualElementCoordinates} from "./helpers";

export const Draggable = ({children, getElCoordinates, setFinalElCoordinates, setElCoordinates, onDraggableStart}: DraggableProps) => {
    const onMouseDownHandler = (e: MouseEvent) => {
        let dragEl = e.target as HTMLElement;
        onDraggableStart();
        const initialElementCoordinates = getElCoordinates(dragEl);
        let initialElShift: ElCoordinates = {
            x: e.pageX - initialElementCoordinates.x,
            y: e.pageY - initialElementCoordinates.y
        };
        document.onmousemove = (mouseEvent: MouseEvent) =>
            setElCoordinates(getActualElementCoordinates(mouseEvent, initialElShift));
        document.onmouseup = (mouseEvent: MouseEvent) => {
            document.onmousemove = null;
            document.onmouseup = null;
            setFinalElCoordinates(getActualElementCoordinates(mouseEvent, initialElShift));
        };
    };
    return <>
        {cloneElement(children, {onDragStart: () => false, onMouseDown: onMouseDownHandler})}
    </>
};