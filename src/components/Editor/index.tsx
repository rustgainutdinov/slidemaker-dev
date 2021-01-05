import React, { Component } from "react";
import { Contents } from "./contents";
import { Control } from "./control";
import { UpdateControlElements } from "./control/updateControlElements";
import {Previews} from "./previews";

export class Editor extends Component {
    render() {
        return (
            <section>
                <section>
                    <div className="main_menu">
                        <div className="logo_box">
                            <p className="logo">Y</p>
                        </div>
                        <div className="tools_panel">
                            <h1 className="title">Самая лучшая презентация</h1>
                            <div className="tools">
                                <li><a href="#" className="tools_button">Файл</a></li>
                                <li><a href="#" className="tools_button">Правки</a></li>
                                <li><a href="#" className="tools_button">Вид</a></li>
                                <li><a href="#" className="tools_button">Вставка</a>
                                    <ul className="dropdown">
                                        <Control />
                                    </ul>
                                </li>
                            </div>
                        </div>
                        {/* <div className="edit_panel">
                            <h2 className="edit_title">Параметры элементов</h2>
                            <div className="edit_tools_box">
                                <div className="edit_tools">
                                    <li>
                                        <a href="#edit_params" className="edit_button">Редактировать элемент</a>
                                        <UpdateControlElements/>
                                    </li>
                                     <li>
                                        <a href="#edit_params_box_color" className="edit_button">Цвет</a>
                                        <div id="edit_params_box_color">
                                            <div id="popup_color">
                                                <div className="params_field">
                                                    <h3 className="param_name">Изменить цвет</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <a href="#" className="close">Применить</a>
                                            </div>
                                        </div>
                                    </li> 
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                <section>
                    <div className="working_space">
                        <Previews/>
                        <div className="slide_view">
                            <Contents />
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
