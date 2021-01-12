import React, { useState } from "react";
import { useSelector } from "react-redux";
import Editor from "../../../../model/Editor";
import { RootState } from "../../../../store/Reducer";
import { SvgContentList } from "../../svg/list";
import { exportToJson } from "./saveFile";

export const Export = () => {
  const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);
  const [className, setClassName] = useState('');
  const [newEditor, setEditor] = useState(presentEditor);
  let slideIndex = 0;
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
    setEditor(
      {
        ...newEditor,
        currentContent: newEditor.currentPresentation.slides[0].contentList[0],
        currentSlide: newEditor.currentPresentation.slides[0]
      }
    );
    newEditor.currentPresentation.slides = {
      ...presentEditor.currentPresentation.slides
    }
  };

  const closePreWatch = () => {
    setClassName('');
  };

  const changeCurrentSlideIdInc = () => {
    slideIndex = slideShow;
    if (presentEditor.currentPresentation.slides[slideIndex + 1] != null) {
      slideIndex++;
    }
    setEditor({
      ...newEditor,
      currentSlide: newEditor.currentPresentation.slides[slideIndex],
      currentContent: null
    });
    setSlideShow(slideIndex)
  };
  const changeCurrentSlideIdDec = () => {
    slideIndex = slideShow;
    if (slideIndex != 0) {
      slideIndex--;
    }

    setEditor({
      ...newEditor,
      currentSlide: newEditor.currentPresentation.slides[slideIndex],
      currentContent: null
    });
    setSlideShow(slideIndex)
  };

  const drawSlides =() => { 
    if (newEditor.currentSlide!=null) {
      return (
        <SvgContentList slide={newEditor.currentSlide} width="100%" height="100%"/>
      )
    }
  };

  return (
    <>
      <button className="tools_button" onClick={openPreWatch}>Экспорт</button>
      <div className={"preWatch " + className}>
        {drawSlides()}
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
        <div className="slides_control_stop" onClick={Save} >
          Сохранить презентацию
        </div>
      </div>
    </>
  )
};