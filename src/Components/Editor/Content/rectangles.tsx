import * as React from "react";
import { createSelectorHook, } from 'react-redux'
import { RootState } from "../../../store/Reducer";
import { ContentList } from "../../../Model/Slide/Slide";
import { isRectangle } from "../../../Methods/typeGuardMethods/isRectangle";
import Rectangle from "../../../Model/Slide/Content/shape/Rectangle";

export const useSelector = createSelectorHook<RootState>();

export const Rectangles: React.FC = () => {
	const contentList: ContentList = useSelector(
		(state: RootState) => state.editorReducer.present.currentSlide.contentList
	);
	let rectangles: Rectangle[] = [];
	for (const key in contentList) {
		const content = contentList[key];
		if (isRectangle(content)) {
			rectangles.push(content)
		}
	}
	console.log(rectangles[0]);
	return (
		<svg width={1000} height={1000}>
			{rectangles.map((rectangle) =>
				<rect key={rectangle.uuid} x={rectangle.bottomRightCoordinate.x} y={rectangle.bottomRightCoordinate.y}
					width={rectangle.rectangleSize.width} height={rectangle.rectangleSize.height}
					strokeWidth={rectangle.border.width} stroke={rectangle.border.color}
					fill={rectangle.background} />
			)}
		</svg>
	);
};