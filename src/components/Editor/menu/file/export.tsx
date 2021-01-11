import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIteratedCurrSlideContentList } from "../../../../methods/core/getIteratedCurrSlideContentList";
import { isCircle } from "../../../../methods/typeGuardMethods/isCircle";
import { isImage } from "../../../../methods/typeGuardMethods/isImage";
import { isRectangle } from "../../../../methods/typeGuardMethods/isRectangle";
import { isTextContainer } from "../../../../methods/typeGuardMethods/isTextContainer";
import changeCurrentContent from "../../../../methods/updateContent/changeCurrentContent";
import Editor from "../../../../model/Editor";
import Content from "../../../../model/slide/content/Content";
import { RootState } from "../../../../store/Reducer";
import { addState } from "../../../../store/Reducer/editor";
import { CircleEl } from "../../contents/circle";
import { ImageEl } from "../../contents/image";
import { RectangleEl } from "../../contents/rectangles";
import { TextContainerEl } from "../../contents/textContainers";

export const Export = () => {
  const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);
  let dispatch = useDispatch();
  const changeCurrentContentAction = (uuid: string): object => {
    return dispatch(addState(changeCurrentContent(presentEditor, uuid)));
  };
  const [className, setClassName] = useState('');
  const [newEditor, setEditor] = useState(presentEditor);
  let slideIndex = 0
  const [slideShow, setSlideShow] = useState(0)

  const exportToJson = () => {
    let filename = presentEditor.currentPresentation.name + '.json';
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(presentEditor)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var myFile = document.createElement('a');
      myFile.download = filename;
      myFile.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(presentEditor));
      myFile.target = '_blank';
      document.body.appendChild(myFile);
      myFile.click();
      document.body.removeChild(myFile);
    }
    setClassName('');
  }

  const drawContent = (content: Content) => {
    const onClickCallback = () => changeCurrentContentAction(content.uuid);
    if (isCircle(content)) {
      return <CircleEl circle={content} onCurrentElementChanged={onClickCallback.bind(content)} isCurrent={true}
        key={content.uuid} />
    }
    if (isRectangle(content)) {
      return <RectangleEl rectangle={content} isCurrent={true} key={content.uuid}
        onCurrentElementChanged={onClickCallback.bind(content)} />
    }
    if (isTextContainer(content)) {
      return <TextContainerEl textContainer={content} editor={presentEditor} isCurrent={true}
        onClick={onClickCallback.bind(content)} key={content.uuid} />
    }
    if (isImage(content)) {
      return <ImageEl image={content} isCurrent={true} onClick={onClickCallback.bind(content)}
        key={content.uuid} />
    }
  };

  const drawBackground = () => {
    return (
      <>
        <rect width={'100%'} height={'100%'} fill={newEditor.currentSlide?.background} />
        <image href={newEditor.currentSlide?.backgroundImage} height="100%" width="100%" />
      </>
    )
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
    )

    newEditor.currentPresentation.slides = {
      ...presentEditor.currentPresentation.slides
    }
  }

  const closePreWatch = () => {
    setClassName('');
  }

  const changeCurrentSlideIdInc = () => {
    slideIndex = slideShow;
    console.log(slideIndex);
    if (presentEditor.currentPresentation.slides[slideIndex + 1] != null) {
      slideIndex++;
    }
    setEditor({
      ...newEditor,
      currentSlide: newEditor.currentPresentation.slides[slideIndex],
      currentContent: null
    })
    setSlideShow(slideIndex)
  }
  const changeCurrentSlideIdDec = () => {
    slideIndex = slideShow;
    if (slideIndex != 0) {
      slideIndex--;
    }

    setEditor({
      ...newEditor,
      currentSlide: newEditor.currentPresentation.slides[slideIndex],
      currentContent: null
    })
    setSlideShow(slideIndex)
  }

  return (
    <>
      <button className="tools_button" onClick={openPreWatch}>Экспорт</button>
      <div className={"preWatch " + className}>
        <svg width='100%' height="100%" id={"currentSlideContent"}>
          {drawBackground()}
          {getIteratedCurrSlideContentList(newEditor).map(drawContent)}
        </svg>
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
        <div className="slides_control_stop" onClick={exportToJson} >
          Сохранить презентацию
        </div>
      </div>
    </>
  )
}