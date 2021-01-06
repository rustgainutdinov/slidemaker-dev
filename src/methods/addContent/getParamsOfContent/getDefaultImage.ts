import Image from "../../../model/slide/content/Image";
import generateUuid from "../../core/generateUuid";

export function getDefaultImage(): Image {
    return {
        position: {
            x: 50,
            y: 50
        },
        uuid: generateUuid(),
        size: {
            width: 300,
            height: 380
        },
        url: "https://i.imgur.com/J6EWl6g.png",
        image: undefined,
        layer: 0
    };  
}