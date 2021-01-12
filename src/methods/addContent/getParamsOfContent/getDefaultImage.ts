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
        url: "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
        image: undefined,
        layer: 0
    };
}