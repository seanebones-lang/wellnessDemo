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
  if (type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
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
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'area') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data}>
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
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            fill={color}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
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
        <Bar
          dataKey={dataKey}
          fill={color}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

