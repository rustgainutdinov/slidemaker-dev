import {useDispatch} from "react-redux";
import {addState, updateContentPosition, updateTextContainerSize} from "../../../store/Reducer/editor";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";
import {Draggable} from "../control/draggable/draggable";
import {SelectedOutline} from "../control/selectedOutline";
import {ElCoordinates, SetHtmlElCoordinates} from "../control/draggable/helpers";
import {ChangeElSize} from "../control/selectedOutline/helpers";
import {useState} from "react";
import {getTextContainerCoordinates, TextContainerProps} from "./helpers/textContainer";
import {getRichTextStyles} from "../svg/helpers/textContainer";

export const TextContainerEl = ({textContainer, onCurrentElementChanged, editor, isCurrent}: TextContainerProps) => {

    let dispatch = useDispatch();
    const [position, setPosition] = useState(textContainer.position);
    const setTextContainerCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        setPosition({x: elCoordinates.x, y: elCoordinates.y});
    const setFinalTextContainerCoordinates: SetHtmlElCoordinates = (elCoordinates: ElCoordinates) =>
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    const changeTextContainerSize: ChangeElSize = (widthOffset: number, heightOffset: number) =>
        dispatch(updateTextContainerSize(widthOffset, heightOffset));
    const changeTextValue = (e: any) =>
        dispatch(addState(updateTextContainer(editor, {
            ...textContainer,
            richText: {...textContainer.richText, value: e.target.value}
        })));

    return (
        <SelectedOutline width={textContainer.width} height={textContainer.height}
                         position={textContainer.position}
                         changeSize={changeTextContainerSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getTextContainerCoordinates} setElCoordinates={setTextContainerCoordinates}
                       setFinalElCoordinates={setFinalTextContainerCoordinates}
                       onDraggableStart={onCurrentElementChanged}>
                <foreignObject onClick={onCurrentElementChanged} width={textContainer.width}
                               height={textContainer.height} x={position.x} y={position.y}>
                    <textarea placeholder='Введите текст' style={getRichTextStyles(textContainer)} id="input"
                              onBlur={changeTextValue}
                              defaultValue={textContainer.richText.value}/>
                </foreignObject>
            </Draggable>
        </SelectedOutline>
    );
};