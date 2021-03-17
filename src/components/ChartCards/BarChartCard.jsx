import React from 'react';
import {Panel} from "rsuite";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";



function BarChartCard({width, height, data}) {
    return (
        <Panel shaded bordered bodyFill style={{  width: width, height:height }}>
            <ResponsiveContainer width={width} height={height}>
                <BarChart
                    width={width}
                    height={height}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </Panel>
    );
}

export default BarChartCard;