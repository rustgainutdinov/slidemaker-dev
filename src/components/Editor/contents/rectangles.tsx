import Rectangle from "../../../model/slide/content/shape/Rectangle";

type RectangleProps = {
    rectangle: Rectangle,
    onClick: () => void,
    isCurrent: boolean
}

export const RectangleEl = ({ rectangle, onClick }: RectangleProps) => {
    return (
        <rect x={rectangle.position.x} y={rectangle.position.y} width={rectangle.rectangleSize.width}
            height={rectangle.rectangleSize.height}
            strokeWidth={rectangle.border.width}
            stroke={rectangle.border.color} fill={rectangle.background} onClick={onClick} />
    );
};