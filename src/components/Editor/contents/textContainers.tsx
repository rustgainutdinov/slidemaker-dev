import TextContainer from "../../../model/slide/content/TextContainer";

type TextContainerProps = {
    textContainer: TextContainer,
    onClick: () => void,
    isCurrent: boolean
}

export const TextContainer = ({textContainer, onClick}: TextContainerProps) => {
    const textStyle = {
        fontFamily: textContainer.richText.fontFamily,
        fontWeight: textContainer.richText.fontStyle,
        fontStyle: textContainer.richText.fontStyle,
        textDecoration: textContainer.richText.textDecoration,
        fontSize: textContainer.richText.fontStyle
    };
    return (
        <text x={textContainer.position.x} y={textContainer.position.y} fill={textContainer.richText.color}
              onClick={onClick}><tspan font-family={textStyle.fontFamily}>{textContainer.richText.value}</tspan></text>
    );
};