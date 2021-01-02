import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import TextContainer from "../../model/slide/content/TextContainer";

function isTextCntainer(content: Content): content is TextContainer {
	return 'textContainer' in content;
}

function updateTextContainerWidth(editor: Editor, newWidth: number) {
	if (!isTextCntainer(editor.currentContent)) {
		return
	}
	const richText: TextContainer = {
		...editor.currentContent,
		width: newWidth
	};
	return {
		...editor,
		currentContent: {
			...richText
		}
	};
}

export default updateTextContainerWidth
