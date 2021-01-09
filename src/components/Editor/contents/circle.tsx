import Circle from "../../../model/slide/content/shape/Circle";
import {Draggable} from "../control/draggable/draggable";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "../control/draggable/helpers";
import {useState} from "react";

type CircleProps = {
    circle: Circle,
    onClick: () => void,
    isCurrent: boolean
}

const getCircleCoordinates: GetElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('cx');
    let y = el.getAttribute('cy');
    return {x: x ? +x : 0, y: y ? +y : 0}
};

export const CircleEl = ({circle, onClick}: CircleProps) => {
    const [x, setX] = useState(circle.position.x);
    const [y, setY] = useState(circle.position.y);
    const setCircleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        setX(elCoordinates.x);
        setY(elCoordinates.y);
    };

    return (
        <Draggable getElCoordinates={getCircleCoordinates} setElCoordinates={setCircleCoordinates}
                   setFinalElCoordinates={setCircleCoordinates}>
            <circle cx={x} cy={y} r={circle.radius}
                    strokeWidth={circle.border.width}
                    stroke={circle.border.color} fill={circle.background} onClick={onClick}/>
        </Draggable>
    );
};
