import Editor from "../../model/Editor";

function changeCurrentContent(editor: Editor, newContentUuid: string) {
	return {
		...editor,
		currentContent: editor.currentSlide.contentList[newContentUuid]
	}
}

export default changeCurrentContent
