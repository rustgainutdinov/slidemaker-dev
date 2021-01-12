import { useDispatch, useSelector } from "react-redux";
import { updateSlideBackground } from "../../../methods/updateContent/updateSlideBackground";
import { updateSlideBackgroundImage } from "../../../methods/updateContent/updateSlideBackgroundImage";
import Editor from "../../../model/Editor";
import { RootState } from "../../../store/Reducer";
import { addState } from "../../../store/Reducer/editor";
import { ColorPalette } from "./control/colorPalette";

export const SlideBackgroundEl = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);

    const updateStateUpdatingSlideBackground = (background: string) =>
        dispatch(addState(updateSlideBackground(presentEditor, background)));

    const updateStateUpdatingSlideBackgroundImage = (backgroundImage: string) =>
        dispatch(addState(updateSlideBackgroundImage(presentEditor, backgroundImage)));


    const handleSlideBackgroundChange = (event: any) => {
        updateStateUpdatingSlideBackground(
            event.target.value
        );
    }
    const handleSlideBackgroundImageChange = (event: any) => {
        updateStateUpdatingSlideBackgroundImage(
            event.target.value
        );
    }

    return (
        <ul className="dropdown bg">
            <li>
                <a href="#" className="slideBackground">
                    <p>Цвет Фона</p>
                    <input className="colorPaletteForBg" type="color" list="colorList"
                        value={presentEditor.currentSlide?.background} onInput={handleSlideBackgroundChange} />
                    <ColorPalette />
                    <p>Картинка</p>
                    <input type="text" className="param_input_label" value={presentEditor.currentSlide?.backgroundImage} onInput={handleSlideBackgroundImageChange} />
                </a>
            </li>
        </ul>
    );
};