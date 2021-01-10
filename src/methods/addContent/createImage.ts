import Editor from "../../model/Editor";
import {updateEditorContent} from "../core/updateEditorContent";
import {getDefaultImage} from "./getParamsOfContent/getDefaultImage";
import {getCurrentMaxLayer} from "../core/getCurrentMaxLayer";

function createImage(editor: Editor): Editor {
    return updateEditorContent(editor, {
        ...getDefaultImage(),
        layer: getCurrentMaxLayer(editor) + 1,
    });
}

export default createImage