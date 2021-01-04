import * as React from "react";
import {useSelector} from "react-redux";
import Editor from "../../../model/Editor";
import {RootState} from "../../../store/Reducer";

export const CreateRectangle: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );

    return (
        <div>
        </div>
    )
};