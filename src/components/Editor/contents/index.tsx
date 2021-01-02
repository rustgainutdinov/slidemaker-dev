import * as React from "react";
import {Circle} from './circle'
import {RootState} from "../../../store/Reducer";
import Content from "../../../model/slide/content/Content";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import {useDispatch, useSelector} from "react-redux";
import {addState} from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";

export const Contents: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );

    const dispatch = useDispatch();
    const changeCurrentContent = (uuid: string): object => {
        console.log(uuid);
        return dispatch(addState({
            ...presentEditor,
            currentContent: presentEditor.currentSlide.contentList[uuid]
        }));
    }


    let sortedContents = [];
    for (const key in presentEditor.currentSlide.contentList) {
        const content = presentEditor.currentSlide.contentList[key];
        sortedContents[content.layer] = content;
    }
    const drawContent = (content: Content) => {
        const onClickCallback = () => changeCurrentContent(content.uuid);
        if (isCircle(content)) {
            return <Circle x={content.position.x} y={content.position.y} radius={content.radius}
                           background={content.background} borderWidth={content.border.width}
                           borderColor={content.border.color} onClick={onClickCallback.bind(content)}
                           isCurrent={true} key={content.uuid}/>
        }
    };
    drawContent(sortedContents[0]);
    return (
        <svg width={1000} height={500}>
            {sortedContents.map(drawContent)}
        </svg>
    );
};