import Editor from "../../model/Editor";

export function updatePresentationName(editor: Editor, newPresentationName: string): Editor {
    return { 
        ...editor,
        currentPresentation: {
            ...editor.currentPresentation,
            name: newPresentationName
        }
    }
}