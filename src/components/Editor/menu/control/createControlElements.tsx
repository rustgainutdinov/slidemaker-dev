import {Component} from "react";
import {CreateCircle} from './createCircle'
import { CreateImage } from "./createImage";
import {CreateRectangle} from './createRectangle'
import {CreateTextContainer} from './createTextContainer'

export class CreateControlElements extends Component {
    render() {
        return (
            <div>
                <CreateRectangle/>
                <CreateCircle/>
                <CreateTextContainer/>
                <CreateImage/>
            </div>
        );
    }
}
