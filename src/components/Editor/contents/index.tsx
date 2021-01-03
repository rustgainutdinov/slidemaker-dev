import * as React from "react";
import { Circle } from './circle'
import { RootState } from "../../../store/Reducer";
import Content from "../../../model/slide/content/Content";
import { isCircle } from "../../../methods/typeGuardMethods/isCircle";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../../../store/Reducer/editor";
import Editor from "../../../model/Editor";
import { isRectangle } from "../../../methods/typeGuardMethods/isRectangle";
import { Rectangle } from "./rectangles";
import { isTextContainer } from "../../../methods/typeGuardMethods/isTextContainer";
import { TextContainer } from "./textContainers";

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
                isCurrent={true} key={content.uuid} />
        }
        if (isRectangle(content)) {
            return <Rectangle x={content.bottomRightCoordinate.x} y={content.bottomRightCoordinate.y}
                widht={content.rectangleSize.width} height={content.rectangleSize.height}
                background={content.background} borderWidth={content.border.width} borderColor={content.border.color}
                isCurrent={true} key={content.uuid} onClick={onClickCallback.bind(content)} />
        }
        if (isTextContainer(content)) {
            return <TextContainer x={content.position.x} y={content.position.y}
                color={content.richText.color} key={content.uuid} isCurrent={true} onClick={onClickCallback.bind(content)} value={content.richText.value} />
        }
    };
    drawContent(sortedContents[0]);
    return (
        <svg width={1000} height={500}>
            {sortedContents.map(drawContent)}
        </svg>
    );
};