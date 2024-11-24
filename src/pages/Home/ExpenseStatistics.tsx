import { Cell, Legend, Pie, PieChart } from 'recharts';
import Card from '../../components/Card';

interface CustomizedLabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
}

const data = [
    { name: 'Entertainment', value: 30, color: '#2B3E6F' },
    { name: 'Bill Expense', value: 15, color: '#FF7300' },
    { name: 'Investment', value: 20, color: '#4A90E2' },
    { name: 'Others', value: 35, color: '#1C1C1C' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: CustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            <tspan
                x={x}
                dy="-10"
                textAnchor={x > cx ? 'start' : 'end'}
                style={{ fontSize: '16px', fontWeight: '700' }}
            >
                {(percent * 100).toFixed(0)}%
            </tspan>
        </text>
    );
};

const ExpenseStatistics = () => {
    return (
        <Card title="Expense Statistics">
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Legend
                    wrapperStyle={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: 'black',
                        padding: '10px',
                    }}
                />
            </PieChart>
        </Card>
    )
}
export default ExpenseStatistics