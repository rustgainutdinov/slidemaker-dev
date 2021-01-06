import Content from "./Content";
import RectangleSize from "./RectangleSize";

type Image = Content & {
    size: RectangleSize;
    url: string;
    image: undefined;
}

export default Image