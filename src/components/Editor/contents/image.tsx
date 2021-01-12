import {Draggable} from "../control/draggable/draggable";
import {SelectedOutline} from "../control/selectedOutline";
import {ChangeElSize} from "../control/selectedOutline/helpers";
import {updateContentPosition, updateImageSize} from "../../../store/Reducer/editor";
import {useDispatch} from "react-redux";
import {getImageCoordinates, ImageProps} from "./helpers/image";
import {useState} from "react";
import {ElCoordinates, SetHtmlElCoordinates} from "../control/draggable/helpers";

export const ImageEl = ({image, onCurrentElementChanged, isCurrent}: ImageProps) => {
    let dispatch = useDispatch();
    const [position, setPosition] = useState(image.position);
    const setImageCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        setPosition({x: elCoordinates.x, y: elCoordinates.y});
    const setFinalImageCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    const changeCircleSize: ChangeElSize = (widthOffset: number, heightOffset: number) =>
        dispatch(updateImageSize(widthOffset, heightOffset));
    return (
        <SelectedOutline width={image.size.width} height={image.size.height}
                         position={image.position} changeSize={changeCircleSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getImageCoordinates} setElCoordinates={setImageCoordinates}
                       setFinalElCoordinates={setFinalImageCoordinates} onDraggableStart={onCurrentElementChanged}>
                <image x={position.x} y={position.y} width={image.size.width} height={image.size.height}
                       href={image.url} onClick={onCurrentElementChanged}/>
            </Draggable>
        </SelectedOutline>
    );
};