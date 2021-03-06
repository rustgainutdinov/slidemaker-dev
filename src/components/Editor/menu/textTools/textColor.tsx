import { useDispatch } from "react-redux";
import updateTextContainer from "../../../../methods/updateContent/updateTextContainer";
import Editor from "../../../../model/Editor";
import TextContainer from "../../../../model/slide/content/TextContainer";
import { addState } from "../../../../store/Reducer/editor";
import { ColorPalette } from "../control/colorPalette";
import './text.css';

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const ColorEl = ({ presentEditor, currentTextContainer }: updateTextContainerProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (textContainer: TextContainer) => dispatch(addState(updateTextContainer(presentEditor, textContainer)));

    const handleSelectTextColor = (event: any) => {
        updateStateUpdatingTextContainer({
            ...currentTextContainer,
            richText: {
                ...currentTextContainer.richText,
                color: event.target.value
            }
        });
    }

    return (
        <li>
            <input className="colorPalette" type="color" list="colorList"
            value={currentTextContainer.richText.color} onInput={handleSelectTextColor} />
            <ColorPalette />
        </li >
    )
}
