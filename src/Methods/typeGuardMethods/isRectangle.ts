import Content from "../../Model/Slide/Content/Content";
import Rectangle from "../../Model/Slide/Content/shape/Rectangle";

export function isRectangle(content: Content): content is Rectangle {
    return 'rectangle' in content;
}
