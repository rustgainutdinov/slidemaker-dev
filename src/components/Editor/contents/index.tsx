import * as React from "react";
import {CircleEl} from './circle';
import {RootState} from "../../../store/Reducer";
import Content from "../../../model/slide/content/Content";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import {useDispatch, useSelector} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import {isRectangle} from "../../../methods/typeGuardMethods/isRectangle";
import {RectangleEl} from "./rectangles";
import {isTextContainer} from "../../../methods/typeGuardMethods/isTextContainer";
import {TextContainerEl} from "./textContainers";
import changeCurrentContent from "../../../methods/updateContent/changeCurrentContent";
import {getIteratedCurrSlideContentList} from "../../../methods/core/getIteratedCurrSlideContentList";
import {isImage} from "../../../methods/typeGuardMethods/isImage";
import {ImageEl} from './image';
import {SlideBackground} from "../svg/slideBackground";

export const Contents: React.FC = () => {
    const editor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    let dispatch = useDispatch();
    const changeCurrentContentAction = (uuid: string): object => {
        return dispatch(addState(changeCurrentContent(editor, uuid)));
    };

    const drawContent = (content: Content) => {
        const onClickCallback = () => changeCurrentContentAction(content.uuid);
        const isCurrent = editor.currentContent ? content.uuid === editor.currentContent.uuid : false;
        if (isCircle(content)) {
            return <CircleEl circle={content} onCurrentElementChanged={onClickCallback.bind(content)}
                             isCurrent={isCurrent} key={content.uuid}/>
        }
        if (isRectangle(content)) {
            return <RectangleEl rectangle={content} isCurrent={isCurrent} key={content.uuid}
                                onCurrentElementChanged={onClickCallback.bind(content)}/>
        }
        if (isTextContainer(content)) {
            return <TextContainerEl textContainer={content} editor={editor} isCurrent={isCurrent}
                                    onCurrentElementChanged={onClickCallback.bind(content)} key={content.uuid}/>
        }
        if (isImage(content)) {
            return <ImageEl image={content} isCurrent={isCurrent} onCurrentElementChanged={onClickCallback.bind(content)}
                            key={content.uuid}/>
        }
    };
    return (
        <svg viewBox="0 0 900 600" width="900px" height="600px" id={"currentSlideContent"}>
            {editor.currentSlide ? <SlideBackground slide={editor.currentSlide}/> : null}
            {getIteratedCurrSlideContentList(editor).map(drawContent)}
        </svg>
    );
};