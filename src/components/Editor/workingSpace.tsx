import {Previews} from "./previews/previews";
import {Contents} from "./contents";
import React from "react";

export const WorkingSpace = () => {
    return (
        <div className="working_space">
            <Previews/>
            <div className="slide_view">
                <Contents/>
            </div>
        </div>
    )
};