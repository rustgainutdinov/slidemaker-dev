import Content from "./Content";
import Point from "./Point";
import RectangleSize from "./RectangleSize";

type Image = Content & {
    size: RectangleSize;
    url: string;
    image: undefined;
}

export default Image