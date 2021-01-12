import TextContainer from "../../../model/slide/content/TextContainer";
import {useDispatch} from "react-redux";
import {addState, updateContentPosition, updateTextContainerSize} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";
import {Draggable} from "../control/draggable/draggable";
import {SelectedOutline} from "../control/selectedOutline";
import {ElCoordinates, GetElCoordinates, SetElCoordinates} from "../control/draggable/helpers";
import {ChangeElSize} from "../control/selectedOutline/helpers";
import {useState} from "react";

type TextContainerProps = {
    textContainer: TextContainer,
    onCurrentElementChanged: () => void,
    isCurrent: boolean,
    editor: Editor
}

const getTextContainerCoordinates: GetElCoordinates = (el: HTMLElement): ElCoordinates => {
    let parent = el.parentElement;
    if (!parent) return {x: 0, y: 0};
    let x = parent.getAttribute('x');
    let y = parent.getAttribute('y');
    return {x: x ? +x : 0, y: y ? +y : 0}
};

export const TextContainerEl = ({textContainer, onCurrentElementChanged, editor, isCurrent}: TextContainerProps) => {
    const textStyle = {
        fontFamily: textContainer.richText.fontFamily,
        fontWeight: textContainer.richText.fontWeight,
        fontStyle: textContainer.richText.fontStyle,
        fontSize: textContainer.richText.fontSize,
        textDecoration: textContainer.richText.textDecoration,
        color: textContainer.richText.color
    };
    let dispatch = useDispatch();
    const changeTextValue = (e: any) => {
        const updatedTextContainer: TextContainer = {
            ...textContainer,
            richText: {...textContainer.richText, value: e.target.value}
        };
        dispatch(addState(updateTextContainer(editor, updatedTextContainer)));
    };
    const [x, setX] = useState(textContainer.position.x);
    const [y, setY] = useState(textContainer.position.y);
    const setTextContainerCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        setX(elCoordinates.x);
        setY(elCoordinates.y);
    };
    const setFinalTextContainerCoordinates: SetElCoordinates = (elCoordinates: ElCoordinates) => {
        dispatch(updateContentPosition({x: elCoordinates.x, y: elCoordinates.y}));
    };
    const changeTextContainerSize: ChangeElSize = (widthOffset: number, heightOffset: number) => {
        dispatch(updateTextContainerSize(widthOffset, heightOffset));
    };

    return (
        <SelectedOutline width={textContainer.width} height={textContainer.height}
                         position={textContainer.position}
                         changeSize={changeTextContainerSize} isCurrent={isCurrent}>
            <Draggable getElCoordinates={getTextContainerCoordinates} setElCoordinates={setTextContainerCoordinates}
                       setFinalElCoordinates={setFinalTextContainerCoordinates}
                       onDraggableStart={onCurrentElementChanged}>
                <foreignObject onClick={onCurrentElementChanged} width={textContainer.width}
                               height={textContainer.height} x={x}
                               y={y}>
                    <textarea placeholder='Введите текст' style={textStyle} id="input" onBlur={changeTextValue}
                              defaultValue={textContainer.richText.value}/>
                </foreignObject>
            </Draggable>
        </SelectedOutline>
    );
};