import Editor from "../../../model/Editor";
import getDefaultEditor from "../../../methods/addContent/getDefaultEditor";
import Point from "../../../model/slide/content/Point";
import {updateEditorContent} from "../../../methods/core/updateEditorContent";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import Circle from "../../../model/slide/content/shape/Circle";

export interface EditorState {
    past: Editor[],
    present: Editor,
    future: Editor[]
}

export const STATE_ADDED = 'STATE_ADDED';
export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const CONTENT_POSITION_UPDATED = 'CONTENT_POSITION_UPDATED';
export const CIRCLE_SIZE_UPDATED = 'CIRCLE_SIZE_UPDATED';


interface AddStateAction {
    type: typeof STATE_ADDED
    editor: Editor
}

interface UndoStateAction {
    type: typeof UNDO
}

interface RedoStateAction {
    type: typeof REDO
}

interface UpdateContentPositionStateAction {
    type: typeof CONTENT_POSITION_UPDATED
    position: Point
}

interface UpdateCircleSizeStateAction {
    type: typeof CIRCLE_SIZE_UPDATED
    radiusOffset: number
}

export type StateActions =
    AddStateAction
    | UndoStateAction
    | RedoStateAction
    | UpdateContentPositionStateAction
    | UpdateCircleSizeStateAction

export function addState(editor: Editor): AddStateAction {
    return {
        type: STATE_ADDED,
        editor
    }
}

export function undoState(): UndoStateAction {
    return {
        type: UNDO
    }
}

export function redoState(): RedoStateAction {
    return {
        type: REDO
    }
}

export function updateContentPosition(position: Point): UpdateContentPositionStateAction {
    return {
        type: CONTENT_POSITION_UPDATED,
        position
    }
}

export function updateCircleSize(radiusOffset: number): UpdateCircleSizeStateAction {
    return {
        type: CIRCLE_SIZE_UPDATED,
        radiusOffset,
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
                past: [state.present, ...state.past],
                present: action.editor,
                future: []
            };
        case CONTENT_POSITION_UPDATED:
            if (!state.present.currentContent) return state;
            return {
                past: [state.present, ...state.past],
                present: updateEditorContent(state.present, {
                    ...state.present.currentContent,
                    position: action.position
                }),
                future: []
            };
        case CIRCLE_SIZE_UPDATED:
            if (!state.present.currentContent || !isCircle(state.present.currentContent)) return state;
            let newCircle: Circle = {
                ...state.present.currentContent,
                radius: state.present.currentContent.radius + action.radiusOffset
            };
            return {
                past: [state.present, ...state.past],
                present: updateEditorContent(state.present, newCircle),
                future: []
            };
        case UNDO:
            if (state.past.length < 1) {
                return state;
            }
            let past: Editor[] = [];
            state.past.forEach((value, i) => (i !== 0) ? past.push(value) : undefined);
            return {
                past,
                present: state.past[0],
                future: [state.present, ...state.future]
            };
        case REDO:
            if (state.future.length < 1) {
                return state;
            }
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
