import TextContainer from "../../../model/slide/content/TextContainer";
import {getRichTextStyles} from "./helpers/textContainer";

type TextContainerSvgProps = {
    content: TextContainer
}

export const TextContainerSvg = ({content}: TextContainerSvgProps) => {
    return (
        <foreignObject width={content.width} height={content.height} x={content.position.x} y={content.position.y}
                       style={getRichTextStyles(content)}>
            {content.richText.value}
        </foreignObject>
    )
};