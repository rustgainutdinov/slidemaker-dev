import {Component} from "react";
import {Contents} from "./contents";
import {Control} from "./control/createControlElements";

export class Editor extends Component {
    render() {
        return (
            <div>
                <Contents/>
                <Control/>
            </div>
        );
    }
}
