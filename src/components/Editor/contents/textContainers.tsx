type TextContainerProps = {
    x: number,
    y: number,
    color: string,
    value: string,
    onClick: () => void,
    isCurrent: boolean
}

export const TextContainer = ({ x, y, color, value, onClick }: TextContainerProps) => {
    return (
        <text x={x} y={y} fill={color}
            onClick={onClick} >{value}</text>
    );
};