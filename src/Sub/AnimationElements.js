import '../Animation.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function An(props) {
    const pos = props.pos;
    const start = props.start;
    const end = props.end;
    const startSize = props.startSize
    const endSize = props.endSize === undefined ? props.startSize : props.endSize;
    const startOpacity = props.startOpacity
    const endOpacity = props.endOpacity === undefined ? props.startOpacity : props.endOpacity;
    const startX = props.startX
    const endX = props.endX === undefined ? props.startX : props.endX;
    const startY = props.startY
    const endY = props.endY === undefined ? props.startY : props.endY;

    function getOpacity(start, end, pos, startOpacity, endOpacity) {
        if (pos < start || pos > end) {
            return 0
        }
        if (startOpacity === endOpacity) {
            return startOpacity
        }
        return ((endOpacity - startOpacity) / (end - start)) * (pos - start) + startOpacity
    }
    function getPercent(start, end, pos, startPercent, endPercent) {
        if (pos < start || pos > end) {
            return 0
        }
        if (startPercent === endPercent) {
            return `${startPercent}%`
        }
        return `${((endPercent - startPercent) / (end - start)) * (pos - start) + startPercent}%`
    }

    const output = props.src.map((item) => (
        <img src={`../animation/${item}`} style={{
            opacity: getOpacity(start, end, pos, startOpacity, endOpacity),
            width: getPercent(start, end, pos, startSize, endSize),
            top: getPercent(start, end, pos, startY, endY),
            left: getPercent(start, end, pos, startX, endX)
        }} />
    ))

    return (
        <div>
            {output}
        </div>
    )
}
