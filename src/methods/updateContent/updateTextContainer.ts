import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import {isTextContainer} from "../typeGuardMethods/isTextContainer";
import {updateContent} from "./updateContent";

function updateTextContainer(editor: Editor, newTextContainer: Content): Editor {
    if (!editor.currentContent || !isTextContainer(editor.currentContent)) return editor;
    return updateContent(editor, newTextContainer);
}

export default updateTextContainer