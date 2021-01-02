import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import TextContainer from "../../Model/Slide/Content/TextContainer";

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
