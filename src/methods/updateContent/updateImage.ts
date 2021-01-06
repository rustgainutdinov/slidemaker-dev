import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import { isImage } from "../typeGuardMethods/isImage";
import {updateContent} from "./updateContent";

function updateImage(editor: Editor, newImage: Content): Editor {
    if (!editor.currentContent || !isImage(editor.currentContent)) return editor;
    return updateContent(editor, newImage);
}

export default updateImage