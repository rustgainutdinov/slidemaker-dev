import { useState } from "react";
import { CreateCircle } from './createCircle'
import { CreateRectangle } from './createRectangle'
import { CreateTextContainer } from './createTextContainer'
import { CreateImage } from './createImage'
import './control.css'

export function ControlEl() {
    const [checked, setClassName] = useState(false);

    let className = '';
    let active_plus = ''
    if (checked == true) {
        className = 'activeElement'
        active_plus = 'active_plus'
    }
    {
        return (
            <li>
                <a href="#" className={"tools_button plus " + active_plus} onMouseMove={() => setClassName(true)} onMouseOut={() => setClassName(false)}>+</a>
                <ul className={'create_dropdown ' + className} onMouseMove={() => setClassName(true)} onMouseOut={() => setClassName(false)}>
                    <li><CreateRectangle /></li>
                    <li><CreateCircle /></li>
                    <li><CreateImage /></li>
                    <li><CreateTextContainer /></li>
                </ul>
            </li>
        );
    }
}
