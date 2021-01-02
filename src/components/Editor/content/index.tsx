import { Component } from "react";
import { Circles } from './circles'
import { Rectangles } from "./rectangles";
import { TextContainers } from "./textContainers";

export class Content extends Component {
	render() {
		return (
			<svg width={1000} height={500}>
				<Circles />
				<TextContainers />
				<Rectangles />
			</svg>
		);
	}
}
