import Editor from "../../model/Editor";
import Content from "../../model/slide/content/Content";
import TextContainer from "../../model/slide/content/TextContainer";

function isTextContainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}

function updateTextContainer(editor: Editor, newTextContainer: Content): Editor {
    if (!isTextContainer(editor.currentContent)) {
        return editor
    }
    return {
        ...editor,
        currentContent: {
            ...newTextContainer
        },
        currentSlide: {
            ...editor.currentSlide,
            contentList: {
                ...editor.currentSlide.contentList,
                [newTextContainer.uuid]: newTextContainer
            }
        }
    };
}

export default updateTextContainer