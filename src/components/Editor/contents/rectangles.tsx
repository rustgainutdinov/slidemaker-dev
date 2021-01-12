import Rectangle from "../../../model/slide/content/shape/Rectangle";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "../control/draggable/helpers";
import {useState} from "react";
import {Draggable} from "../control/draggable/draggable";
import {updateContentPosition, updateRectangleSize} from "../../../store/Reducer/editor";
import {useDispatch} from "react-redux";
import {SelectedOutline} from "../control/selectedOutline";
import {ChangeElSize} from "../control/selectedOutline/helpers";

type RectangleProps = {
    rectangle: Rectangle,
    onCurrentElementChanged: () => void,
    isCurrent: boolean
}

const getRectangleCoordinates: GetElCoordinates = (el: HTMLElement): ElCoordinates => {
    let x = el.getAttribute('x');
    let y = el.getAttribute('y');
    return {x: x ? +x : 0, y: y ? +y : 0}
};

export const RectangleEl = ({rectangle, onCurrentElementChanged, isCurrent}: RectangleProps) => {
    let dispatch = useDispatch();
    const [x, setX] = useState(rectangle.position.x);
    const [y, setY] = useState(rectangle.position.y);
    const setRectangleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        setX(elCoordinates.x);
        setY(elCoordinates.y);
    };
    const setFinalRectangleCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    };
    const changeRectangleSize: ChangeElSize = (widthOffset: number, heightOffset: number) => {
        dispatch(updateRectangleSize(widthOffset, heightOffset));
    };
    return (
        <SelectedOutline width={rectangle.rectangleSize.width} height={rectangle.rectangleSize.height}
                         position={rectangle.position}
                         changeSize={changeRectangleSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getRectangleCoordinates} setElCoordinates={setRectangleCoordinates}
                       setFinalElCoordinates={setFinalRectangleCoordinates} onDraggableStart={onCurrentElementChanged}>
                <rect x={x} y={y} width={rectangle.rectangleSize.width}
                      height={rectangle.rectangleSize.height}
                      strokeWidth={rectangle.border.width}
                      stroke={rectangle.border.color} fill={rectangle.background}/>
            </Draggable>
        </SelectedOutline>
    );
};