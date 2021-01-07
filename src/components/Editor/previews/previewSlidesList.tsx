import {Slide} from "../../../model/slide/Slide";
import {useDispatch} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import changeCurrentSlide from "../../../methods/updateContent/changeCurrentSlide";
import * as React from "react";
import Editor from "../../../model/Editor";
import {PreviewSlide} from "./previewSlide";

type PreviewSlidesListProps = {
    editor: Editor
}

export const PreviewSlidesList = ({editor}: PreviewSlidesListProps) => {
    let dispatch = useDispatch();
    const drawSlidePreview = (slide: Slide) => {
        const onSlideClickCallback = () => dispatch(addState(changeCurrentSlide(editor, slide.slideId)));
        return <PreviewSlide slide={slide} onClick={onSlideClickCallback} key={slide.slideId}/>
    };
    return (
        <div>{editor.currentPresentation.slides.map(drawSlidePreview)}</div>
    )
};