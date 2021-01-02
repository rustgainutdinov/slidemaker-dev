import Content from "../../model/slide/content/Content";
import Circle from "../../model/slide/content/shape/Circle";


export function isCircle(content: Content): content is Circle {
	return 'circle' in content;
}
