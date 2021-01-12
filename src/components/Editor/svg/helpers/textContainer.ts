import TextContainer from "../../../../model/slide/content/TextContainer";

export const getRichTextStyles = (textContainer: TextContainer) => {
    return {
        fontFamily: textContainer.richText.fontFamily,
        fontWeight: textContainer.richText.fontWeight,
        fontStyle: textContainer.richText.fontStyle,
        fontSize: textContainer.richText.fontSize,
        textDecoration: textContainer.richText.textDecoration,
        color: textContainer.richText.color
    };
};