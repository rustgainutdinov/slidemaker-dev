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

    const updateStateUpdatingSlideBackground = (background: string) =>
        dispatch(addState(updateSlideBackground(presentEditor, background)));

    const updateStateUpdatingSlideBackgroundImage = (backgroundImage: string) =>
        dispatch(addState(updateSlideBackgroundImage(presentEditor, backgroundImage)));

    const [backgroundImage, setBackgroundImage] = useState(presentEditor.currentSlide?.backgroundImage);

    const handleSlideBackgroundChange = (event: any) => {
        updateStateUpdatingSlideBackground(
            event.target.value
        );
        setBackgroundImage(presentEditor.currentSlide?.backgroundImage)
        if (background != undefined && backgroundImage != undefined) {
            updateStateUpdatingSlideBackground(
                background, backgroundImage
            );
        }
    }
    const handleSlideBackgroundImageChange = (event: any) => {
        setBackgroundImage(event.target.value);
        updateStateUpdatingSlideBackgroundImage(
            event.target.value
        );
    }

    const changeBg = () => {
        if (backgroundImage != undefined) {
            updateStateUpdatingSlideBackgroundImage(
                backgroundImage
            );
        }
    }

    return (
        <ul className="dropdown bg">
            <li>
                <a href="#" className="slideBackground">
                    <p>Цвет Фона</p>
                    <input className="colorPaletteForBg" type="color" list="colorList"
                        value={presentEditor.currentSlide?.background} onInput={handleSlideBackgroundChange} />
                    <datalist id="colorList">
                        <option value="#ff0000" label="Красный" />
                        <option value="#008000" label="Зелёный" />
                        <option value="#0000ff" label="Синий" />
                    </datalist>

                    <p>Картинка</p>
                    <input type="text" className="param_input_label" value={presentEditor.currentSlide?.backgroundImage} onInput={handleSlideBackgroundImageChange} />
                    <button onClick={changeBg}>Применить</button>
                </a>
            </li>
        </ul>
    );
};