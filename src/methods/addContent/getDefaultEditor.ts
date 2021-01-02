import BorderType from "../../const/BorderType";
import Editor from "../../model/Editor";
import Circle from "../../model/slide/content/shape/Circle";
import Rectangle from "../../model/slide/content/shape/Rectangle";
import TextContainer from "../../model/slide/content/TextContainer";
import { Slide } from "../../model/slide/Slide";
import generateUuid from "../generateUuid";
import getDefaultBorder from "./getParamsOfContent/getDefaultBorder";
import getDefaultPosition from "./getParamsOfContent/getDefaultPosition";
import getDefaultRectangleSize from "./getParamsOfContent/getDefaultRectangleSize";
import { getDefaultTextContainer } from "./getParamsOfContent/getDefaultTextContainer";

export default function getDefaultEditor(): Editor {
	const uuid = generateUuid();
	const uuid2 = generateUuid();
	const uuid3 = generateUuid();
	const uuid4 = generateUuid();
	const content: Circle = {
		position: getDefaultPosition(),
		layer: 1,
		type: 3,
		uuid: uuid,
		radius: 50,
		border: getDefaultBorder(),
		background: '#FF0000',
		circle: undefined
	};
	const content2: Rectangle = {
		position: getDefaultPosition(),
		layer: 2,
		type: 2,
		uuid: uuid2,
		bottomRightCoordinate: getDefaultPosition(),
		rectangleSize: getDefaultRectangleSize(),
		border: getDefaultBorder(),
		background: '#FF0000',
		rectangle: undefined
	};
	const content3: TextContainer = {
		...getDefaultTextContainer(),
		uuid: uuid3
		
	}
	const slide: Slide = {
		slideId: 1,
		background: "#fff",
		animation: 1,
		contentList: {
			[uuid]: content,
			[uuid2]: content2,
			[uuid3]: content3,
            [uuid4]: {
                position: {
                    x: 150,
                    y: 150
                },
                layer: 1,
                type: 3,
                uuid: uuid4,
                radius: 70,
                border: {
                    width: 5,
                    color: '#000000',
                    type: BorderType.SOLID,
                },
                background: '#0000FF',
                circle: undefined
            },
		}
	};
	return {
		currentPresentation: {
			name: "newPresentation",
			date: new Date(),
			author: "newAuthor",
			sliderList: [slide]
		},
		currentContent: content,
		currentSlide: slide
	}
}