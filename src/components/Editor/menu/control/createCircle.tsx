import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../../../../store/Reducer/editor";
import { RootState } from "../../../../store/Reducer";
import Editor from "../../../../model/Editor";
import getEditorWithNewCircle from "../../../../methods/addContent/createCircle";

export const CreateCircle: React.FC = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const updateStateCreatingCircle = () => dispatch(addState(getEditorWithNewCircle(presentEditor)));
    return (
        <button onClick={updateStateCreatingCircle}>Круг</button>
    );
};