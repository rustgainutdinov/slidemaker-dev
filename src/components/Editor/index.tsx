import {Component} from "react";
import {Content} from "./content";
import {Control} from "./control";

export class Editor extends Component {
	render() {
		return (
			<div>
				<Content/>
				<Control/>
			</div>
		);
	}
}
