import Image from "../../../model/slide/content/Image";
import generateUuid from "../../core/generateUuid";

export function getDefaultImage(): Image {
    return {
        position: {
            x: 100,
            y: 100
        },
        uuid: generateUuid(),
        size: {
            width: 100,
            height: 50
        },
        url: "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png",
        image: undefined,
        layer: 0
    };
}