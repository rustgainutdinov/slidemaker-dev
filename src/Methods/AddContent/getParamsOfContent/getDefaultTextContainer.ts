import RichText from "../../../Model/Slide/Content/components/RichText";
import TextContainer from "../../../Model/Slide/Content/TextContainer";
import getDefaultContent from "./getDefaultContent";
import contentType from "../../../const/ContentType";

function getDefaultTextContainer(): TextContainer {
	return {
		...getDefaultContent(contentType.TextContainer),
		width: 100,
		richText: getDefaultRichText(),
		textContainer: undefined
	};
}

function getDefaultRichText(): RichText {
	return {
		color: '#000000',
		font: 12,
		value: 'new Text'
	}
}

export {
	getDefaultTextContainer,
	getDefaultRichText
}
