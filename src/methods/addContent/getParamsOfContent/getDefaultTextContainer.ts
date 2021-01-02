import ContentType from "../../../const/ContentType";
import RichText from "../../../model/slide/content/components/RichText";
import TextContainer from "../../../model/slide/content/TextContainer";
import getDefaultContent from "./getDefaultContent";

function getDefaultTextContainer(): TextContainer {
	return {
		...getDefaultContent(ContentType.TextContainer),
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
