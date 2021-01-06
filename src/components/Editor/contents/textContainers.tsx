import TextContainer from "../../../model/slide/content/TextContainer";

type TextContainerProps = {
    textContainer: TextContainer,
    onClick: () => void,
    isCurrent: boolean
}

export const TextContainerEl = ({textContainer, onClick}: TextContainerProps) => {
    return (
        <text x={textContainer.position.x} y={textContainer.position.y} fill={textContainer.richText.color}
              onClick={onClick}>{textContainer.richText.value}</text>
    );
};