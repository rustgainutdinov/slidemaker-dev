import React from "react";
import {useDispatch} from "react-redux";
import {redoState, undoState} from "../../../store/Reducer/editor";
import {SlideBackgroundEl} from "./slideBackground";
import {DeletingControl} from "./control/deletingControl";
import {ControlEl} from "./control";
import {ShapeTools} from "./shapeTools/shapeTools";
import {TextTools} from "./textTools/textTools";
import './toolsPanel.css'
import {PresentationEl} from "./presentationName";
import {Export} from "./file/export";
import {Import} from "./file/import";
import {Images} from "./imageTools/imageTools";
import {UndoIcon} from "./icons/undo";
import {RedoIcon} from "./icons/redo";


export const ToolsPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="tools_panel">
            <h1 className="title"><PresentationEl/></h1>
            <div className="tools">
                <div className="main_tools">
                    <Import/>
                    <Export/>
                    <li>
                        <a href="#" className="tools_button tools_icon" onClick={() => dispatch(undoState())}>
                            <UndoIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="tools_button tools_icon" onClick={() => dispatch(redoState())}>
                            <RedoIcon/>
                        </a>
                    </li>
                    <li><DeletingControl/></li>
                    <li><a href="#" className="tools_button">Фон</a>
                        <SlideBackgroundEl/>
                    </li>
                    <ControlEl/>
                </div>
                <Images/>
                <ShapeTools/>
                <TextTools/>
            </div>
        </div>

    )
}