type ImageProps = {
    x: number,
    y: number,
    width: number,
    height: number,
    url: string,
    onClick: () => void,
    isCurrent: boolean
}

export const Image = ({x, y, width, height, url, onClick}: ImageProps) => {
    return (
        <image x={x} y={y} width={width} height={height}
            href={url} onClick={onClick}/>
    );
};