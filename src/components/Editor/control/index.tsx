import {Component} from "react";
import {CreateCircle} from './createCircle'
import {CreateRectangle} from './createRectangle'
import {CreateTextContainer} from './createTextContainer'
import {CreateImage} from './createImage'

export class Control extends Component {
    render() {
        return (
            <li><a href="#" className="tools_button plus">+</a>
                <ul className='create_dropdown'>
                    <li><CreateRectangle/></li>
                    <li><CreateCircle/></li>
                    <li><CreateImage/></li>
                    <li><CreateTextContainer/></li>
                </ul>
            </li>
        );
    }
}
