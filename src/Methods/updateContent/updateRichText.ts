import Editor from "../../Model/Editor";
import Content from "../../Model/Slide/Content/Content";
import TextContainer from "../../Model/Slide/Content/TextContainer";

function isTextCntainer(content: Content): content is TextContainer {
	return 'textContainer' in content;
}

function updateRichTextColor(editor: Editor, newColor: string) {
	if (!isTextCntainer(editor.currentContent)) {
		return
	}
	const richText: TextContainer = {
		...editor.currentContent,
		richText: {
			...editor.currentContent.richText,
			color: newColor
		}
	};
	return {
		...editor,
		currentContent: {
			...richText
		}
	};
}

function updateRichTextFont(editor: Editor, newFont: number) {
	if (!isTextCntainer(editor.currentContent)) {
		return
	}
	const richText: TextContainer = {
		...editor.currentContent,
		richText: {
			...editor.currentContent.richText,
			font: newFont
		}
	};
	return {
		...editor,
		currentContent: {
			...richText
		}
	};
}

function updateRichTextValue(editor: Editor, newValue: string) {
	if (!isTextCntainer(editor.currentContent)) {
		return
	}
	const richText: TextContainer = {
		...editor.currentContent,
		richText: {
			...editor.currentContent.richText,
			value: newValue
		}
	};
	return {
		...editor,
		currentContent: {
			...richText
		}
	};
}

export {
	updateRichTextValue,
	updateRichTextFont,
	updateRichTextColor
}
