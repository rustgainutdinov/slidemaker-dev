import * as React from "react";
import Content from "../../../model/slide/content/Content";
import {isCircle} from "../../../methods/typeGuardMethods/isCircle";
import {isRectangle} from "../../../methods/typeGuardMethods/isRectangle";
import {isTextContainer} from "../../../methods/typeGuardMethods/isTextContainer";
import {isImage} from "../../../methods/typeGuardMethods/isImage";
import {SlideBackground} from "./slideBackground";
import {ImageSvg} from "./ImageSvg";
import {RectangleSvg} from "./rectangle";
import {CircleSvg} from "./circle";
import {Slide} from "../../../model/slide/Slide";
import {getIteratedSlideContentList} from "../../../methods/core/getIteratedSlideContentList";
import {TextContainerSvg} from "./textContainer";

type SvgContentListProps = {
    slide: Slide,
    height: string,
    width: string,
}

export const SvgContentList = ({slide, width, height}: SvgContentListProps) => {
    const drawContent = (content: Content) => {
        if (isCircle(content)) {
            return <CircleSvg content={content} key={content.uuid}/>
        }
        if (isRectangle(content)) {
            return <RectangleSvg content={content} key={content.uuid}/>
        }
        if (isTextContainer(content)) {
            return <TextContainerSvg content={content} key={content.uuid}/>
        }
        if (isImage(content)) {
            return <ImageSvg content={content} key={content.uuid}/>
        }
    };

    return (
        <svg width={width} height={height} viewBox="0 0 900 600" id={"currentSlideContent"}>
            <SlideBackground slide={slide}/>
            {getIteratedSlideContentList(slide).map(drawContent)}
        </svg>
    );
};