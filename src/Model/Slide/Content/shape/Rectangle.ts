import Point from "../../../../Model/Slide/Content/Point"
import RectangleSize from "../../../../Model/Slide/Content/RectangleSize"
import Shape from "../../../../Model/Slide/Content//Shape"

type Rectangle = Shape & {
	bottomRightCoordinate: Point;
	rectangleSize: RectangleSize;
	rectangle: undefined
}

export default Rectangle