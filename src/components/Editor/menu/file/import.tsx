import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEditor } from "../../../../methods/updateContent/updateEditor";
import Editor from "../../../../model/Editor";
import { RootState } from "../../../../store/Reducer";
import { addState } from "../../../../store/Reducer/editor";
import './file.css'


export const Import = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );
    const dispatch = useDispatch();
    const updateStateUpdatingEditor = (newEditor: Editor) => dispatch(addState(updateEditor(presentEditor, newEditor)));
    const selectRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (selectRef.current != null) {
            selectRef.current.click();
        }
    }

    const ImportFromJson = (event: any) => {
        let file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.onloadend = () => {
            if (fileReader.result != null) {
                const newEditor = JSON.parse(fileReader.result.toString());

                const editor: Editor = {
                    ...newEditor
                }
                updateStateUpdatingEditor(editor);
            }
        }
        fileReader.readAsBinaryString(file);
    }
    return (
        <>
            <label className="tools_button" onClick={handleFocus}>Импорт</label>
            <input ref={selectRef} type="file" name="photo" id="upload-photo" onInput={ImportFromJson} />
        </>
    )
}