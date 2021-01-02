import Border from "./components/Border"
import Content from "./Content"


type Shape = Content & {
	border: Border,
	background: string,
}

export default Shape
