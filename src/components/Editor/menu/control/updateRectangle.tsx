import { useDispatch } from "react-redux";
import Editor from "../../../../model/Editor";
import { addState } from "../../../../store/Reducer/editor";
import Rectangle from "../../../../model/slide/content/shape/Rectangle";
import updateRectangle from "../../../../methods/updateContent/updateRectangle";

type updateRectangleProps = {
    presentEditor: Editor, currentRectangle: Rectangle
}

export const UpdateRectangle = ({ presentEditor, currentRectangle }: updateRectangleProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingRectangle = (rectangle: Rectangle) => dispatch(addState(updateRectangle(presentEditor, rectangle)));

    const handleBackgroundChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        background: event.target.value
    });
    const handleBorderWidthChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        border: {
            ...currentRectangle.border,
            width: +event.target.value
        }
    });
    const handleBorderColorChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        border: {
            ...currentRectangle.border,
            color: event.target.value
        }
    });
    const handleBorderTypeChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        border: {
            ...currentRectangle.border,
            type: event.target.value
        }
    });
    const handlePositionXChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        position: {
            ...currentRectangle.position,
            x: +event.target.value
        }
    });
    const handlePositionYChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        position: {
            ...currentRectangle.position,
            y: +event.target.value
        }
    });
    const handleRectangleSizeHeightChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        rectangleSize: {
            ...currentRectangle.rectangleSize,
            height: +event.target.value
        }
    });
    const handleRectangleSizeWidthChange = (event: any) => updateStateUpdatingRectangle({
        ...currentRectangle,
        rectangleSize: {
            ...currentRectangle.rectangleSize,
            width: +event.target.value
        }
    });
    return (
        <div>
            <div id="edit_params">
                <div id="popup_rect">
                    <div className="params_field">
                        <h3 className="param_name">Ширина</h3>
                        <input type="text" className="param_input_label" onChange={handleRectangleSizeWidthChange} value={currentRectangle.rectangleSize.width} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Высота</h3>
                        <input type="text" className="param_input_label" onChange={handleRectangleSizeHeightChange} value={currentRectangle.rectangleSize.height} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Фон</h3>
                        <input type="text" className="param_input_label" onChange={handleBackgroundChange} value={currentRectangle.background} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Ширина обводки</h3>
                        <input type="text" className="param_input_label" onChange={handleBorderWidthChange} value={currentRectangle.border.width} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Цвет обводки</h3>
                        <input type="text" className="param_input_label" onChange={handleBorderColorChange} value={currentRectangle.border.color} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Тип обводки</h3>
                        <input type="text" className="param_input_label" onChange={handleBorderTypeChange} value={currentRectangle.border.type} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция X</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionXChange} value={currentRectangle.position.x} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция Y</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionYChange} value={currentRectangle.position.y} />
                    </div>
                    <a href="#" className="close">Применить</a>
                </div>
            </div>
        </div>
    )
};