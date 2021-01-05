import {useDispatch} from "react-redux";
import Editor from "../../../model/Editor";
import {addState} from "../../../store/Reducer/editor";
import updateCircle from "../../../methods/updateContent/updateCircle";
import Circle from "../../../model/slide/content/shape/Circle";

type updateCircleProps = {
    presentEditor: Editor, currentCircle: Circle
}

export const UpdateCircle = ({presentEditor, currentCircle}: updateCircleProps) => {
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
            <label>
                Радиус:
                <input type="text" onChange={handleRadiusChange} value={currentCircle.radius}/>
            </label><br/>
            <label>
                Ширина обводки:
                <input type="text" onChange={handleBorderWidthChange} value={currentCircle.border.width}/>
            </label><br/>
            <label>
                Цвет обводки:
                <input type="text" onChange={handleBorderColorChange} value={currentCircle.border.color}/>
            </label><br/>
            <label>
                Тип обводки:
                <input type="text" onChange={handleBorderTypeChange} value={currentCircle.border.type}/>
            </label><br/>
            <label>
                Фон:
                <input type="text" onChange={handleBackgroundChange} value={currentCircle.background}/>
            </label><br/>
            <label>
                Позиция X:
                <input type="text" onChange={handlePositionXChange} value={currentCircle.position.x}/> 
            </label><br/>
            <label>
                Позиция Y:
                <input type="text" onChange={handlePositionYChange} value={currentCircle.position.y}/> 
            </label>
        </div>
    )
};