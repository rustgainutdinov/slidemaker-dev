import {useDispatch} from "react-redux";
import Editor from "../../../model/Editor";
import {addState} from "../../../store/Reducer/editor";
import Rectangle from "../../../model/slide/content/shape/Rectangle";
import updateRectangle from "../../../methods/updateContent/updateRectangle";

type updateRectangleProps = {
    presentEditor: Editor, currentRectangle: Rectangle
}

export const UpdateRectangle = ({presentEditor, currentRectangle}: updateRectangleProps) => {
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
            <label>
                Фон:
                <input type="text" onChange={handleBackgroundChange} value={currentRectangle.background}/>
            </label><br/>
            <label>
                Ширина обводки:
                <input type="text" onChange={handleBorderWidthChange} value={currentRectangle.border.width}/>
            </label><br/>
            <label>
                Цвет обводки:
                <input type="text" onChange={handleBorderColorChange} value={currentRectangle.border.color}/>
            </label><br/>
            <label>
                Тип обводки:
                <input type="text" onChange={handleBorderTypeChange} value={currentRectangle.border.type}/>
            </label><br/>
            <label>
                Позиция X:
                <input type="text" onChange={handlePositionXChange} value={currentRectangle.position.x}/> 
            </label><br/>
            <label>
                Позиция Y:
                <input type="text" onChange={handlePositionYChange} value={currentRectangle.position.y}/> 
            </label><br/>
            <label>
                Высота:
                <input type="text" onChange={handleRectangleSizeHeightChange} value={currentRectangle.rectangleSize.height}/> 
            </label><br/>
            <label>
                Ширина:
                <input type="text" onChange={handleRectangleSizeWidthChange} value={currentRectangle.rectangleSize.width}/> 
            </label>
        </div>
    )
};