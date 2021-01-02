import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/shape/Circle";
import {isCircle} from "../typeGuardMethods/isCircle";

export function updateCircleRadius(editor: Editor, circleRadius: number) {
	if (!isCircle(editor.currentContent)) {
		return
	}
	const circle: Circle = {
		...editor.currentContent,
		radius: circleRadius
	};
	return {
		...editor,
		currentContent: {
			...circle
		}
	};
}
