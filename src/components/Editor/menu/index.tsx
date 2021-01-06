import React from "react";
import {Logo} from "./logo";
import {ToolsPanel} from "./toolsPanel";

export const Menu = () => {
    return (
        <div className="main_menu">
            <Logo/>
            <ToolsPanel/>
        </div>
    )
};