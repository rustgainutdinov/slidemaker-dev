import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSlideBackground } from "../../../methods/updateContent/updateSlideBackground";
import { updateSlideBackgroundImage } from "../../../methods/updateContent/updateSlideBackgroundImage";
import Editor from "../../../model/Editor";
import { RootState } from "../../../store/Reducer";
import { addState } from "../../../store/Reducer/editor";

export const SlideBackgroundEl = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    const updateStateUpdatingSlideBackground = (color: string) => dispatch(addState(updateSlideBackground(presentEditor, color)));

    const updateStateUpdatingSlideBackgroundImage = (color: string) => dispatch(addState(updateSlideBackgroundImage(presentEditor, color)));

    const [background, setBackground] = useState('#fff');
    const [backgroundImage, setBackgroundImage] = useState('');

    const handleSlideBackgroundChange = (event: any) => {
        setBackgroundImage('');
        setBackground(event.target.value);
        updateStateUpdatingSlideBackground(
            event.target.value
        );
        console.log(presentEditor.currentSlide)
    } 
    const handleSlideBackgroundImageChange = (event: any) => {
        setBackground('');
        setBackgroundImage(event.target.value);
        updateStateUpdatingSlideBackgroundImage(
            event.target.value
        );
    }

    return (
        <ul className="dropdown">
            <li>
                <a href="#" className="slideBackground">
                    <input type="text" className="param_input_label" value={background} onInput={handleSlideBackgroundChange} />
                    <input type="text" className="param_input_label" value={backgroundImage} onInput={handleSlideBackgroundImageChange} />
                </a>
            </li>
        </ul>
    );
};