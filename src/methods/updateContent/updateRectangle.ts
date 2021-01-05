import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import {isRectangle} from "../typeGuardMethods/isRectangle";
import {updateContent} from "./updateContent";

function updateRectangle(editor: Editor, newRectangle: Content): Editor {
    if (!isRectangle(editor.currentContent)) {
        return editor
    }
    return updateContent(editor, newRectangle);
}

export default updateRectangle