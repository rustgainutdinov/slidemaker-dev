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
        url: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
        image: undefined,
        layer: 0
    };
}