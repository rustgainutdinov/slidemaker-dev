import { useDispatch } from "react-redux";
import Editor from "../../../model/Editor";
import { addState } from "../../../store/Reducer/editor";
import updateTextContainer from "../../../methods/updateContent/updateTextContainer";
import TextContainer from "../../../model/slide/content/TextContainer";

type updateTextContainerProps = {
    presentEditor: Editor, currentTextContainer: TextContainer
}

export const UpdateTextContainer = ({ presentEditor, currentTextContainer }: updateTextContainerProps) => {
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
    const handleRichTextFontFamilyChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            fontFamily: event.target.value
        }
    });
    const handleRichTextFontWeightChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            fontWeight: +event.target.value
        }
    });
    const handleRichTextFontStyleChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            fontWeight: event.target.value
        }
    });
    const handleRichTextFontSizeChange = (event: any) => updateStateUpdatingTextContainer({
        ...currentTextContainer,
        richText: {
            ...currentTextContainer.richText,
            fontSize: +event.target.value
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
            <div id="edit_params">
                <div id="popup_text">
                    <div className="params_field">
                        <h3 className="param_name">Цвет</h3>
                        <input type="text" className="param_input_label" onChange={handleRichTextColorChange} value={currentTextContainer.richText.color} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Текст</h3>
                        <input type="text" className="param_input_label" onChange={handleRichTextValueChange} value={currentTextContainer.richText.value} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Ширина</h3>
                        <input type="text" className="param_input_label" onChange={handleWidthChange} value={currentTextContainer.width} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Шрифт</h3>
                        <input type="text" className="param_input_label" onChange={handleRichTextFontFamilyChange} value={currentTextContainer.richText.fontFamily} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Толщина</h3>
                        <input type="text" className="param_input_label" onChange={handleRichTextFontWeightChange} value={currentTextContainer.richText.fontWeight} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Стиль</h3>
                        <input type="text" className="param_input_label" onChange={handleRichTextFontStyleChange} value={currentTextContainer.richText.fontStyle} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Размер</h3>
                        <input type="text" className="param_input_label" onChange={handleRichTextFontSizeChange} value={currentTextContainer.richText.fontSize} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция X</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionXChange} value={currentTextContainer.position.x} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция Y</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionYChange} value={currentTextContainer.position.y} />
                    </div>
                    <a href="#" className="close">Применить</a>
                </div>
            </div>
        </div>
    )
};