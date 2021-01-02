import * as React from "react";
import {Circle} from './circle'
import {ContentList} from "../../../model/slide/Slide";
import {RootState} from "../../../store/Reducer";
import Content from "../../../model/slide/content/Content";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import {useSelector} from "react-redux";

export const Contents: React.FC = () => {
    const contents: ContentList = useSelector(
        (state: RootState) => state.editorReducer.present.currentSlide.contentList
    );
    let sortedContents = [];
    for (const key in contents) {
        const content = contents[key];
        sortedContents[content.layer] = content;
    }
    const drawContent = (content: Content) => {
        if (isCircle(content)) {
            return <Circle x={content.position.x} y={content.position.y} radius={content.radius}
                           background={content.background} borderWidth={content.border.width}
                           borderColor={content.border.color}/>
        }
    };
    return (
        <svg width={1000} height={500}>
            {sortedContents.map(drawContent)}
        </svg>
    );
}
