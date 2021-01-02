import Content from "../Content/Content"
import RichText from "../Content/components/RichText";

type TextContainer = Content & {
	width: number,
	richText: RichText,
	textContainer: undefined
}

export default TextContainer
