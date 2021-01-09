import {cloneElement, ReactElement} from "react";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "./helpers";

type DraggableProps = {
    children: ReactElement,
    getElCoordinates: GetElCoordinates,
    setFinalElCoordinates: SetElCoordinates
    setElCoordinates: SetElCoordinates
}

const getActualElementCoordinates = (e: MouseEvent, initialElShift: ElCoordinates): ElCoordinates => {
    return {
        x: e.pageX - initialElShift.x,
        y: e.pageY - initialElShift.y
    }
};

export const Draggable = ({children, getElCoordinates, setFinalElCoordinates, setElCoordinates}: DraggableProps) => {
    const onMouseDownHandler = (e: MouseEvent) => {
        let dragEl = e.target as HTMLElement;
        const initialElementCoordinates = getElCoordinates(dragEl);
        let initialElShift: ElCoordinates = {
            x: e.pageX - initialElementCoordinates.x,
            y: e.pageY - initialElementCoordinates.y
        };

        document.onmousemove = (mouseEvent: MouseEvent) => setElCoordinates(getActualElementCoordinates(mouseEvent, initialElShift));
        dragEl.onmouseup = (mouseEvent: MouseEvent) => {
            document.onmousemove = null;
            dragEl.onmouseup = null;
            setFinalElCoordinates(getActualElementCoordinates(mouseEvent, initialElShift));
        };
    };

    children = cloneElement(children, {onDragStart: () => false, onMouseDown: onMouseDownHandler});
    return <>
        {children}
    </>
};