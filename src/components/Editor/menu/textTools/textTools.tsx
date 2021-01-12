import { useSelector } from "react-redux";
import { TextFontFamily } from "./textFontFamilyControl";
import { TextSize } from "./textSizeControl";
import { TextStyle } from "./textStyleControl";
import { ColorEl } from "./textColor";
import { isTextContainer } from "../../../../methods/typeGuardMethods/isTextContainer";
import Editor from "../../../../model/Editor";
import Content from "../../../../model/slide/content/Content";
import { RootState } from "../../../../store/Reducer";
import './text.css'

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
                    <ColorEl presentEditor={presentEditor} currentTextContainer={content} />
                </>
            )
        }
    }

    return (
        <>
            <div className="text_tools">
                {getUpdateContentControlElements(presentEditor)}
            </div>
            <div>
                
            </div>
        </>
    )
}