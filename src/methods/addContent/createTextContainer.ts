import Editor from "../../model/Editor";
import {getDefaultTextContainer} from "./getParamsOfContent/getDefaultTextContainer";
import {updateEditorContent} from "../core/updateEditorContent";
import {getCurrentMaxLayer} from "../core/getCurrentMaxLayer";

function createTextContainer(editor: Editor): Editor {
    return updateEditorContent(editor, {
        ...getDefaultTextContainer(),
        layer: getCurrentMaxLayer(editor) + 1,
    });
}

export default createTextContainer;
