'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  gradient?: string;
}

export default function MetricCard({
  icon,
  label,
  value,
  trend,
  trendUp,
  gradient = 'from-purple-500 to-pink-500',
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient}`}>
          {icon}
        </div>
        {trend && (
          <div
            className={`text-sm font-semibold ${
              trendUp ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {trend}
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}

