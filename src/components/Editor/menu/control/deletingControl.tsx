import React from "react";
import { useSelector } from "react-redux";
import Editor from "../../../../model/Editor";
import { RootState } from "../../../../store/Reducer";
import { DeleteElement } from "./deleteElement";

export const DeletingControl: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );

    return <DeleteElement presentEditor={presentEditor} currentContent={presentEditor.currentContent} />
}