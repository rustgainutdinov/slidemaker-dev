import TextContainer from "../../../../model/slide/content/TextContainer";
import Editor from "../../../../model/Editor";
import {ElCoordinates, GetHtmlElCoordinates} from "../../control/draggable/helpers";

export type TextContainerProps = {
    textContainer: TextContainer,
    onCurrentElementChanged: () => void,
    isCurrent: boolean,
    editor: Editor
}

export const getTextContainerCoordinates: GetHtmlElCoordinates = (el: HTMLElement): ElCoordinates => {
    let parent = el.parentElement;
    if (!parent) return {x: 0, y: 0};
    let x = parent.getAttribute('x');
    let y = parent.getAttribute('y');
    return {x: x ? +x : 0, y: y ? +y : 0}
};