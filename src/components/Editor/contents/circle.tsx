type CircleProps = {
    x: number,
    y: number,
    radius: number,
    background: string,
    borderWidth: number,
    borderColor: string
}

export const Circle = ({x, y, radius, borderColor, borderWidth, background}: CircleProps) => {
    return (
        <circle cx={x} cy={y} r={radius}
                strokeWidth={borderWidth}
                stroke={borderColor} fill={background}/>
    );
};
