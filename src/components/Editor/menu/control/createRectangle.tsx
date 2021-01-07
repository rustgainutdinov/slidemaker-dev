import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../../../../store/Reducer/editor";
import { RootState } from "../../../../store/Reducer";
import Editor from "../../../../model/Editor";
import getEditorWithNewRectangle from "../../../../methods/addContent/createRectangle";

export const CreateRectangle: React.FC = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const updateStateCreatingRectangle = () => dispatch(addState(getEditorWithNewRectangle(presentEditor)));
    return (
        <button onClick={updateStateCreatingRectangle}>Квадрат</button>
    );
};