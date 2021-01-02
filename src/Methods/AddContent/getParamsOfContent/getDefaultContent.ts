import Content from "../../../Model/Slide/Content/Content";
import getDefaultPosition from "./getDefaultPosition";

function getDefaultContent(contentType: number): Content {
	return {
		position: getDefaultPosition(),
		layer: 0,
		type: contentType,
		uuid: ""
	}
}

export default getDefaultContent
