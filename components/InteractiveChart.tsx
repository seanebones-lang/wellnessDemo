'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ChartProps {
  data: any[];
  type?: 'line' | 'area' | 'bar';
  dataKey: string;
  xKey: string;
  color?: string;
  height?: number;
}

export default function InteractiveChart({
  data,
  type = 'line',
  dataKey,
  xKey,
  color = '#8b5cf6',
  height = 300,
}: ChartProps) {
  const ChartComponent = type === 'line' ? LineChart : type === 'area' ? AreaChart : BarChart;
  const DataComponent = type === 'line' ? Line : type === 'area' ? Area : Bar;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ChartComponent data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey={xKey} stroke="rgba(255,255,255,0.5)" />
        <YAxis stroke="rgba(255,255,255,0.5)" />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
          }}
        />
        <Legend />
        <DataComponent
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          fill={color}
          strokeWidth={2}
        />
      </ChartComponent>
    </ResponsiveContainer>
  );
}

