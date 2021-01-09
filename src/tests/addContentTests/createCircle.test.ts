import createCircle from "../../methods/addContent/createCircle";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor";
import { getDefaultCircle } from "../../methods/addContent/getParamsOfContent/getDefaultCircle";
import { isCircle } from "../../methods/typeGuardMethods/isCircle";
import Editor from "../../model/Editor";
import throwNewExeption from "../Exeption";

const editor: Editor = getDefaultEditor();

describe('createCircleTest', () => {
	if (editor.currentContent == null) {
		return
	};

	test('createCircleTest', () => {
		const newEditor = createCircle(editor);
		if (newEditor.currentContent == null) return

		if (!isCircle(newEditor.currentContent)) {
			throwNewExeption();
			return;
		}

		if (editor.currentContent == undefined) return

		expect(newEditor.currentContent).toStrictEqual({
			...getDefaultCircle(),
			uuid: newEditor.currentContent.uuid,
			layer: editor.currentContent?.layer + 1
		})
	});

});
