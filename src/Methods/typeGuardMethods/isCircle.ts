import Content from "../../Model/Slide/Content/Content";
import Circle from "../../Model/Slide/Content/shape/Circle";

export function isCircle(content: Content): content is Circle {
	return 'circle' in content;
}
