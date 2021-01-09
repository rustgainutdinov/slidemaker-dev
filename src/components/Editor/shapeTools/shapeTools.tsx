import './shapeTools.css'

export const ShapeTools = () => {
    return (
        <div className="shape_tools_panel">
            <li>
                <a href="#" className="shape">
                    <svg id="mdi-format-color-fill" className="shape_button" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M19,11.5C19,11.5 17,13.67 17,15A2,2 0 0,0 19,17A2,2 0 0,0 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"/></svg>
                </a>
            </li>
            <li>
                <a href="#" className="shape">
                    <svg id="mdi-border-color" className="shape_button" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z"/></svg>
                </a>
            </li>
            <li>
                <a href="#" className="shape">
                <svg width="16px" height="16px" className="shape_button" viewBox="0 0 16 16" fill="#ffffff"><path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg>
                </a>
            </li>
        </div>
    )
};