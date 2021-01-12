import { useSelector } from "react-redux";
import Editor from "../../../../model/Editor";
import Content from "../../../../model/slide/content/Content";
import { RootState } from "../../../../store/Reducer";
import React from "react";
import { isImage } from "../../../../methods/typeGuardMethods/isImage";
import { UpdateImage } from "./updateImage";
import './image.css'

export const Images: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );

    const getUpdateContentControlImageElements = (presentEditor: Editor) => {
        if (!presentEditor.currentContent) {
            return
        };
        let content: Content = presentEditor.currentContent;
        if (isImage(content)) {
            return (
                <>
                    <UpdateImage presentEditor={presentEditor} currentImage={content} />
                </>
            )
        }
    }

    return (
        <div className="image_tools">
            {getUpdateContentControlImageElements(presentEditor)}
        </div>
    )
}
