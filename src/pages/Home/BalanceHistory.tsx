import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Card from '../../components/Card';

const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
];


const BalanceHistory = () => {
    return (
        <Card title="Balance History">
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="gradientColor" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="5%" stopColor="#1814F3" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis axisLine={false} tick={{ fill: '#718EBF' }} dataKey="name" />
                    <YAxis axisLine={false} tick={{ fill: '#718EBF' }} />
                    <Tooltip />
                    <Area
                        type="natural"
                        dataKey="value"
                        stroke="#1814F3"
                        fill="url(#gradientColor)"
                        strokeWidth={4}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}
export default BalanceHistory