type RectangleProps = {
    x: number,
    y: number,
    width: number,
    height: number,
    background: string,
    borderWidth: number,
    borderColor: string,
    onClick: () => void,
    isCurrent: boolean
}

export const Rectangle = ({x, y, width, height, borderColor, borderWidth, background, onClick}: RectangleProps) => {
    return (
        <rect x={x} y={y} width={width} height={height}
              strokeWidth={borderWidth}
              stroke={borderColor} fill={background} onClick={onClick}/>
    );
};