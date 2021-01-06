import {Control} from "../control";
import {UpdateControlElements} from "../control/updateControlElements";
import React from "react";
import {useDispatch} from "react-redux";
import {redoState, undoState} from "../../../store/Reducer/editor";

export const ToolsPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="tools_panel">
            <h1 className="title">Самая лучшая презентация</h1>
            <div className="tools">
                <li><a href="#" className="tools_button">Файл</a></li>
                <li><a href="#" className="tools_button" onClick={() => dispatch(undoState())}>UNDO</a></li>
                <li><a href="#" className="tools_button" onClick={() => dispatch(redoState())}>REDO</a></li>
                <li><a href="#" className="tools_button">Вставка</a>
                    <ul className="dropdown">
                        <Control/>
                    </ul>
                </li>
                <li>
                    <a href="#edit_params" className="tools_button">Изменить</a>
                    <UpdateControlElements/>
                </li>
            </div>
        </div>
    )
};