import { useDispatch } from "react-redux";
import Editor from "../../../../model/Editor";
import { addState } from "../../../../store/Reducer/editor";
import Image from "../../../../model/slide/content/Image";
import updateImage from "../../../../methods/updateContent/updateImage";
import { useState } from "react";
import './image.css'

type updateImageProps = {
    presentEditor: Editor, currentImage: Image
}

export const UpdateImage = ({ presentEditor, currentImage }: updateImageProps) => {
    const dispatch = useDispatch();
    const updateStateUpdatingTextContainer = (image: Image) => dispatch(addState(updateImage(presentEditor, image)));
    const [imageUrl, setImgUrl] = useState('');
    
    const handleUpdateImage = (event: any) => {
        setImgUrl(event.target.value)
    }

    const handleClick = () => {
        updateStateUpdatingTextContainer(
            {
                ...currentImage,
                url: imageUrl
            }
        )
    }

    return (
        <>
            <input type = "text" placeholder="Новая картинка" onInput={handleUpdateImage}/>
            <button onClick={handleClick} >Применить</button>
        </>
    )
}