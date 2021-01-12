import Editor from "../../model/Editor";
import {updateEditorContent} from "../core/updateEditorContent";
import TextContainer from "../../model/slide/content/TextContainer";

function updateTextContainer(editor: Editor, newTextContainer: TextContainer): Editor {
    return updateEditorContent(editor, newTextContainer);
}

export default updateTextContainer