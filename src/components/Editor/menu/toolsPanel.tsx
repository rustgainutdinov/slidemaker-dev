import { ControlEl } from "../control";
import { UpdateControlElements } from "../control/updateControlElements";
import React from "react";
import { useDispatch } from "react-redux";
import { redoState, undoState } from "../../../store/Reducer/editor";
import { DeletingControl } from "./control/deletingControl";
import { PresentationEl } from "./presentationName";
import { SlideBackgroundEl } from "./slideBackground";

export const ToolsPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="tools_panel">
            <h1 className="title"><PresentationEl /></h1>
            <div className="tools">
                <div className="main_tools">
                    <li><a href="#" className="tools_button">Файл</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(undoState())}>UNDO</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(redoState())}>REDO</a></li>
                    <UpdateControlElements />
                    <ControlEl />
                </div>
                <ShapeTools />
                <TextTools />
            </div>
        </div>
    )
}