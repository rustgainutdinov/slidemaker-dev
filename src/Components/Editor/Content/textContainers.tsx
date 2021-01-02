import * as React from "react";
import { createSelectorHook, } from 'react-redux'
import { RootState } from "../../../store/Reducer";
import { ContentList } from "../../../Model/Slide/Slide";
import TextContainer from "../../../Model/Slide/Content/TextContainer";
import { isTextContainer } from "../../../Methods/typeGuardMethods/isTextContainer";

export const useSelector = createSelectorHook<RootState>();

export const TextContainers: React.FC = () => {
    const contentList: ContentList = useSelector(
        (state: RootState) => state.editorReducer.present.currentSlide.contentList
    );
    let textContainers: TextContainer[] = [];
    for (const key in contentList) {
        const content = contentList[key];
        if (isTextContainer(content)) {
            textContainers.push(content)
        }
    }
    console.log(textContainers[0]);
    return (
        <svg width={1000} height={1000}>
            {textContainers.map((textContainer) =>
                <text key={textContainer.uuid} x={textContainer.position.x} y={textContainer.position.y} fill={textContainer.richText.color}>{textContainer.richText.value}</text>
            )}
        </svg>
    );
};