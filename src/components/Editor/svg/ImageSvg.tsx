import Image from "../../../model/slide/content/Image";

type ImageSvgProps = {
    content: Image
}

export const ImageSvg = ({content}: ImageSvgProps) => {
    return (
        <image x={content.position.x} y={content.position.y} width={content.size.width} height={content.size.height}
               href={content.url}/>
    )
};