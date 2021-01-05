import {useDispatch} from "react-redux";
import Editor from "../../../model/Editor";
import {addState} from "../../../store/Reducer/editor";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";
import TextContainer from "../../../model/slide/content/TextContainer";

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const UpdateTextContainer = ({presentEditor, currentTextContainer}: updateTextContainerProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (textContainer: TextContainer) => dispatch(addState(updateTextContainer(presentEditor, textContainer)));

    const handleWidthChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        width: +event.target.value
    });
    const handlePositionXChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        position: {
            ...currentTextContainer.position,
            x: +event.target.value
        }
    });
    const handlePositionYChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        position: {
            ...currentTextContainer.position,
            y: +event.target.value
        }
    });
    const handleRichTextColorChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            color: event.target.value
        }
    });
    const handleRichTextFontChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            font: event.target.value
        }
    });
    const handleRichTextValueChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            value: event.target.value
        }
    });
    return (
        <div>
            <label>
                Ширина:
                <input type="text" onChange={handleWidthChange} value={currentTextContainer.width}/>
            </label><br/>
            <label>
                Позиция X:
                <input type="text" onChange={handlePositionXChange} value={currentTextContainer.position.x}/> 
            </label><br/>
            <label>
                Позиция Y:
                <input type="text" onChange={handlePositionYChange} value={currentTextContainer.position.y}/> 
            </label><br/>
            <label>
                Цвет:
                <input type="text" onChange={handleRichTextColorChange} value={currentTextContainer.richText.color}/> 
            </label><br/>
            <label>
                Cтиль:
                <input type="text" onChange={handleRichTextFontChange} value={currentTextContainer.richText.font}/> 
            </label><br/>
            <label>
                Текст:
                <input type="text" onChange={handleRichTextValueChange} value={currentTextContainer.richText.value}/> 
            </label><br/>
        </div>
    )
};