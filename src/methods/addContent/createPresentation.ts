import Editor from "../../model/Editor";
import Presentation from "../../model/Presentation";
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
