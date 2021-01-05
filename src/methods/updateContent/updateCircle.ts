import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import {isCircle} from "../typeGuardMethods/isCircle";
import {updateContent} from "./updateContent";


function updateCircle(editor: Editor, newCircle: Content): Editor {
    if (!isCircle(editor.currentContent)) {
        return editor
    }
    return updateContent(editor, newCircle);
}

export default updateCircle