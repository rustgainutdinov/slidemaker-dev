import Content from "../../Model/Slide/Content/Content";
import TextContainer from "../../Model/Slide/Content/TextContainer";

export function isTextContainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}
