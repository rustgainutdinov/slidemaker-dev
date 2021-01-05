import {Component} from "react";
import {Contents} from "./contents";
import {CreateControlElements} from "./control/createControlElements";
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
                                        <CreateControlElements/>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        <div className="edit_panel">
                            <h2 className="edit_title">Параметры элементов</h2>
                            <div className="edit_tools_box">
                                <div className="edit_tools">
                                    <li>
                                        <a href="#edit_params_box_rect" className="edit_button">Квадрат</a>
                                        <div id="edit_params_box_rect">
                                            <div id="popup_rect">
                                                <div className="params_field">
                                                    <h3 className="param_name">Ширина</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <div className="params_field">
                                                    <h3 className="param_name">Высота</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <a href="#" className="close">Применить</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#edit_params_box_circle" className="edit_button">Круг</a>
                                        <div id="edit_params_box_circle">
                                            <div id="popup_circle">
                                                <div className="params_field">
                                                    <h3 className="param_name">Радиус</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <a href="#" className="close">Применить</a>
                                            </div>
                                        </div>
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
                                <div className="edit_tools">
                                    <li>
                                        <a href="#edit_params_box_border" className="edit_button">Бордер</a>
                                        <div id="edit_params_box_border">
                                            <div id="popup_border">
                                                <div className="params_field">
                                                    <h3 className="param_name">Ширина</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <div className="params_field">
                                                    <h3 className="param_name">Цвет</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <a href="#" className="close">Применить</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#edit_params_box_text" className="edit_button">Текст</a>
                                        <div id="edit_params_box_text">
                                            <div id="popup_text">
                                                <div className="params_field">
                                                    <h3 className="param_name">Цвет</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <div className="params_field">
                                                    <h3 className="param_name">Размер</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <div className="params_field">
                                                    <h3 className="param_name">Содержание</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <div className="params_field">
                                                    <h3 className="param_name">Ширина</h3>
                                                    <input type="text" className="param_input_label"/>
                                                </div>
                                                <a href="#" className="close">Применить</a>

                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="working_space">
                        <Previews/>
                        <div className="slide_view">
                            <Contents/>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
