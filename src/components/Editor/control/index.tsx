import {Component} from "react";
import {CreateCircle} from './createCircle'
import {CreateRectangle} from './createRectangle'
import {CreateTextContainer} from './createTextContainer'

export class Control extends Component {
    render() {
        return (
            <ul className="dropdown">
                <li><a href="#"><CreateRectangle/></a></li>
                <li><a href="#"><CreateCircle/></a></li>
                <li><a href="#"><CreateTextContainer/></a></li>
            </ul>
        );
    }
}
