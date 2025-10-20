'use client';

import { useState, useEffect } from 'react';
import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import InteractiveChart from '@/components/InteractiveChart';
import { Heart, Activity, Droplet, Wind, Thermometer, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HealthDemo() {
  const [heartRate, setHeartRate] = useState(72);
  const [bloodPressure, setBloodPressure] = useState({ systolic: 120, diastolic: 80 });
  const [oxygenLevel, setOxygenLevel] = useState(98);
  const [temperature, setTemperature] = useState(98.6);
  const [chartData, setChartData] = useState<any[]>([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeartRate = 72 + Math.floor(Math.random() * 20 - 10);
      const newOxygen = 98 + Math.floor(Math.random() * 3 - 1);
      const newTemp = 98.6 + (Math.random() * 0.4 - 0.2);
      
      setHeartRate(newHeartRate);
      setOxygenLevel(newOxygen);
      setTemperature(parseFloat(newTemp.toFixed(1)));
      
      setChartData((prev) => {
        const newData = [
          ...prev,
          {
            time: new Date().toLocaleTimeString(),
            heartRate: newHeartRate,
            oxygen: newOxygen,
          },
        ];
        return newData.slice(-20); // Keep last 20 data points
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DemoLayout
      title="Health Monitoring"
      description="Real-time biometric tracking"
      icon={<Heart className="w-6 h-6 text-white" />}
      gradient="from-red-500 to-pink-500"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Health Monitoring Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time biometric tracking with AI-powered health insights. This demo simulates
            live data from wearable devices and health sensors.
          </p>
        </div>

        {/* Real-time Metrics */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Live Biometrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={<Heart className="w-6 h-6 text-white" />}
              label="Heart Rate"
              value={`${heartRate} BPM`}
              trend="+2%"
              trendUp={true}
              gradient="from-red-500 to-pink-500"
            />
            <MetricCard
              icon={<Activity className="w-6 h-6 text-white" />}
              label="Blood Pressure"
              value={`${bloodPressure.systolic}/${bloodPressure.diastolic}`}
              gradient="from-purple-500 to-indigo-500"
            />
            <MetricCard
              icon={<Droplet className="w-6 h-6 text-white" />}
              label="Blood Oxygen"
              value={`${oxygenLevel}%`}
              trend="+1%"
              trendUp={true}
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<Thermometer className="w-6 h-6 text-white" />}
              label="Temperature"
              value={`${temperature}°F`}
              gradient="from-orange-500 to-yellow-500"
            />
          </div>
        </div>

        {/* Real-time Charts */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Real-Time Monitoring</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Heart Rate Trend</h3>
              <InteractiveChart
                data={chartData}
                type="area"
                dataKey="heartRate"
                xKey="time"
                color="#ef4444"
                height={250}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Blood Oxygen Levels</h3>
              <InteractiveChart
                data={chartData}
                type="line"
                dataKey="oxygen"
                xKey="time"
                color="#3b82f6"
                height={250}
              />
            </div>
          </div>
        </div>

        {/* Health Insights */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-400" />
            AI-Powered Health Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-500/20 border border-green-500/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-green-400 mb-2">Excellent Cardiovascular Health</h3>
              <p className="text-gray-300 text-sm">
                Your heart rate variability indicates good cardiovascular fitness. Resting heart rate
                is within optimal range for your age group.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Optimal Oxygen Saturation</h3>
              <p className="text-gray-300 text-sm">
                Blood oxygen levels are excellent. This indicates efficient respiratory function
                and good circulation.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Recommendation: Hydration</h3>
              <p className="text-gray-300 text-sm">
                Based on your activity levels and heart rate patterns, consider increasing water
                intake throughout the day.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Sleep Quality Score: 85/100</h3>
              <p className="text-gray-300 text-sm">
                Your sleep patterns show good consistency. REM cycles are optimal, contributing
                to better recovery and cognitive function.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Production Features</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Wearable Integration</h3>
              <ul className="space-y-1 text-sm">
                <li>• Apple Watch & Fitbit sync</li>
                <li>• Continuous glucose monitors</li>
                <li>• Smart scales & blood pressure cuffs</li>
                <li>• Real-time data streaming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">AI Analysis</h3>
              <ul className="space-y-1 text-sm">
                <li>• Anomaly detection algorithms</li>
                <li>• Predictive health modeling</li>
                <li>• Personalized recommendations</li>
                <li>• Risk assessment scoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Clinical Integration</h3>
              <ul className="space-y-1 text-sm">
                <li>• HIPAA-compliant data storage</li>
                <li>• EHR system integration</li>
                <li>• Provider portal access</li>
                <li>• Automated alerts to clinicians</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

