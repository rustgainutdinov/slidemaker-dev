import {PreviewSlidesList} from "./previewSlidesList";
import {AddSlide} from "./addSlide";
import * as React from "react";
import Editor from "../../../model/Editor";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/Reducer";

export const Previews = () => {
    const editor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    return (
        <div className="slides_preview">
            <div className="slides">
                <PreviewSlidesList editor={editor}/>
                <AddSlide editor={editor}/>
            </div>
        </div>
    )
};