import Editor from "../../Model/Editor";
import Presentation from "../../Model/Presentation";
import getDefaultPresentation from "./getParamsOfContent/getDefaultPresentation";

function createPresentation(editor: Editor): Editor {
	const presentation: Presentation = {
		...getDefaultPresentation()
	};
	return {
		...editor,
		currentPresentation: presentation,
	}
}

export default createPresentation
