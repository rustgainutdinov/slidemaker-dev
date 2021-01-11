import React from "react";
import { useDispatch } from "react-redux";
import { redoState, undoState } from "../../../store/Reducer/editor";
import { SlideBackgroundEl } from "./slideBackground";
import { DeletingControl } from "./control/deletingControl";
import { ControlEl } from "./control";
import { ShapeTools } from "./shapeTools/shapeTools";
import { TextTools } from "./textTools/textTools";
import './toolsPanel.css'
import { PresentationEl } from "./presentationName";
import { File } from "./file/file";
import { Import } from "./file/import";


export const ToolsPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="tools_panel">
            <h1 className="title"><PresentationEl /></h1>
            <div className="tools">
                <div className="main_tools">
                    <li><a href="#" className="tools_button">Файл</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(undoState())}>Undo</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(redoState())}>Redo</a></li>
                    <li><DeletingControl /></li>
                    <li><a href="#" className="tools_button">Фон</a>
                        <SlideBackgroundEl />
                    </li>
                    <Import />
                    <File />
                    <ControlEl />
                </div>
                <ShapeTools />
                <TextTools />
            </div>
        </div>

    )
}