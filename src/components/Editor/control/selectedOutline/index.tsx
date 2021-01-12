import * as React from "react";
import {useEffect, useState} from "react";
import {Draggable} from "../draggable/draggable";
import {ElCoordinates, SetHtmlElCoordinates} from "../draggable/helpers";
import {getDotCoordinates, getOutlineStyles, getResizeDotStyle, SelectedOutlineProps} from "./helpers";

export const SelectedOutline = ({children, width, height, position, changeSize, isCurrent}: SelectedOutlineProps) => {
    let outlineStyle = getOutlineStyles(width, height, position);
    const [positionState, setPosition] = useState({
        x: outlineStyle.x + outlineStyle.width - 7,
        y: outlineStyle.y + outlineStyle.height - 7
    });
    useEffect(() => {
        setPosition({
            x: outlineStyle.x + outlineStyle.width - 7,
            y: outlineStyle.y + outlineStyle.height - 7
        })
    }, [position]);
    let initialDot = position;
    const setDotCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        setPosition({x: elCoordinates.x, y: elCoordinates.y});
    const setFinalDotCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        changeSize(elCoordinates.x - initialDot.x, elCoordinates.y - initialDot.y);
    let resizeDotStyle = getResizeDotStyle(positionState);

    return <>
        {isCurrent ? [
            <rect style={outlineStyle} key={0}/>,
            <Draggable getElCoordinates={getDotCoordinates} setFinalElCoordinates={setFinalDotCoordinates}
                       setElCoordinates={setDotCoordinates} key={1}
                       onDraggableStart={() => undefined}>
                <rect style={resizeDotStyle}/>
            </Draggable>
        ] : null}
        {children}
    </>
};