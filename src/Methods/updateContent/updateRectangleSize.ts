import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import Rectangle from "../../Model/Slide/Content/shape/Rectangle";

function isRectangle(content: Content): content is Rectangle {
	return 'rectangle' in content;
}

function updateRectangleSiz(editor: Editor, newWidth: number, newHheight: number) {
	if (!isRectangle(editor.currentContent)) {
		return
	}
	const rectangle: Rectangle = {
		...editor.currentContent,
		rectangleSize: {
			width: newWidth,
			height: newHheight
		}
	};
	return {
		...editor,
		currentContent: {
			...rectangle
		}
	};
}

export default updateRectangleSiz
