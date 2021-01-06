import Content from "../../model/slide/content/Content";
import Image from "../../model/slide/content/Image";

export function isImage(content: Content): content is Image {
    return 'image' in content;
}
