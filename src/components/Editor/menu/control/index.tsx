import {Component} from "react";
import {CreateCircle} from './createCircle'
import {CreateRectangle} from './createRectangle'
import {CreateTextContainer} from './createTextContainer'
import {CreateImage} from './createImage'

export class Control extends Component {
    render() {
        return (
            <ul className="dropdown">
                <li><a href="#"><CreateRectangle/></a></li>
                <li><a href="#"><CreateCircle/></a></li>
                <li><a href="#"><CreateTextContainer/></a></li>
                <li><a href="#"><CreateImage/></a></li>
            </ul>
        );
    }
}
