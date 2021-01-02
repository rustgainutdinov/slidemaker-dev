import ContentType from "../../const/ContentType";
import getDefaultEditor from "../../Methods/AddContent/getDefaultEditor";
import getDefaultShape from "../../Methods/AddContent/getParamsOfContent/getDefaultShape";
import { getDefaultTextContainer } from "../../Methods/AddContent/getParamsOfContent/getDefaultTextContainer";
import { updateRichTextColor, updateRichTextFont, updateRichTextValue } from "../../Methods/updateContent/updateRichText";
import Content from "../../Model/Slide/Content/Content"
import TextContainer from "../../Model/Slide/Content/TextContainer";
import throwNewExeption from "../Exeption";

function isTextCntainer(content: Content): content is TextContainer {
    return 'textContainer' in content;
}
function checkInstance(content: Content) {
    if (isTextCntainer(content)) {
        return true;
    } else {
        return false
    }
}
const editor = getDefaultEditor();
const textContainer: TextContainer = {
    ...getDefaultShape(ContentType.TextContainer),
    ...getDefaultTextContainer()
};

editor.currentContent = textContainer;

describe('updateRichTextColorTest', () => {
    test('checkNewRichTextColor', () => {
        const newEditor = updateRichTextColor(editor, "red");
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        };
        if (!isTextCntainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        };

        expect(newEditor.currentContent.richText.color).toBe("red");
        expect(checkInstance(newEditor.currentContent)).toBe(true);
    })
});

describe('updateRichTextFontTest', () => {
    test('checkNewRichTextFont', () => {
        const newEditor = updateRichTextFont(editor, 20);
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        };
        if (!isTextCntainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        };

        expect(newEditor.currentContent.richText.font).toBe(20);
        expect(checkInstance(newEditor.currentContent)).toBe(true);
    });
});

describe('updateRichTextValueTest', () => {
    test('checkNewRichTextValue', () => {
        const newEditor = updateRichTextValue(editor, "hello");
        if (newEditor?.currentContent == undefined) {
            throwNewExeption();
            return
        };
        if (!isTextCntainer(newEditor.currentContent)) {
            throwNewExeption();
            return;
        };

        expect(newEditor.currentContent.richText.value).toBe("hello");
        expect(checkInstance(newEditor.currentContent)).toBe(true);
    });
});
