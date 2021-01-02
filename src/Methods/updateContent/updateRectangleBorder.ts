import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import Rectangle from "../../Model/Slide/Content/shape/Rectangle";

function isRectangle(content: Content): content is Rectangle {
	return 'rectangle' in content;
}

function updateRectangleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!isRectangle(editor.currentContent)) {
		return
	}
	const rectangle: Rectangle = {
		...editor.currentContent,
		border: {
			width: borderWidth,
			color: borderColor,
			type: borderType
		}
	};
	return {
		...editor,
		currentContent: {
			...rectangle
		}
	};
}

export default updateRectangleBorder
