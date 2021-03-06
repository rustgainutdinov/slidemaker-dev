import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../../../methods/updateContent/updateContent";
import Editor from "../../../../model/Editor";
import Shape from "../../../../model/slide/content/Shape";
import { addState } from "../../../../store/Reducer/editor";
import { ColorPalette } from "../control/colorPalette";

type updateProps = {
    presentEditor: Editor, currentContent: Shape
}

export const ShapeBg = ({ presentEditor, currentContent }: updateProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingContentBackGround = (content: Shape) => dispatch(addState(updateContent(presentEditor, content)));
    const selectRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (selectRef.current != null) {
            selectRef.current.click();
        }
    }

    const handleBackgroundChange = (event: any) => updateStateUpdatingContentBackGround({
        ...currentContent,
        background: event.target.value
    });

    return (
        <li>
            <a href="#" className="shape" onClick={handleFocus}>
                <svg id="mdi-format-color-fill" className="shape_button" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z" /></svg>
                <div className="dropDown">
                    <input className="hidden" ref={selectRef} value={currentContent.background} type="color" onInput={handleBackgroundChange} list="colorList" />
                    <ColorPalette />
                </div>
            </a>
        </li>
    )
}