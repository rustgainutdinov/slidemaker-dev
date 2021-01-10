import Circle from "../../../model/slide/content/shape/Circle";
import {Draggable} from "../control/draggable/draggable";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "../control/draggable/helpers";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import updateCircle from "../../../methods/updateContent/updateCircle";

type CircleProps = {
    circle: Circle,
    onCurrentElementChanged: () => void,
    isCurrent: boolean,
    editor: Editor
}

const getCircleCoordinates: GetElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('cx');
    let y = el.getAttribute('cy');
    return {x: x ? +x : 0, y: y ? +y : 0}
};

export const CircleEl = ({circle, onCurrentElementChanged, editor}: CircleProps) => {
    let dispatch = useDispatch();
    const [x, setX] = useState(circle.position.x);
    const [y, setY] = useState(circle.position.y);
    const setCircleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        setX(elCoordinates.x);
        setY(elCoordinates.y);
    };
    const setFinalCircleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        dispatch(addState(updateCircle(editor, {...circle, position: {x: elCoordinates.x, y: elCoordinates.y}})));
    };

    return (
        <Draggable getElCoordinates={getCircleCoordinates} setElCoordinates={setCircleCoordinates}
                   setFinalElCoordinates={setFinalCircleCoordinates} onDraggableStart={onCurrentElementChanged}>
            <circle cx={x} cy={y} r={circle.radius}
                    strokeWidth={circle.border.width}
                    stroke={circle.border.color} fill={circle.background} onClick={onCurrentElementChanged}/>
        </Draggable>
    );
};
