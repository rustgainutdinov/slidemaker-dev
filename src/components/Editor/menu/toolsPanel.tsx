import React from "react";
import {useDispatch} from "react-redux";
import {redoState, undoState} from "../../../store/Reducer/editor";
import {PresentationEl} from "./presentationName";
import {SlideBackgroundEl} from "./slideBackground";
import {DeletingControl} from "./control/deletingControl";
import { UpdateControlElements } from "./control/updateControlElements";
import { ShapeTools } from "../shapeTools/shapeTools";
import { TextTools } from "../textTools/textTools";
import { ControlEl } from "./control";
import './toolsPanel.css'

export const ToolsPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="tools_panel">
            <h1 className="title"><PresentationEl/></h1>
            <div className="tools">
                <li><a href="#" className="tools_button">Файл</a></li>
                <li><a href="#" className="tools_button" onClick={() => dispatch(undoState())}>UNDO</a></li>
                <li><a href="#" className="tools_button" onClick={() => dispatch(redoState())}>REDO</a></li>
                <li><a href="#" className="tools_button">Вставка</a>
                </li>
                <li><DeletingControl/></li>
                <li><a href="#" className="tools_button">Фон</a>
                    <ul className="dropdown">
                        <SlideBackgroundEl/>
                    </ul>
                </li>
                <li>
                    <a href="#edit_params" className="tools_button">Изменить</a>
                    <UpdateControlElements/>
                    <ControlEl />
                </div>
                <ShapeTools />
                <TextTools />
            </div>
        </div>
    )
}