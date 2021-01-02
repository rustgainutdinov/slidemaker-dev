import ContentType from "../../const/ContentType";
import createCircle from "../../methods/addContent/createCircle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import Content from "../../model/slide/content/Content";
import Circle from "../../model/slide/content/shape/Circle";
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
