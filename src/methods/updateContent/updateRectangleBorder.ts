import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";

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
