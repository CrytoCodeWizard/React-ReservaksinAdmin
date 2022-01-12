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
        pendaftar: 11,
        divaksin: 120,
    },
    {
        sesi: "Sesi-02",
        pendaftar: 15,
        divaksin: 12,
    },
    {
        sesi: "Sesi-03",
        pendaftar: 5,
        divaksin: 10,
    },
    {
        sesi: "Sesi-04",
        pendaftar: 10,
        divaksin: 5,
    },
    {
        sesi: "Sesi-05",
        pendaftar: 9,
        divaksin: 4,
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
            <LineChart data={pdata} margin={{ right: 300 }}>
                <CartesianGrid />
                <XAxis dataKey="sesi" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line dataKey="pendaftar" stroke="black" activeDot={{ r: 8 }} />
                <Line dataKey="divaksin" stroke="red" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default RechartDashboard;
