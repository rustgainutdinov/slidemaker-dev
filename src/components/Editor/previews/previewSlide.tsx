import {Slide} from "../../../model/slide/Slide";
import './previews.css'

type PreviewSlideProps = {
    slide: Slide,
    onClick: () => void
}

export const PreviewSlide = ({slide, onClick}: PreviewSlideProps) => {
    return (
        <div className="slide_wrapper" onClick={onClick}
             key={slide.slideId}>
            <div className="slide_counter">
                <p className="counter">{slide.slideId + 1}</p>
            </div>
            <a href="#" className="slide_box"></a>
        </div>
    )
};