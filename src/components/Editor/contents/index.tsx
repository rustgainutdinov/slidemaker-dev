import * as React from "react";
import {Circle} from './circle'
import {RootState} from "../../../store/Reducer";
import Content from "../../../model/slide/content/Content";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import {useDispatch, useSelector} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import {isRectangle} from "../../../methods/typeGuardMethods/isRectangle";
import {Rectangle} from "./rectangles";
import {isTextContainer} from "../../../methods/typeGuardMethods/isTextContainer";
import {TextContainer} from "./textContainers";
import changeCurrentContent from "../../../methods/updateContent/changeCurrentContent";
import {getIteratedCurrSlideContentList} from "../../../methods/core/getIteratedCurrSlideContentList";

export const Contents: React.FC = () => {
    const editor: Editor = useSelector((state: RootState) => state.editorReducer.present);
    const dispatch = useDispatch();
    const changeCurrentContentAction = (uuid: string): object => {
        return dispatch(addState(changeCurrentContent(editor, uuid)));
    };

    const drawContent = (content: Content) => {
        const onClickCallback = () => changeCurrentContentAction(content.uuid);
        if (isCircle(content)) {
            return <Circle circle={content} onClick={onClickCallback.bind(content)} isCurrent={true}
                           key={content.uuid}/>
        }
        if (isRectangle(content)) {
            return <Rectangle rectangle={content} isCurrent={true} key={content.uuid}
                              onClick={onClickCallback.bind(content)}/>
        }
        if (isTextContainer(content)) {
            return <TextContainer textContainer={content} isCurrent={true} onClick={onClickCallback.bind(content)}/>
        }
    };

    return (
        <svg width={1000} height="75vh" id={"currentSlideContent"}>
            {getIteratedCurrSlideContentList(editor).map(drawContent)}
        </svg>
    );
};