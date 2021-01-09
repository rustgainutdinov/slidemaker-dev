import { useSelector } from "react-redux";
import { isTextContainer } from "../../../methods/typeGuardMethods/isTextContainer";
import Editor from "../../../model/Editor";
import Content from "../../../model/slide/content/Content";
import { RootState } from "../../../store/Reducer";
import { TextFontFamily } from "./textFontFamilyControl";
import { TextSize } from "./textSizeControl";
import { TextStyle } from "./textStyleControl";


export const TextTools: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );

    const getUpdateContentControlElements = (presentEditor: Editor) => {
        if (!presentEditor.currentContent) return;
        let content: Content = presentEditor.currentContent;
        if (isTextContainer(content)) {
            return (
                <>
                    <TextStyle presentEditor={presentEditor} currentTextContainer={content} />
                    <TextSize presentEditor={presentEditor} currentTextContainer={content} />
                    <TextFontFamily presentEditor={presentEditor} currentTextContainer={content} />
                </>
            )
        }
    }

    return (
        <div className="text_tools">
            {getUpdateContentControlElements(presentEditor)}
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
    )
}