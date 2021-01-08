import createImage from "../../methods/addContent/createImage";
import getDefaultEditor from "../../methods/addContent/getDefaultEditor"
import { getDefaultImage } from "../../methods/addContent/getParamsOfContent/getDefaultImage";
import { isImage } from "../../methods/typeGuardMethods/isImage";
import updateImage from "../../methods/updateContent/updateImage";
import Image from "../../model/slide/content/Image";
import throwNewExeption from "../Exeption";


describe('updateImageTests', () => {
    const editor = getDefaultEditor();
    const image: Image = {
        ...getDefaultImage(),
        url: 'newUrl'

    }
    const editorAfterAddedImage = createImage(editor);
    const newEditor = updateImage(editorAfterAddedImage, image);
    test('updateImageTests', () => {
        if (newEditor.currentContent == null) return

        if (!isImage(newEditor.currentContent)) {
            throwNewExeption();
            return;
        }

        if (newEditor.currentContent == undefined) return

        expect(newEditor.currentContent).toStrictEqual({
            ...getDefaultImage(),
            uuid: newEditor.currentContent.uuid,
            url: 'newUrl'
        });
    });
})