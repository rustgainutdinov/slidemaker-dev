import * as React from "react";
import {useDispatch} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import {RootState} from "../../../store/Reducer";
import {useSelector} from "../Content/circles";
import Editor from "../../../Model/Editor";
import getEditorWithNewCircle from "../../../Methods/AddContent/CreateCircle";

export const CreateCircle: React.FC = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const updateStateCreatingCircle = () => dispatch(addState(getEditorWithNewCircle(presentEditor)));
    return (
        <div>
            <button onClick={updateStateCreatingCircle}>Create circle</button>
        </div>
    );
};