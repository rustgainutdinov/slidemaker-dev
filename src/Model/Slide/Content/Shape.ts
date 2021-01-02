import Content from "../../../Model/Slide/Content/Content"
import Border from "../Content/components/Border";

type Shape = Content & {
	border: Border,
	background: string,
}

export default Shape
