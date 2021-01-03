import Shape from "../../../model/slide/content/Shape";
import getDefaultBorder from "./getDefaultBorder";
import getDefaultContent from "./getDefaultContent";

function getDefaultShape(contentType: number): Shape {
	return {
		...getDefaultContent(contentType),
		border: getDefaultBorder(),
		background: '#000000',
	};
}

export default getDefaultShape
