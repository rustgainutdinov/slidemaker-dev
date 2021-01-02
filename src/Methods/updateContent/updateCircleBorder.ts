import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/shape/Circle";
import Content from "../../Model/Slide/Content/Content";

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
