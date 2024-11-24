import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Card from "../../components/Card";
import { useEffect, useState } from 'react';

const WeeklyActivity = () => {
    const data = [
        { name: 'Sat', deposit: 400, withdrawl: 300 },
        { name: 'Sun', deposit: 300, withdrawl: 400 },
        { name: 'Mon', deposit: 500, withdrawl: 450 },
        { name: 'Tue', deposit: 450, withdrawl: 550 },
        { name: 'Wed', deposit: 700, withdrawl: 600 },
        { name: 'Thu', deposit: 600, withdrawl: 650 },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Card title="Weekly Activity">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barGap={15}>
                    <CartesianGrid vertical={false} stroke="#F3F3F5" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: '#718EBF' }} />
                    <YAxis axisLine={false} tick={{ fill: '#718EBF' }} />
                    <Tooltip />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ textTransform: 'capitalize' }}
                    />
                    <Bar
                        dataKey="deposit"
                        fill="#232323"
                        radius={[10, 10, 10, 10]}
                        barSize={isMobile ? 10 : 20}
                    />
                    <Bar
                        dataKey="withdrawl"
                        fill="#396AFF"
                        radius={[10, 10, 10, 10]}
                        barSize={isMobile ? 10 : 20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}
export default WeeklyActivity