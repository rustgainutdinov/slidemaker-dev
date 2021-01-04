import {Component} from "react";
import {Contents} from "./contents";
import {CreateControlElements} from "./control/createControlElements";
import {UpdateControlElements} from "./control/updateControlElements";

export class Editor extends Component {
    render() {
        return (
            <div>
                <Contents/>
                <CreateControlElements/>
                <UpdateControlElements/>
            </div>
        );
    }
}
