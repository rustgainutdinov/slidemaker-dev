import Circle from "../../../model/slide/content/shape/Circle";
import {Draggable} from "../control/draggable/draggable";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "../control/draggable/helpers";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateCircleSize, updateContentPosition} from "../../../store/Reducer/editor";
import {SelectedOutline} from "../control/selectedOutline";
import {ChangeElSize} from "../control/selectedOutline/helpers";

type CircleProps = {
    circle: Circle,
    onCurrentElementChanged: () => void,
    isCurrent: boolean,
}

const getCircleCoordinates: GetElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('cx');
    let y = el.getAttribute('cy');
    return {x: x ? +x : 0, y: y ? +y : 0}
};

export const CircleEl = ({circle, onCurrentElementChanged, isCurrent}: CircleProps) => {
    let dispatch = useDispatch();
    const [x, setX] = useState(circle.position.x);
    const [y, setY] = useState(circle.position.y);
    const setCircleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        setX(elCoordinates.x);
        setY(elCoordinates.y);
    };
    const setFinalCircleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    };
    const changeCircleSize: ChangeElSize = (widthOffset: number, heightOffset: number) => {
        dispatch(updateCircleSize(Math.min(widthOffset, heightOffset)));
    };

    return (
        <SelectedOutline width={circle.radius * 2} height={circle.radius * 2}
                         position={{x: circle.position.x - circle.radius, y: circle.position.y - circle.radius}}
                         changeSize={changeCircleSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getCircleCoordinates} setElCoordinates={setCircleCoordinates}
                       setFinalElCoordinates={setFinalCircleCoordinates} onDraggableStart={onCurrentElementChanged}>
                <circle cx={x} cy={y} r={circle.radius}
                        strokeWidth={circle.border.width}
                        stroke={circle.border.color} fill={circle.background}/>
            </Draggable>
        </SelectedOutline>
    );
};
