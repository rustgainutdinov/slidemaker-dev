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
        radius: event.target.value
    });
    return (
        <div>
            <label>
                Радиус:
                <input type="text" onChange={handleRadiusChange}/>
            </label>
        </div>
    )
};