import Editor from "../../model/Editor";
import {updateEditorContent} from "../core/updateEditorContent";
import {getDefaultRectangle} from "./getParamsOfContent/getDefaultRectangle";
import {getCurrentMaxLayer} from "../core/getCurrentMaxLayer";

function createRectangle(editor: Editor): Editor {
    return updateEditorContent(editor, {
        ...getDefaultRectangle(),
        layer: getCurrentMaxLayer(editor) + 1,
    });
}

export default createRectangle
