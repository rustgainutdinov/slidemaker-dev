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

export const Contents: React.FC = () => {
    const editor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    let dispatch = useDispatch();
    const changeCurrentContentAction = (uuid: string): object => {
        return dispatch(addState(changeCurrentContent(editor, uuid)));
    };

    const drawContent = (content: Content) => {
        const onClickCallback = () => changeCurrentContentAction(content.uuid);
        if (isCircle(content)) {
            return <CircleEl circle={content} onClick={onClickCallback.bind(content)} isCurrent={true}
                             key={content.uuid}/>
        }
        if (isRectangle(content)) {
            return <RectangleEl rectangle={content} isCurrent={true} key={content.uuid}
                                onClick={onClickCallback.bind(content)}/>
        }
        if (isTextContainer(content)) {
            return <TextContainerEl textContainer={content} isCurrent={true} onClick={onClickCallback.bind(content)} key={content.uuid}/>
        }
        if (isImage(content)) {
            return <ImageEl image={content} isCurrent={true} onClick={onClickCallback.bind(content)}
                            key={content.uuid}/>
        }
    };

    return (
        <svg width={1000} height="75vh" id={"currentSlideContent"}>
            {getIteratedCurrSlideContentList(editor).map(drawContent)}
        </svg>
    );
};