import Content from "./Content"
import Image from "./components/Image";

type PictureContainer = Content & {
	width: number,
	height: number,
	image: Image
}

export default PictureContainer
