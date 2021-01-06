import {useDispatch} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import createSlide from "../../../methods/addContent/createSlide";

type AddSlideProps = {
    editor: Editor
}

export const AddSlide = ({editor}: AddSlideProps) => {
    let dispatch = useDispatch();
    return (
        <div className="slide_wrapper" onClick={() => dispatch(addState(createSlide(editor)))}>
            <div className="add_slide_box"></div>
        </div>
    )
};