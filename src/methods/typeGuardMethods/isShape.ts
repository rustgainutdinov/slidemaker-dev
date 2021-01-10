import Content from "../../model/slide/content/Content";
import Shape from "../../model/slide/content/Shape";

export function isShape(content: Content): content is Shape {
    return 'background' in content;
}
