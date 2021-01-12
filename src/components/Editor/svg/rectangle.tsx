import Rectangle from "../../../model/slide/content/shape/Rectangle";

type RectangleSvgProps = {
    content: Rectangle
}

export const RectangleSvg = ({content}: RectangleSvgProps) => {
    return (
        <rect x={content.position.x} y={content.position.y} width={content.rectangleSize.width}
              height={content.rectangleSize.height}
              strokeWidth={content.border.width}
              stroke={content.border.color} fill={content.background}/>
    )
};