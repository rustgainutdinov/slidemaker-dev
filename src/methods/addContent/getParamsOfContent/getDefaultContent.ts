import Content from "../../../model/slide/content/Content"
import getDefaultPosition from "./getDefaultPosition"
import generateUuid from "../../generateUuid";

function getDefaultContent(contentType: number): Content {
	return {
		position: getDefaultPosition(),
		layer: 0,
		type: contentType,
		uuid: generateUuid()
	}
}

export default getDefaultContent
