import { useDispatch, useSelector } from "react-redux";
import { updatePresentationName } from "../../../methods/updateContent/updatePresentationName";
import Editor from "../../../model/Editor";
import { RootState } from "../../../store/Reducer";
import { addState } from "../../../store/Reducer/editor";

export const PresentationEl = () => {
    const dispatch = useDispatch();
    const presentEditor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    const updateStateUpdatingPresentation = (presentationName: string) => dispatch(addState(updatePresentationName(presentEditor, presentationName)));

    const handlePresentationNameChange = (event: any) => updateStateUpdatingPresentation(
        event.target.value
    );
    
    return (
        <input value={presentEditor.currentPresentation.name} onInput={handlePresentationNameChange}/>
    );
};