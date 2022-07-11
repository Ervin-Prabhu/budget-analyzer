import React from "react";
import "./ChartBar.css"

const BarChart = props =>
{
    let barHeightPercent = '0%';
    if(props.maxValue > 0)
    {
        barHeightPercent = Math.round((props.value/props.maxValue) * 100) + "%"
    }
    
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barHeightPercent}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}
export default BarChart;