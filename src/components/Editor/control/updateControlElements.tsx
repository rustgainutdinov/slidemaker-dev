import * as React from "react";
import {useSelector} from "react-redux";
import Editor from "../../../model/Editor";
import {RootState} from "../../../store/Reducer";
import Content from "../../../model/slide/content/Content";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import {UpdateCircle} from "./updateCircle";

export const UpdateControlElements: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const getUpdateContentControlElements = (presentEditor: Editor) => {
        let content: Content = presentEditor.currentContent;
        if (isCircle(content)) {
            return <UpdateCircle presentEditor={presentEditor} currentCircle={content}/>
        }
    };

    return (
        <div>
            {getUpdateContentControlElements(presentEditor)}
        </div>
    )
};