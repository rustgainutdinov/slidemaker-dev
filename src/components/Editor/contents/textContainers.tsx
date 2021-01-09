import TextContainer from "../../../model/slide/content/TextContainer";
import {useDispatch} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import changeCurrentContent from "../../../methods/updateContent/changeCurrentContent";
import Editor from "../../../model/Editor";

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
    };

    let dispatch = useDispatch();
    const changeTextValue = () => {
        dispatch(addState(changeCurrentContent(editor, textContainer.uuid)));
    };

    return (
        <>
            <foreignObject onClick={onClick} width="500" height="300" x={textContainer.position.x}
                           y={textContainer.position.y} fill={textContainer.richText.color}>
                <textarea placeholder='Input text' style={textStyle}
                          id="input" onBlur={changeTextValue}>{textContainer.richText.value}</textarea>
            </foreignObject>
        </>
    );
};