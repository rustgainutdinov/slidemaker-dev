import { useState } from "react";
import { useDispatch } from "react-redux";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";
import Editor from "../../../model/Editor";
import TextContainer from "../../../model/slide/content/TextContainer";
import { addState } from "../../../store/Reducer/editor";

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const TextStyle = ({ presentEditor, currentTextContainer }: updateTextContainerProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (textContainer: TextContainer) => dispatch(addState(updateTextContainer(presentEditor, textContainer)));

    const [activeClasNameForBold, setClassNameForBold] = useState('')
    const [isBold, setBold] = useState(false);
    const [activeClasNameForItalic, setClassNameForItalic] = useState('')
    const [isItalic, setItalic] = useState(false);
    const [activeClasNameForTextDecoration, setClassNameForTextDecoration] = useState('')
    const [isUnderLine, setUnderLine] = useState(false);

    const handleBold = () => {
        if (isBold == true) {
            setBold(false);
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontWeight: 400
                }
            });
            setClassNameForBold("");
        } else {
            setBold(true);
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontWeight: 600
                }
            });
            setClassNameForBold("active_tools_button");
        }
    }

    const handleItalic = () => {
        if (isItalic == true) {
            setItalic(false);
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontStyle: 'normal'
                }
            });
            setClassNameForItalic("");
        } else {
            setItalic(true);
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontStyle: 'italic'
                }
            });
            setClassNameForItalic("active_tools_button");
        }
    }

    const handleTextDecorration = () => {
        if (isUnderLine == true) {
            setUnderLine(false);
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    textDecoration: 'none'
                }
            });
            setClassNameForTextDecoration("");
        } else {
            setUnderLine(true);
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    textDecoration: 'underline'
                }
            });
            setClassNameForTextDecoration("active_tools_button");
        }
    }

    return (
        <>
            <li><a href="#" className={"tools_button bold " + activeClasNameForBold} onClick={handleBold}>B</a></li>
            <li><a href="#" className={"tools_button italic " + activeClasNameForItalic} onClick={handleItalic}>I</a></li>
            <li><a href="#" className={"tools_button decoration " + activeClasNameForTextDecoration} onClick={handleTextDecorration}>U</a></li>
        </>
    )
}