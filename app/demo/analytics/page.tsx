'use client';

import { useState, useEffect } from 'react';
import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import InteractiveChart from '@/components/InteractiveChart';
import { TrendingUp, Users, Activity, Target, BarChart3, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnalyticsDemo() {
  const [realtimeUsers, setRealtimeUsers] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeUsers((prev) => prev + Math.floor(Math.random() * 20 - 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const userGrowthData = [
    { month: 'Jan', users: 12500, revenue: 125000 },
    { month: 'Feb', users: 15200, revenue: 152000 },
    { month: 'Mar', users: 18900, revenue: 189000 },
    { month: 'Apr', users: 23400, revenue: 234000 },
    { month: 'May', users: 28100, revenue: 281000 },
    { month: 'Jun', users: 34200, revenue: 342000 },
  ];

  const engagementData = [
    { day: 'Mon', sessions: 8500 },
    { day: 'Tue', sessions: 9200 },
    { day: 'Wed', sessions: 8800 },
    { day: 'Thu', sessions: 9500 },
    { day: 'Fri', sessions: 8200 },
    { day: 'Sat', sessions: 6800 },
    { day: 'Sun', sessions: 7100 },
  ];

  return (
    <DemoLayout
      title="Analytics Dashboard"
      description="Real-time metrics and insights"
      icon={<TrendingUp className="w-6 h-6 text-white" />}
      gradient="from-teal-500 to-green-600"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Analytics & Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics dashboard with comprehensive metrics, user insights,
            and business intelligence for data-driven decision making.
          </p>
        </div>

        {/* Real-time Metrics */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Real-Time Metrics</h2>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <span className="text-gray-300 text-sm">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Users className="w-6 h-6 text-white" />}
              label="Active Users"
              value={realtimeUsers.toLocaleString()}
              trend="+8.2%"
              trendUp={true}
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<Activity className="w-6 h-6 text-white" />}
              label="Sessions Today"
              value="8,945"
              trend="+12.5%"
              trendUp={true}
              gradient="from-green-500 to-emerald-500"
            />
            <MetricCard
              icon={<Target className="w-6 h-6 text-white" />}
              label="Conversion Rate"
              value="3.8%"
              trend="+0.4%"
              trendUp={true}
              gradient="from-purple-500 to-pink-500"
            />
            <MetricCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              label="Revenue Today"
              value="$12.4K"
              trend="+15.2%"
              trendUp={true}
              gradient="from-orange-500 to-yellow-500"
            />
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">User Growth & Revenue</h2>
          <InteractiveChart
            data={userGrowthData}
            type="area"
            dataKey="users"
            xKey="month"
            color="#10b981"
            height={300}
          />
        </div>

        {/* Engagement Metrics */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Weekly Engagement</h3>
            <InteractiveChart
              data={engagementData}
              type="bar"
              dataKey="sessions"
              xKey="day"
              color="#8b5cf6"
              height={250}
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">User Segments</h3>
            <div className="space-y-4">
              {[
                { segment: 'Premium Users', count: 12400, percentage: 36, color: 'purple' },
                { segment: 'Free Users', count: 21800, percentage: 64, color: 'blue' },
                { segment: 'Enterprise', count: 8500, percentage: 25, color: 'green' },
                { segment: 'Trial Users', count: 3200, percentage: 9, color: 'orange' },
              ].map((segment) => (
                <div key={segment.segment}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{segment.segment}</span>
                    <span className="text-white font-semibold">
                      {segment.count.toLocaleString()} ({segment.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-${segment.color}-500 h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${segment.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Usage */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Feature Usage</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { feature: 'Health Tracking', usage: 89, icon: Activity },
              { feature: 'Fitness Plans', usage: 76, icon: Target },
              { feature: 'Nutrition Logs', usage: 68, icon: PieChart },
              { feature: 'AI Insights', usage: 82, icon: BarChart3 },
            ].map((item) => (
              <div key={item.feature} className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="w-8 h-8 text-teal-400" />
                  <span className="text-2xl font-bold text-white">{item.usage}%</span>
                </div>
                <h4 className="font-semibold text-white mb-2">{item.feature}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-green-500 h-2 rounded-full"
                    style={{ width: `${item.usage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">API Response Time</span>
                <span className="text-green-400 font-semibold">142ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Uptime (30 days)</span>
                <span className="text-green-400 font-semibold">99.98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Error Rate</span>
                <span className="text-green-400 font-semibold">0.02%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Database Queries/sec</span>
                <span className="text-white font-semibold">1,247</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">User Satisfaction</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">App Store Rating</span>
                <span className="text-yellow-400 font-semibold">4.8 / 5.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">NPS Score</span>
                <span className="text-green-400 font-semibold">72</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Support Tickets</span>
                <span className="text-white font-semibold">24 open</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg. Resolution Time</span>
                <span className="text-white font-semibold">4.2 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Business Metrics</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">MRR</span>
                <span className="text-green-400 font-semibold">$342K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Churn Rate</span>
                <span className="text-green-400 font-semibold">2.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">LTV</span>
                <span className="text-white font-semibold">$1,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">CAC</span>
                <span className="text-white font-semibold">$124</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Features */}
        <div className="bg-gradient-to-r from-teal-600/20 to-green-600/20 border border-teal-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Analytics Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Real-Time Data</h3>
              <ul className="space-y-1 text-sm">
                <li>• Live user tracking</li>
                <li>• Event stream processing</li>
                <li>• Real-time dashboards</li>
                <li>• Instant alerts & notifications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Advanced Analytics</h3>
              <ul className="space-y-1 text-sm">
                <li>• Cohort analysis</li>
                <li>• Funnel visualization</li>
                <li>• A/B testing framework</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Data Export</h3>
              <ul className="space-y-1 text-sm">
                <li>• CSV, JSON, PDF export</li>
                <li>• Scheduled reports</li>
                <li>• API access to raw data</li>
                <li>• Data warehouse integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

