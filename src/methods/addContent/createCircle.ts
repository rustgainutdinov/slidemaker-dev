import Editor from "../../model/Editor";
import {getDefaultCircle} from "./getParamsOfContent/getDefaultCircle";
import {updateEditorContent} from "../core/updateEditorContent";
import {getCurrentMaxLayer} from "../core/getCurrentMaxLayer";

function createCircle(editor: Editor): Editor {
    return updateEditorContent(editor, {
        ...getDefaultCircle(),
        layer: getCurrentMaxLayer(editor) + 1
    });
}

export default createCircle
