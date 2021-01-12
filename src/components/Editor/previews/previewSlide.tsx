import {Slide} from "../../../model/slide/Slide";
import {SvgContentList} from "../svg/list";

type PreviewSlideProps = {
    slide: Slide,
    onClick: () => void,
    isCurrent: boolean
}

export const PreviewSlide = ({slide, onClick}: PreviewSlideProps) => {
    return (
        <div className="slide_wrapper" onClick={onClick} key={slide.slideId}>
            <div className="slide_counter">
                <p className="counter">{slide.slideId + 1}</p>
            </div>
            <div className="slide_box">
                <SvgContentList slide={slide} width="100%" height="100%"/>
            </div>
        </div>
    )
};