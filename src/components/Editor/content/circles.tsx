import * as React from "react";
import { createSelectorHook, } from 'react-redux'
import { RootState } from "../../../store/Reducer";
import { ContentList } from "../../../model/slide/Slide";
import { isCircle } from "../../../methods/typeGuardMethods/isCircle";
import Circle from "../../../model/slide/content/shape/Circle";

export const useSelector = createSelectorHook<RootState>();

export const Circles: React.FC = () => {
	const contentList: ContentList = useSelector(
		(state: RootState) => state.editorReducer.present.currentSlide.contentList
	);
	let circles: Circle[] = [];
	for (const key in contentList) {
		const content = contentList[key];
		if (isCircle(content)) {
			circles.push(content)
		}
	}
	console.log(circles[0]);
	return (
		<svg width={1000} height={1000}>
			{circles.map((circle) =>
				<circle key={circle.uuid} cx={circle.position.x} cy={circle.position.y} r={circle.radius}
					strokeWidth={circle.border.width}
					stroke={circle.border.color} fill={circle.background} />
			)}
		</svg>
	);
};
