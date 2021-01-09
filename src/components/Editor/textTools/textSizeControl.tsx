import { useState } from "react";
import { useDispatch } from "react-redux";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";
import Editor from "../../../model/Editor";
import TextContainer from "../../../model/slide/content/TextContainer";
import { addState } from "../../../store/Reducer/editor";

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const TextSize = ({ presentEditor, currentTextContainer }: updateTextContainerProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (textContainer: TextContainer) => dispatch(addState(updateTextContainer(presentEditor, textContainer)));

    const [fontSize, setFontSize] = useState(16);

    const handleRichTextFontSizeChange = (event: any) => {
        updateStateUpdatingTextContainer({
            ...currentTextContainer,
            richText: {
                ...currentTextContainer.richText,
                fontSize: +event.target.value
            }
        });
        setFontSize(+event.target.value);
    }

    const handleFontSizeInc = () => {
        setFontSize(fontSize + 1);
        updateStateUpdatingTextContainer({
            ...currentTextContainer,
            richText: {
                ...currentTextContainer.richText,
                fontSize: fontSize
            }
        });
    }

    const handleFontSizeDec = () => {
        if (fontSize != 1) {
            setFontSize(fontSize - 1);
        }
        updateStateUpdatingTextContainer({
            ...currentTextContainer,
            richText: {
                ...currentTextContainer.richText,
                fontSize: fontSize
            }
        });
    }

    return (
        <div className="edit_text_size">
            <li><a href="#" className="tools_button resize" onClick={handleFontSizeDec}>-</a></li>
            <input type="text" className="input_resize_box" value={fontSize} onInput={handleRichTextFontSizeChange} />
            <li><a href="#" className="tools_button resize" onClick={handleFontSizeInc} >+</a></li>
        </div>
    )

}