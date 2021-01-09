import { useDispatch } from "react-redux";
import Editor from "../../../../model/Editor";
import { addState } from "../../../../store/Reducer/editor";
import Image from "../../../../model/slide/content/Image";
import updateImage from "../../../../methods/updateContent/updateImage";

type updateImageProps = {
    presentEditor: Editor, currentImage: Image
}

export const UpdateImage = ({ presentEditor, currentImage }: updateImageProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingImage = (image: Image) => dispatch(addState(updateImage(presentEditor, image)));

    const handlePositionXChange = (event: any) => updateStateUpdatingImage({
        ...currentImage,
        position: {
            ...currentImage.position,
            x: +event.target.value
        }
    });
    const handlePositionYChange = (event: any) => updateStateUpdatingImage({
        ...currentImage,
        position: {
            ...currentImage.position,
            y: +event.target.value
        }
    });
    const handleImageSizeHeightChange = (event: any) => updateStateUpdatingImage({
        ...currentImage,
        size: {
            ...currentImage.size,
            height: +event.target.value
        }
    });
    const handleImageSizeWidthChange = (event: any) => updateStateUpdatingImage({
        ...currentImage,
        size: {
            ...currentImage.size,
            width: +event.target.value
        }
    });
    const handleImageUrlChange = (event: any) => updateStateUpdatingImage({
        ...currentImage,
        url: event.target.value
    });

    return (
        <div>
            <div id="edit_params">
                <div id="popup_rect">
                <div className="params_field">
                        <h3 className="param_name">Ссылка</h3>
                        <input type="text" className="param_input_label" onChange={handleImageUrlChange} value={currentImage.url} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Ширина</h3>
                        <input type="text" className="param_input_label" onChange={handleImageSizeWidthChange} value={currentImage.size.width} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Высота</h3>
                        <input type="text" className="param_input_label" onChange={handleImageSizeHeightChange} value={currentImage.size.height} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция X</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionXChange} value={currentImage.position.x} />
                    </div>
                    <div className="params_field">
                        <h3 className="param_name">Позиция Y</h3>
                        <input type="text" className="param_input_label" onChange={handlePositionYChange} value={currentImage.position.y} />
                    </div>
                    <a href="#" className="close">Применить</a>
                </div>
            </div>
        </div>
    )
};