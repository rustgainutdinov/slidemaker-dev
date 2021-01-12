import Circle from "../../../model/slide/content/shape/Circle";

type CircleSvgProps = {
    content: Circle
}

export const CircleSvg = ({content}: CircleSvgProps) => {
    return (
        <circle cx={content.position.x} cy={content.position.y} r={content.radius}
                strokeWidth={content.border.width}
                stroke={content.border.color} fill={content.background}/>
    )
};