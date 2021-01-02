import Editor from "../../Model/Editor";

function changeCurrentContent(editor: Editor, newSlideId: string) {
	return {
		...editor,
		currentContent: editor.currentSlide.contentList[newSlideId]
	}
}

export default changeCurrentContent
