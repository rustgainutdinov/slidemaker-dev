import RichText from "./components/RichText"
import Content from "./Content"

type TextContainer = Content & {
	width: number,
	richText: RichText,
	textContainer: undefined
}

export default TextContainer
