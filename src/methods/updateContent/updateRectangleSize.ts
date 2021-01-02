import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";

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
