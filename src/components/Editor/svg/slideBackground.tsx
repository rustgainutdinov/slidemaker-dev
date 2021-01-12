import {Slide} from "../../../model/slide/Slide";

type SlideBackgroundProps = {
    slide: Slide
}

export const SlideBackground = ({slide}: SlideBackgroundProps) => {
    return (
        <>
            <rect width={'100%'} height={'100%'} fill={slide.background}/>
            <image href={slide.backgroundImage} height="100%" width="100%"/>
        </>
    )
};