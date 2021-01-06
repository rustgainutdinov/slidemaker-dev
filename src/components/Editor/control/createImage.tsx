import { useDispatch, useSelector } from "react-redux";
import Editor from "../../../model/Editor";
import { RootState } from "../../../store/Reducer";
import { addState } from "../../../store/Reducer/editor";
import getEditorWithNewImage from "../../../methods/addContent/createImage";


export const CreateImage: React.FC = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const updateStateCreatingImage = () => dispatch(addState(getEditorWithNewImage(presentEditor)));
    return (
        <button onClick={updateStateCreatingImage}>Квадрат</button>
    );
};