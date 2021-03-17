import React from 'react';
import {Panel} from "rsuite";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";






function LineChartCard({height, width, title, summary, data}) {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 280, height:height }}>
            <div>
                <p>{title}</p>
                <h4>{summary}</h4>
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