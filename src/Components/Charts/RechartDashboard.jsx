import React from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
    {
        sesi: "Sesi-01",
        pendaftar: 210,
        divaksin: 120,
    },
    {
        sesi: "Sesi-02",
        pendaftar: 175,
        divaksin: 145,
    },
    {
        sesi: "Sesi-03",
        pendaftar: 50,
        divaksin: 10,
    },
    {
        sesi: "Sesi-04",
        pendaftar: 100,
        divaksin: 90,
    },
    {
        sesi: "Sesi-05",
        pendaftar: 90,
        divaksin: 88,
    },
    {
        sesi: "Sesi-06",
        pendaftar: 10,
        divaksin: 8,
    },
];

function RechartDashboard(props) {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={pdata}>
                <CartesianGrid stroke="#949494" strokeDasharray="5 5"/>
                <XAxis dataKey="sesi" interval={"preserveStartEnd"} fontSize={16} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="pendaftar" stroke="green" activeDot={{ r: 8 }} type="monotone"/>
                <Line dataKey="divaksin" stroke="blue" activeDot={{ r: 8 }} type="monotone"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default RechartDashboard;
