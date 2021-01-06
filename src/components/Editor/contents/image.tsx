import Image from "../../../model/slide/content/Image";

type ImageProps = {
    image: Image,
    onClick: () => void,
    isCurrent: boolean
}

export const ImageEl = ({image, onClick}: ImageProps) => {
    return (
        <image x={image.position.x} y={image.position.y} width={image.size.width} height={image.size.height}
            href={image.url} onClick={onClick}/>
    );
};