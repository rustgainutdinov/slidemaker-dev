import React, {useState} from "react";
import {useSelector} from "react-redux";
import Editor from "../../../../model/Editor";
import {RootState} from "../../../../store/Reducer";
import {SvgContentList} from "../../svg/list";
import {exportToJson} from "./saveFile";

export const Export = () => {
    const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    const [className, setClassName] = useState('');
    const [slideShow, setSlideShow] = useState(0);

    const Save = () => {
        exportToJson(presentEditor);
        setClassName('');
    };

    const openPreWatch = () => {
        if (className == '') {
            setClassName('active');
        } else {
            setClassName('');
        }
    };

    const closePreWatch = () => {
        setClassName('');
    };

    const changeCurrentSlideIdInc = () => {
        if (presentEditor.currentPresentation.slides.length - 2 >= slideShow) {
            setSlideShow(slideShow + 1)
        }
    };
    const changeCurrentSlideIdDec = () => {
        if (slideShow !== 0) {
            setSlideShow(slideShow - 1)
        }
    };

    return (
        <>
            <button className="tools_button" onClick={openPreWatch}>Экспорт</button>
            <div className={"preWatch " + className}>
                {<SvgContentList slide={presentEditor.currentPresentation.slides[slideShow]} width="100%"
                                 height="100%"/>}
                <div className="slides_control_stop stopPreWatch" onClick={closePreWatch}>
                    Отменить предпросмотр
                </div>
            </div>
            <div className={"slides_control " + className}>
                <div className="slides_control_buttons">
                    <button onClick={changeCurrentSlideIdDec}>Предыдущий</button>
                    <p>{slideShow + 1}</p>
                    <button onClick={changeCurrentSlideIdInc}>Следущий</button>
                </div>
                <div className="slides_control_stop" onClick={Save}>
                    Сохранить презентацию
                </div>
            </div>
        </>
    )
};