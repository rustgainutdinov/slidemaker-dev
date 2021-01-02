import ContentType from "../../const/ContentType";
import createCircle from "../../Methods/AddContent/createCircle";
import Circle from "../../Model/Slide/Content/shape/Circle";
import Content from "../../Model/Slide/Content/Content";
import getDefaultEditor from "../../Methods/AddContent/getDefaultEditor";
import throwNewExeption from "../Exeption";

function isCircle(content: Content): content is Circle {
	return 'circle' in content;
}
const editor = getDefaultEditor()

describe('createCircleTest', () => {
	const newEditor = createCircle(editor);

	test('addContentToEditor', () => {

		expect(newEditor.currentContent.type).toBe(ContentType.Circle);
		expect(checkInstance()).toBe(true)

		if (!isCircle(newEditor.currentContent)) {
			throwNewExeption();
			return;
		}

		expect(newEditor.currentContent.radius).toBe(100);
	});

	function checkInstance() {
		if (isCircle(newEditor.currentContent)) {
			return true;
		} else {
			return false
		}
	}
});
