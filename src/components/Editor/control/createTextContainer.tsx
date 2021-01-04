import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../../../store/Reducer/editor";
import { RootState } from "../../../store/Reducer";
import Editor from "../../../model/Editor";
import getEditorWithNewTextContainer from "../../../methods/addContent/createTextContainer";

export const CreateTextContainer: React.FC = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const updateStateCreatingTextContainer = () => dispatch(addState(getEditorWithNewTextContainer(presentEditor)));
    return (
        <button onClick={updateStateCreatingTextContainer}>Текст</button>
    );
};