import { useDispatch, useSelector } from "react-redux";
import updateSlideBackground from "../../../methods/updateContent/updateSlideBackground";
import Editor from "../../../model/Editor";
import { RootState } from "../../../store/Reducer";
import { addState } from "../../../store/Reducer/editor";

export const SlideBackgroundEl = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    const updateStateUpdatingSlideBackground = (color: string) => dispatch(addState(updateSlideBackground(presentEditor, color)));

    const handleSlideBackgroundChange = (event: any) => updateStateUpdatingSlideBackground(
        event.target.value
    );

    return (
        <ul className="dropdown">
            <li>
                <a href="#">
                    <input type="text" className="param_input_label" value={presentEditor.currentSlide?.background} onInput={handleSlideBackgroundChange} />
                </a>
            </li>
        </ul>
    );
};