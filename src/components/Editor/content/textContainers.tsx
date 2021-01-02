import { createSelectorHook } from "react-redux";
import { isTextContainer } from "../../../methods/typeGuardMethods/isTextContainer";
import TextContainer from "../../../model/slide/content/TextContainer";
import { ContentList } from "../../../model/slide/Slide";
import { RootState } from "../../../store/Reducer";

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