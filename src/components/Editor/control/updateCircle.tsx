import { useDispatch } from "react-redux";
import Editor from "../../../model/Editor";
import { addState } from "../../../store/Reducer/editor";
import updateCircle from "../../../methods/updateContent/updateCircle";
import Circle from "../../../model/slide/content/shape/Circle";

type updateCircleProps = {
    presentEditor: Editor, currentCircle: Circle
}

export const UpdateCircle = ({ presentEditor, currentCircle }: updateCircleProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingCircle = (circle: Circle) => dispatch(addState(updateCircle(presentEditor, circle)));

    const handleRadiusChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        radius: +event.target.value
    });
    const handleBorderWidthChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        border: {
            ...currentCircle.border,
            width: +event.target.value
        }
    });
    const handleBorderColorChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        border: {
            ...currentCircle.border,
            color: event.target.value
        }
    });
    const handleBorderTypeChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        border: {
            ...currentCircle.border,
            type: event.target.value
        }
    });
    const handleBackgroundChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        background: event.target.value
    });
    const handlePositionXChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        position: {
            ...currentCircle.position,
            x: +event.target.value
        }
    });
    const handlePositionYChange = (event: any) => updateStateUpdatingCircle({
        ...currentCircle,
        position: {
            ...currentCircle.position,
            y: +event.target.value
        }
    });
    return (
        <div>
            <div id="edit_params">
                <div id="popup_circle">
                    <div className="params_field">
                        <h3 className="param_name">Радиус</h3>
                        <input type="text" className="param_input_label" onChange={handleRadiusChange} value={currentCircle.radius} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Ширина обводки</h3>
                        <input type="text" className="param_input_label" onChange={handleBorderWidthChange} value={currentCircle.border.width} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Цвет обводки</h3>
                        <input type="text" className="param_input_label" onChange={handleBorderColorChange} value={currentCircle.border.color} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Тип обводки</h3>
                        <input type="text" className="param_input_label" onChange={handleBorderTypeChange} value={currentCircle.border.type} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Фон</h3>
                        <input type="text" className="param_input_label" onChange={handleBackgroundChange} value={currentCircle.background} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция X</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionXChange} value={currentCircle.position.x} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция Y</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionYChange} value={currentCircle.position.y} />
                    </div>
                    <a href="#" className="close">Применить</a>
                </div>
            </div>
        </div>
    )
};