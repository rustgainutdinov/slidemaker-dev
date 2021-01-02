import Content from "../../../Model/Slide/Content/Content"
import Image from "./components/Image";

type PictureContainer = Content & {
	width: number,
	height: number,
	image: Image
}

export default PictureContainer
