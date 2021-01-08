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
                <div className="main_tools">
                    <li><a href="#" className="tools_button">Файл</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(undoState())}>UNDO</a></li>
                    <li><a href="#" className="tools_button" onClick={() => dispatch(redoState())}>REDO</a></li>
                    <li>
                        <a href="#edit_params" className="tools_button">Изменить</a>
                        <UpdateControlElements/>
                    </li>
                    <Control/>
                </div>
                <div className="text_tools">
                    <li><a href="#" className="tools_button bold">B</a></li>
                    <li><a href="#" className="tools_button italic">I</a></li>
                    <li><a href="#" className="tools_button decoration">U</a></li>
                    <div className="edit_text_size">
                        <li><a href="#" className="tools_button resize">-</a></li>
                        <input type="text" className="input_resize_box"/>
                        <li><a href="#" className="tools_button resize">+</a></li>
                    </div>
                    <li>
                        <a href="#" className="tools_button family">
                            <p>Arial</p>
                            <p>&#9660;</p>
                        </a>
                        <ul className="family_list">
                            <li>Georgia</li>
                            <li>Roboto</li>
                            <li>Roboto Mono</li>
                            <li>Verdana</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="tools_button color">A</a>
                        <ul className="сolor_palette">
                            <li className="defolt_colors">
                                <ul>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                    <li>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                        <button className="defolt_colors_button"></button>
                                    </li>
                                </ul>
                            </li>
                            <li className="custom_color">
                                <p>Другой</p>
                                <button className="custom_color_button">+</button>    
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
};