import {useDispatch, useSelector} from "react-redux";
import Editor from "../../../model/Editor";
import {RootState} from "../../../store/Reducer";
import {addState} from "../../../store/Reducer/editor";
import createSlide from "../../../methods/addContent/createSlide";
import {Slide} from "../../../model/slide/Slide";
import changeCurrentSlide from "../../../methods/updateContent/changeCurrentSlide";

export const Previews = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const updateStateCreatingSlide = () => dispatch(addState(createSlide(presentEditor)));
    const updateStateChangingSlide = (id: number) => dispatch(addState(changeCurrentSlide(presentEditor, id)));

    return (
        <div className="slides_preview">
            <div className="slides">
                {presentEditor.currentPresentation.slides.map((slide: Slide) => {
                    const onSlideClickCallback = () => updateStateChangingSlide(slide.slideId);
                    return <div className="slide_wrapper" onClick={onSlideClickCallback.bind(slide)}
                                key={slide.slideId}>
                        <div className="slide_counter">
                            <p className="counter">{slide.slideId + 1}</p>
                        </div>
                        <a href="#" className="slide_box"></a>
                    </div>
                })}

                <div className="slide_wrapper" onClick={updateStateCreatingSlide}>
                    <div className="add_slide_box"></div>
                </div>
            </div>
        </div>
    )
};