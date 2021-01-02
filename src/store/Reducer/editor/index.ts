import Editor from "../../../model/Editor";
import getDefaultEditor from "../../../methods/addContent/getDefaultEditor";

export interface EditorState {
	past: Editor[],
	present: Editor,
	future: Editor[]
}

export const STATE_ADDED = 'STATE_ADDED';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

interface AddStateAction {
	type: typeof STATE_ADDED
	editor: Editor
}

interface UndoStateAction {
	type: typeof UNDO
	editor: Editor
}

interface RedoStateAction {
	type: typeof REDO
	editor: Editor
}

export type StateActions = AddStateAction | UndoStateAction | RedoStateAction

export function addState(editor: Editor): AddStateAction {
	return {
		type: STATE_ADDED,
		editor
	}
}

export function undoState(editor: Editor): UndoStateAction {
	return {
		type: UNDO,
		editor
	}
}

export function redoState(editor: Editor): RedoStateAction {
	return {
		type: REDO,
		editor
	}
}

const initialState: EditorState = {
	past: [],
	present: getDefaultEditor(),
	future: []
};

export function editorReducer(
	state = initialState,
	action: StateActions
): EditorState {
	switch (action.type) {
		case STATE_ADDED:
			return {
				past: [...state.past, state.present],
				present: action.editor,
				future: []
			};
		case UNDO:
			let past: Editor[] = [];
			state.past.forEach((value, i) => (i !== 0) ? past.push(value) : undefined);
			return {
				past,
				present: state.past[0],
				future: [state.present, ...state.future]
			};
		case REDO:
			let future: Editor[] = [];
			state.future.forEach((value, i) => (i !== 0) ? future.push(value) : undefined);
			return {
				past: [state.present, ...state.past],
				present: state.future[0],
				future
			};
	}
	return state;
}
