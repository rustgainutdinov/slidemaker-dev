import {Draggable} from "../control/draggable/draggable";
import {ElCoordinates, SetHtmlElCoordinates} from "../control/draggable/helpers";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {SelectedOutline} from "../control/selectedOutline";
import {CircleProps, getCircleCoordinates} from "./helpers/circle";
import {updateCircleSize, updateContentPosition} from "../../../store/Reducer/editor";
import {ChangeElSize} from "../control/selectedOutline/helpers";

export const CircleEl = ({circle, onCurrentElementChanged, isCurrent}: CircleProps) => {
    let dispatch = useDispatch();
    const [position, setPosition] = useState(circle.position);
    const setCircleCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        setPosition({x: elCoordinates.x, y: elCoordinates.y});
    const setFinalCircleCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    const changeCircleSize: ChangeElSize = (widthOffset: number, heightOffset: number) =>
        dispatch(updateCircleSize(Math.min(widthOffset, heightOffset)));

    return (
        <SelectedOutline width={circle.radius * 2} height={circle.radius * 2}
                         position={{x: circle.position.x - circle.radius, y: circle.position.y - circle.radius}}
                         changeSize={changeCircleSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getCircleCoordinates} setElCoordinates={setCircleCoordinates}
                       setFinalElCoordinates={setFinalCircleCoordinates} onDraggableStart={onCurrentElementChanged}>
                <circle cx={position.x} cy={position.y} r={circle.radius}
                        strokeWidth={circle.border.width}
                        onClick={onCurrentElementChanged}
                        stroke={circle.border.color} fill={circle.background}/>
            </Draggable>
        </SelectedOutline>
    );
};
