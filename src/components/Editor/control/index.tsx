import { Component } from "react";
import { CreateCircle } from './createCircle'
import { CreateRectangle } from './createRectangle'
import { CreateTextContainer } from './createTextContainer'

export class Control extends Component {
    render() {
        return (
            <div>
                <CreateRectangle />
                <CreateCircle />
                <CreateTextContainer />
            </div>
        );
    }
}
