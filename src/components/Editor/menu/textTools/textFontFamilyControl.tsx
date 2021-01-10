import { useDispatch } from "react-redux";
import updateTextContainer from "../../../../methods/updateContent/updateTextContainer";
import Editor from "../../../../model/Editor";
import TextContainer from "../../../../model/slide/content/TextContainer";
import { addState } from "../../../../store/Reducer/editor";
import './text.css';

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const TextFontFamily = ({ presentEditor, currentTextContainer }: updateTextContainerProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (textContainer: TextContainer) => dispatch(addState(updateTextContainer(presentEditor, textContainer)));

    const handleSelectFontFamily = (event: any) => {
        updateStateUpdatingTextContainer({
            ...currentTextContainer,
            richText: {
                ...currentTextContainer.richText,
                fontFamily: event.target.value
            }
        });
    }

    return (
        <li>
            <select className="select" onInput={handleSelectFontFamily} value={currentTextContainer.richText.fontFamily}>
                <option value='Arial'>Arial</option>
                <option value='Georgia'>Georgia</option>
                <option value='Roboto'>Roboto</option>
                <option value='Roboto Mono'>Roboto Mono</option>
                <option value='Verdana'>Verdana</option>
            </select>
        </li>
    )
}