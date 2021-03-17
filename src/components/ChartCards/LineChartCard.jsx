import React from 'react';
import {Panel} from "rsuite";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";
import './LineChartStyles.css'

function LineChartCard({height, width, title, summary, data, percentage}) {

    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 280, height:height }}>
            <div className='card-content'>
                <p>{title}</p>
                <div className='card-summary'>
                    <h4 >{summary}</h4>
                    <h6 style={{color: Math.sign(percentage) === -1 ? "#FF6796" : "#2EC551"}}>{percentage ? `${percentage}%` : 'NA'}</h6>
                </div>
            </div>
            <ResponsiveContainer width={width} height={height}>
                <AreaChart
                    width={width-20}
                    height={height-60}
                    data={data}
                    margin={{
                        top: 0,
                        right: 20,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/*<XAxis dataKey="name" />*/}
                    {/*<YAxis />*/}
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </Panel>
    );
}

export default LineChartCard;