import { useDispatch } from "react-redux";
import updateTextContainer from "../../../../methods/updateContent/updateTextContainer";
import Editor from "../../../../model/Editor";
import TextContainer from "../../../../model/slide/content/TextContainer";
import { addState } from "../../../../store/Reducer/editor";
import './text.css';

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const TextStyle = ({ presentEditor, currentTextContainer }: updateTextContainerProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (textContainer: TextContainer) => dispatch(addState(updateTextContainer(presentEditor, textContainer)));

    let activeClasNameForBold = '';
    let isBold = false;

    let activeClasNameForItalic = '';
    let isItalic = false;

    let activeClasNameForTextDecoration = '';
    let isUnderLine = false;

    if (currentTextContainer.richText.fontWeight == 600) {
        isBold = true;
        activeClasNameForBold = 'active_tools_button'
    } else {
        isBold = false
        activeClasNameForBold = ''
    }

    if (currentTextContainer.richText.textDecoration == 'underline') {
        isUnderLine = true
        activeClasNameForTextDecoration = 'active_tools_button'
    } else {
        isUnderLine = false
        activeClasNameForTextDecoration = ''
    }

    if (currentTextContainer.richText.fontStyle == 'italic') {
        isItalic = true    
        activeClasNameForItalic = 'active_tools_button'
    } else {
        isItalic = false
        activeClasNameForItalic = ''
    }

    const handleBold = () => {
        if (isBold == true) {
            isBold = false;
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontWeight: 400
                }
            });
            activeClasNameForBold = '';
        } else {
            isBold = true;
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontWeight: 600
                }
            });
            activeClasNameForBold = "active_tools_button";
        }
    }

    const handleItalic = () => {
        if (isItalic == true) {
            isItalic = false;
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontStyle: 'normal'
                }
            });
            activeClasNameForItalic = ''
        } else {
            isItalic = true;
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    fontStyle: 'italic'
                }
            });
            activeClasNameForItalic = 'active_tools_button'
        }
    }

    const handleTextDecorration = () => {
        if (isUnderLine == true) {
            isUnderLine = false;
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    textDecoration: 'none'
                }
            });
            activeClasNameForTextDecoration = '';
        } else {
            isUnderLine = true;
            updateStateUpdatingTextContainer({
                ...currentTextContainer,
                richText: {
                    ...currentTextContainer.richText,
                    textDecoration: 'underline'
                }
            });  
            activeClasNameForTextDecoration = 'active_tools_button'
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