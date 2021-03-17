import React from 'react';
import {Panel} from "rsuite";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


function AreaChartCard({height, width, data}) {
    return (
        <div>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: width, height:height }}>
                <ResponsiveContainer width={width} height={height}>
                    <AreaChart
                        width={width-20}
                        height={height-60}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </Panel>
        </div>
    );
}

export default AreaChartCard;