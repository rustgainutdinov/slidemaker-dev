import ContentType from "../../const/ContentType";
import Editor from "../../Model/Editor";
import Circle from "../../Model/Slide/Content/shape/Circle";
import generateUuid from "../generateUuid";
import getDefaultShape from "./getParamsOfContent/getDefaultShape";

function createCircle(editor: Editor): Editor {
	const circle: Circle = {
		...getDefaultShape(ContentType.Circle),
		radius: 100,
		circle: undefined
	};
	const uuid = generateUuid();
	return {
		...editor,
		currentSlide: {
			...editor.currentSlide,
			contentList: {
				...editor.currentSlide.contentList,
				[uuid]: circle
			}
		},
		currentContent: circle
	}
}

export default createCircle
