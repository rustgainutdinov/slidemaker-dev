import Presentation from "../../../model/Presentation";
import TextContainer from "../../../model/slide/content/TextContainer";
import { Slide } from "../../../model/slide/Slide";
import generateUuid from "../../generateUuid";
import getDefaultPosition from "./getDefaultPosition";
import { getDefaultRichText } from "./getDefaultTextContainer";

function getDefaultPresentation(): Presentation {
	const uuid = generateUuid();
	const firstContent: TextContainer = {
		position: getDefaultPosition(),
		layer: 1,
		type: 3,
		uuid: uuid,
		richText: getDefaultRichText(),
		width: 100,
		textContainer: undefined
	};
	const slide: Slide = {
		slideId: 1,
		background: "#fff",
		animation: 1,
		contentList: {
			[uuid]: firstContent
		}
	};

	return {
		name: "newPresentation",
		date: new Date(),
		author: "newAuthor",
		sliderList: [slide]
	}
}

export default getDefaultPresentation
