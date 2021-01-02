type CircleProps = {
    x: number,
    y: number,
    radius: number,
    background: string,
    borderWidth: number,
    borderColor: string,
    onClick: () => void,
    isCurrent: boolean
}

export const Circle = ({x, y, radius, borderColor, borderWidth, background, onClick}: CircleProps) => {
    return (
        <circle cx={x} cy={y} r={radius}
                strokeWidth={borderWidth}
                stroke={borderColor} fill={background} onClick={onClick}/>
    );
};
