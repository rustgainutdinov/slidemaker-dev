import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../../../methods/updateContent/updateContent";
import Editor from "../../../../model/Editor";
import Shape from "../../../../model/slide/content/Shape";
import { addState } from "../../../../store/Reducer/editor";

type updateProps = {
    presentEditor: Editor, currentContent: Shape
}

export const ShapeBorder = ({ presentEditor, currentContent }: updateProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingContentBackGround = (content: Shape) => dispatch(addState(updateContent(presentEditor, content)));
    const selectRef = useRef<HTMLInputElement>(null);
    const [borderWidthClass, setClass] = useState('');
    const [borderWidthSelectClass, setSelectClass] = useState('');

    const SelectFocus = () => {
        setClass('borderWidth')
        setSelectClass('borderWidtSelect_active')
    }

    const SelectUnfocus = () => {
        setClass('')
        setSelectClass('')
    }

    const handleFocus = () => {
        if (selectRef.current != null) {
            selectRef.current.click();
        }
    }

    const handleBorderColorChange = (event: any) => updateStateUpdatingContentBackGround({
        ...currentContent,
        border: {
            ...currentContent.border,
            color: event.target.value
        }
    });

    const handleBorderWidthChange = (event: any) => updateStateUpdatingContentBackGround({
        ...currentContent,
        border: {
            ...currentContent.border,
            width: event.target.value
        }
    });

    return (
        <>
            <li onClick={handleFocus}>
                <a href="#" className="shape">
                    <svg id="mdi-border-color" className="shape_button" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z" /></svg>
                    <div className="dropDown">
                        <input className="hidden" ref={selectRef} type="color" onInput={handleBorderColorChange} list="colorList" />
                        <datalist id="colorList">
                            <option value="#ff0000" label="Красный" />
                            <option value="#008000" label="Зелёный" />
                            <option value="#0000ff" label="Синий" />
                        </datalist>
                    </div>
                </a>
            </li>
            <li onMouseMove={SelectFocus} onMouseOut={SelectUnfocus}>
                <a href="#" className={"shape " + borderWidthClass}>
                    <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#ffffff"><path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" /></svg>
                </a>
                <select className={"borderWidtSelect " + borderWidthSelectClass}
                    onInput={handleBorderWidthChange} onMouseMove={SelectFocus} onMouseOut={SelectUnfocus}
                    value={1}>
                    <option value='1'>1 пикс.</option>
                    <option value='2'>2 пикс.</option>
                    <option value='3'>3 пикс.</option>
                    <option value='4'>4 пикс.</option>
                    <option value='8'>8 пикс.</option>
                    <option value='12'>12 пикс.</option>
                    <option value='16'>16 пикс.</option>
                    <option value='24'>24 пикс.</option>
                </select>
            </li>
        </>

    )
}