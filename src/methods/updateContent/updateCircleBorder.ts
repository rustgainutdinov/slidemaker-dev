import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import Content from "../../model/slide/content/Content";

function isCircle(content: Content): content is Circle {
	return 'circle' in content;
}

function updateCircleBorder(editor: Editor, borderWidth: number, borderColor: string, borderType: number) {
	if (!isCircle(editor.currentContent)) {
		return
	}
	const circle: Circle = {
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
			...circle
		}
	};
}

export default updateCircleBorder
