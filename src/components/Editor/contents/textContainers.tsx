import TextContainer from "../../../model/slide/content/TextContainer";
import {useDispatch} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";

type TextContainerProps = {
    textContainer: TextContainer,
    onClick: () => void,
    isCurrent: boolean,
    editor: Editor
}

export const TextContainerEl = ({textContainer, onClick, editor}: TextContainerProps) => {
    const textStyle = {
        fontFamily: textContainer.richText.fontFamily,
        fontWeight: textContainer.richText.fontWeight,
        fontStyle: textContainer.richText.fontStyle,
        fontSize: textContainer.richText.fontSize,
        textDecoration: textContainer.richText.textDecoration
    };
    let dispatch = useDispatch();
    const changeTextValue = (e: any) => {
        const updatedTextContainer: TextContainer = {
            ...textContainer,
            richText: {...textContainer.richText, value: e.target.value}
        };
        dispatch(addState(updateTextContainer(editor, updatedTextContainer)));
    };

    return (
        <>
            <foreignObject onClick={onClick} width="500" height="300" x={textContainer.position.x}
                           y={textContainer.position.y} fill={textContainer.richText.color}>
                <textarea placeholder='Введите текст' style={textStyle}
                          id="input" onBlur={changeTextValue} defaultValue={textContainer.richText.value}/>
            </foreignObject>
        </>
    );
};