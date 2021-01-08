import { useDispatch } from "react-redux";
import { deleteEditorContent } from "../../../../methods/core/deleteEditorContent";
import Editor from "../../../../model/Editor";
import Content from "../../../../model/slide/content/Content";
import { addState } from "../../../../store/Reducer/editor";

type deletingProps = {
    presentEditor: Editor, currentContent: Content | null
}

export const DeleteElement = ({ presentEditor, currentContent }: deletingProps) => {
    const dispatch = useDispatch();
    const updateStateDeletingElement = (content: Content | null) => dispatch(addState(deleteEditorContent(presentEditor, content)));

    const handleDeletingContent = () => updateStateDeletingElement(currentContent);

    return (
        <button className="tools_button" onClick={handleDeletingContent}> Удалить</button>
    );
};