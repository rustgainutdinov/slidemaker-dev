import Circle from "../../../model/slide/content/shape/Circle";

type CircleProps = {
    circle: Circle,
    onClick: () => void,
    isCurrent: boolean
}

export const CircleEl = ({circle, onClick}: CircleProps) => {
    return (
        <circle cx={circle.position.x} cy={circle.position.y} r={circle.radius}
                strokeWidth={circle.border.width}
                stroke={circle.border.color} fill={circle.background} onClick={onClick}/>
    );
};
