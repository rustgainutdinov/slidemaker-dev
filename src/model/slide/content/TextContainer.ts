import RichText from "./components/RichText"
import Content from "./Content"

type TextContainer = Content & {
	width: number,
	height: number,
	richText: RichText,
	textContainer: undefined
}

export default TextContainer
