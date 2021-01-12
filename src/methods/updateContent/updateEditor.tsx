import Editor from "../../model/Editor";

export function updateEditor(editor: Editor, newEditor: Editor) {
    if (!editor.currentSlide) return editor;

    return {
        ...newEditor
    };
}