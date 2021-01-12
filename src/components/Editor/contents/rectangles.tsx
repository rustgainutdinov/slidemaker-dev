import {ElCoordinates, SetHtmlElCoordinates} from "../control/draggable/helpers";
import {useState} from "react";
import {Draggable} from "../control/draggable/draggable";
import {updateContentPosition, updateRectangleSize} from "../../../store/Reducer/editor";
import {useDispatch} from "react-redux";
import {SelectedOutline} from "../control/selectedOutline";
import {ChangeElSize} from "../control/selectedOutline/helpers";
import {getRectangleCoordinates, RectangleProps} from "./helpers/rectangle";

export const RectangleEl = ({rectangle, onCurrentElementChanged, isCurrent}: RectangleProps) => {
    let dispatch = useDispatch();
    const [position, setPosition] = useState(rectangle.position);
    const setRectangleCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        setPosition({x: elCoordinates.x, y: elCoordinates.y});
    const setFinalRectangleCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    const changeRectangleSize: ChangeElSize = (widthOffset: number, heightOffset: number) =>
        dispatch(updateRectangleSize(widthOffset, heightOffset));

    return (
        <SelectedOutline width={rectangle.rectangleSize.width} height={rectangle.rectangleSize.height}
                         position={rectangle.position}
                         changeSize={changeRectangleSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getRectangleCoordinates} setElCoordinates={setRectangleCoordinates}
                       setFinalElCoordinates={setFinalRectangleCoordinates} onDraggableStart={onCurrentElementChanged}>
                <rect x={position.x} y={position.y} width={rectangle.rectangleSize.width}
                      height={rectangle.rectangleSize.height}
                      strokeWidth={rectangle.border.width}
                      onClick={onCurrentElementChanged}
                      stroke={rectangle.border.color} fill={rectangle.background}/>
            </Draggable>
        </SelectedOutline>
    );
};