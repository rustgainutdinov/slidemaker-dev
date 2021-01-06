import RectangleSize from "../RectangleSize"
import Shape from "../Shape"

type Rectangle = Shape & {
    rectangleSize: RectangleSize;
    rectangle: undefined
}

export default Rectangle