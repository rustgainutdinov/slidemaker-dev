import { ControlEl } from "../control";
import { UpdateControlElements } from "../control/updateControlElements";
import React from "react";
import { useDispatch } from "react-redux";
import { redoState, undoState } from "../../../store/Reducer/editor";
import { TextTools } from "../textTools/textTools";

export const ToolsPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="tools_panel">
            <h1 className="title">Самая лучшая презентация</h1>
            <div className="tools">
                <div className="main_tools">
                    <li><a href="#" className="tools_button">Файл</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(undoState())}>UNDO</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(redoState())}>REDO</a></li>
                    <li>
                        <a href="#edit_params" className="tools_button">Изменить</a>
                        <UpdateControlElements />
                    </li>
                    <ControlEl />
                </div>
                <TextTools />
            </div>
        </div>
    )
};