import * as React from "react";
import { useSelector } from "react-redux";
import { isCircle } from "../../../methods/typeGuardMethods/isCircle";
import { isRectangle } from "../../../methods/typeGuardMethods/isRectangle";
import { isTextContainer } from "../../../methods/typeGuardMethods/isTextContainer";
import Editor from "../../../model/Editor";
import Content from "../../../model/slide/content/Content";
import { RootState } from "../../../store/Reducer";
import { UpdateCircle } from "./updateCircle";
import { UpdateRectangle } from "./updateRectangle";
import { UpdateTextContainer } from "./updateTextContainer";

export const UpdateControlElements: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const getUpdateContentControlElements = (presentEditor: Editor) => {
        let content: Content = presentEditor.currentContent;
        if (isCircle(content)) {
            return <UpdateCircle presentEditor={presentEditor} currentCircle={content}/>
        }
        if (isRectangle(content)) {
            return <UpdateRectangle presentEditor={presentEditor} currentRectangle={content}/>
        }
        if (isTextContainer(content)) {
            return <UpdateTextContainer presentEditor={presentEditor} currentTextContainer={content}/>
        }
    };

    return (
        <div>
            {getUpdateContentControlElements(presentEditor)}
        </div>
    )
};