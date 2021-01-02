import { Component } from "react";
import { Circles } from './circles'
import { Rectangles } from "./rectangles";
import { TextContainers } from "./textContainers";

export class Content extends Component {
	render() {
		return (
			<div>
				<Circles />
				<TextContainers />
				<Rectangles />
			</div>
		);
	}
}
