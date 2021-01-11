import Content from "../../model/slide/content/Content";
import TextContainer from "../../model/slide/content/TextContainer";

export function isTextContainer(content: Content): content is TextContainer {
    return 'richText' in content;
}
