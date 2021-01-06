import TextContainer from "../../../model/slide/content/TextContainer";

type TextContainerProps = {
    textContainer: TextContainer,
    onClick: () => void,
    isCurrent: boolean
}

export const TextContainerEl = ({textContainer, onClick}: TextContainerProps) => {
    const textStyle = {
        fontFamily: textContainer.richText.fontFamily,
        fontWeight: textContainer.richText.fontWeight,
        fontStyle: textContainer.richText.fontStyle,
        fontSize: textContainer.richText.fontSize
    };
    return (
        <text x={textContainer.position.x} y={textContainer.position.y} fill={textContainer.richText.color}
              onClick={onClick}><tspan font-family={textStyle.fontFamily} font-weight={textStyle.fontWeight} font-style={textStyle.fontStyle} font-size={textStyle.fontSize}>{textContainer.richText.value}</tspan></text>
    );
};