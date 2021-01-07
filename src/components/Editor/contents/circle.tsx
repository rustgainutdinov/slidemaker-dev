import Circle from "../../../model/slide/content/shape/Circle";
import {useState} from "react";

type CircleProps = {
    circle: Circle,
    onClick: () => void,
    isCurrent: boolean
}

export const CircleEl = ({circle, onClick}: CircleProps) => {
    let ball = document.getElementById('ball');
    const [x, setX] = useState(circle.position.x);
    const [y, setY] = useState(circle.position.y);
    if (ball) {
        ball.onmousedown = function (e) {
            if (!ball) {
                return
            }
            let XCoord = ball.getAttribute('cx');
            let YCoord = ball.getAttribute('cy');
            if (!XCoord || !YCoord) {
                return;
            }
            let shiftX = e.pageX - +XCoord;
            let shiftY = e.pageY - +YCoord;

            function moveAt(e: MouseEvent) {
                if (!ball) {
                    return
                }
                setX(e.pageX - shiftX);
                setY(e.pageY - shiftY);
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            ball.onmouseup = function () {
                if (!ball) return;
                document.onmousemove = null;
                ball.onmouseup = null;
            };
        };

        ball.ondragstart = function () {
            return false;
        };
    }


    return (
        <circle id="ball" cx={x} cy={y} r={circle.radius}
                strokeWidth={circle.border.width}
                stroke={circle.border.color} fill={circle.background} onClick={onClick}/>
    );
};
