import * as React from "react";
import {ReactElement, useEffect, useState} from "react";
import Point from "../../../../model/slide/content/Point";
import {Draggable} from "../draggable/draggable";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "../draggable/helpers";
import {ChangeElSize} from "./helpers";

type SelectedOutlineProps = {
    children: ReactElement,
    width: number,
    height: number,
    position: Point,
    changeSize: ChangeElSize,
    isCurrent: boolean
}

const getDotCoordinates: GetElCoordinates = (el: HTMLElement): ElCoordinates => {
    let style = el.style;
    let x = style.getPropertyValue('x');
    let y = style.getPropertyValue('y');
    return {x: x ? +(x.substr(0, x.length - 2)) : 0, y: y ? +(y.substr(0, y.length - 2)) : 0}
};

export const SelectedOutline = ({children, width, height, position, changeSize, isCurrent}: SelectedOutlineProps) => {
    let outlineStyle = {
        width: width + 20,
        height: height + 20,
        strokeWidth: 2,
        stroke: '#cecece',
        fill: 'rgba(0,0,0,0)',
        x: position.x - 10,
        y: position.y - 10,
        strokeDasharray: "5,5"
    };
    const [x, setX] = useState(outlineStyle.x + outlineStyle.width - 7);
    const [y, setY] = useState(outlineStyle.y + outlineStyle.height - 7);

    useEffect(() => {
        setX(outlineStyle.x + outlineStyle.width - 7);
        setY(outlineStyle.y + outlineStyle.height - 7);
    }, [position]);

    let initialDotX = x;
    let initialDotY = y;
    const setDotCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        setX(elCoordinates.x);
        setY(elCoordinates.y);
    };
    const setFinalDotCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        changeSize(elCoordinates.x - initialDotX, elCoordinates.y - initialDotY)
    };
    let resizeDotStyle = {
        fill: '#cecece',
        width: 14,
        height: 14,
        x, y,
    };

    return <>
        {isCurrent ? <rect style={outlineStyle}/> : null}
        <Draggable getElCoordinates={getDotCoordinates} setFinalElCoordinates={setFinalDotCoordinates}
                   setElCoordinates={setDotCoordinates}
                   onDraggableStart={() => undefined}>
            <rect style={resizeDotStyle}/>
        </Draggable>
        {children}
    </>
};