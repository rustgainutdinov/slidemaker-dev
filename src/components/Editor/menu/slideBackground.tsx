import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSlideBackground } from "../../../methods/updateContent/updateSlideBackground";
import Editor from "../../../model/Editor";
import { RootState } from "../../../store/Reducer";
import { addState } from "../../../store/Reducer/editor";

export const SlideBackgroundEl = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);

    const updateStateUpdatingSlideBackground = (color: string, backgroundImage: string) => dispatch(addState(updateSlideBackground(presentEditor, color, backgroundImage)));

    const [background, setBackground] = useState('#fff');
    const [backgroundImage, setBackgroundImage] = useState('');

    const handleSlideBackgroundChange = (event: any) => {
        setBackground(event.target.value);
    }
    const handleSlideBackgroundImageChange = (event: any) => {
        setBackgroundImage(event.target.value);
    }

    const changeBg = () => {
        updateStateUpdatingSlideBackground(
            background, backgroundImage
        );
    }

    return (
        <ul className="dropdown bg">
            <li>
                <a href="#" className="slideBackground">
                    <p>Цвет Фона</p>
                    <input type="text" className="param_input_label" value={background} onInput={handleSlideBackgroundChange} />

                    <p>Картинка</p>
                    <input type="text" className="param_input_label" value={backgroundImage} onInput={handleSlideBackgroundImageChange} />

                    <button onClick={changeBg}>Применить</button>
                </a>
            </li>
        </ul>
    );
};