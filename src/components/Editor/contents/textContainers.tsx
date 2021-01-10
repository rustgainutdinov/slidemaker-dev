import TextContainer from "../../../model/slide/content/TextContainer";

type TextContainerProps = {
    textContainer: TextContainer,
    onClick: () => void,
    isCurrent: boolean
}

export const TextContainerEl = ({ textContainer, onClick }: TextContainerProps) => {
    const textStyle = {
        fontFamily: textContainer.richText.fontFamily,
        fontWeight: textContainer.richText.fontWeight,
        fontStyle: textContainer.richText.fontStyle,
        fontSize: textContainer.richText.fontSize,
        textDecoration: textContainer.richText.textDecoration
    };
    return (
        <text x={textContainer.position.x} y={textContainer.position.y} fill={textContainer.richText.color}
            onClick={onClick}><tspan fontFamily={textStyle.fontFamily} fontWeight={textStyle.fontWeight}
                fontStyle={textStyle.fontStyle} fontSize={textStyle.fontSize} textDecoration={textStyle.textDecoration}>
                {textContainer.richText.value}
            </tspan>
        </text>
    );
};