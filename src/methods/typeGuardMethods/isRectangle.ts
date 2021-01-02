import Content from "../../model/slide/content/Content";
import Rectangle from "../../model/slide/content/shape/Rectangle";

export function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}
