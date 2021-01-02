import Point from "../Point"
import RectangleSize from "../RectangleSize"
import Shape from "../Shape"

type Rectangle = Shape & {
	bottomRightCoordinate: Point;
	rectangleSize: RectangleSize;
	rectangle: undefined
}

export default Rectangle