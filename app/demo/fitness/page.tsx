'use client';

import { useState } from 'react';
import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import InteractiveChart from '@/components/InteractiveChart';
import { Activity, Flame, Target, Trophy, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FitnessDemo() {
  const [isTracking, setIsTracking] = useState(false);
  const [reps, setReps] = useState(0);
  const [formScore, setFormScore] = useState(95);

  const weeklyData = [
    { day: 'Mon', calories: 450, duration: 45 },
    { day: 'Tue', calories: 380, duration: 38 },
    { day: 'Wed', calories: 520, duration: 52 },
    { day: 'Thu', calories: 410, duration: 41 },
    { day: 'Fri', calories: 490, duration: 49 },
    { day: 'Sat', calories: 600, duration: 60 },
    { day: 'Sun', calories: 350, duration: 35 },
  ];

  const startWorkout = () => {
    setIsTracking(true);
    const interval = setInterval(() => {
      setReps((prev) => {
        if (prev >= 12) {
          clearInterval(interval);
          setIsTracking(false);
          return 12;
        }
        return prev + 1;
      });
      setFormScore(95 + Math.floor(Math.random() * 5));
    }, 1000);
  };

  return (
    <DemoLayout
      title="Fitness Tracking"
      description="AI-powered workout analysis"
      icon={<Activity className="w-6 h-6 text-white" />}
      gradient="from-green-500 to-emerald-500"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fitness Tracking & Pose Estimation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Computer vision-powered workout tracking with real-time form correction and
            rep counting using advanced pose estimation models.
          </p>
        </div>

        {/* Workout Stats */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Today's Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Flame className="w-6 h-6 text-white" />}
              label="Calories Burned"
              value="485"
              trend="+12%"
              trendUp={true}
              gradient="from-orange-500 to-red-500"
            />
            <MetricCard
              icon={<Activity className="w-6 h-6 text-white" />}
              label="Active Minutes"
              value="48"
              gradient="from-green-500 to-emerald-500"
            />
            <MetricCard
              icon={<Target className="w-6 h-6 text-white" />}
              label="Exercises"
              value="8"
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<Trophy className="w-6 h-6 text-white" />}
              label="Weekly Streak"
              value="12 days"
              gradient="from-yellow-500 to-orange-500"
            />
          </div>
        </div>

        {/* Live Pose Estimation Demo */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Live Pose Estimation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Feed Simulation */}
            <div>
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border-2 border-green-500/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <Activity className="w-16 h-16 text-white" />
                    </motion.div>
                    <p className="text-white font-semibold mb-4">
                      {isTracking ? 'Tracking Active' : 'Ready to Track'}
                    </p>
                    <button
                      onClick={() => {
                        if (!isTracking) {
                          setReps(0);
                          startWorkout();
                        }
                      }}
                      disabled={isTracking}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2 mx-auto"
                    >
                      {isTracking ? (
                        <>
                          <Pause className="w-5 h-5" />
                          Tracking...
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          Start Exercise
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Pose Overlay */}
                {isTracking && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 left-4 right-4 flex justify-between"
                  >
                    <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-green-400 font-semibold">Tracking Active</p>
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-white font-semibold">Form: {formScore}%</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Exercise: Squats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Reps Completed</span>
                      <span className="text-white font-semibold">{reps} / 12</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(reps / 12) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Form Score</span>
                      <span className="text-white font-semibold">{formScore}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                        style={{ width: `${formScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Form Feedback</h3>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-1">✓ Excellent depth</p>
                  <p className="text-gray-300 text-sm">Knees tracking over toes correctly</p>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-1">✓ Good back alignment</p>
                  <p className="text-gray-300 text-sm">Spine neutral throughout movement</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold mb-1">⚠ Slight forward lean</p>
                  <p className="text-gray-300 text-sm">Try to keep chest more upright</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Weekly Progress</h2>
          <div className="space-y-6">
            <InteractiveChart
              data={weeklyData}
              type="bar"
              dataKey="calories"
              xKey="day"
              color="#10b981"
              height={300}
            />
          </div>
        </div>

        {/* Production Features */}
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Computer Vision Features</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Pose Estimation</h3>
              <ul className="space-y-1 text-sm">
                <li>• 33-point body tracking</li>
                <li>• Real-time joint angle analysis</li>
                <li>• Movement pattern recognition</li>
                <li>• Rep counting automation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Form Correction</h3>
              <ul className="space-y-1 text-sm">
                <li>• Real-time feedback</li>
                <li>• Injury risk detection</li>
                <li>• Technique optimization</li>
                <li>• Video playback analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Workout Library</h3>
              <ul className="space-y-1 text-sm">
                <li>• 200+ exercises supported</li>
                <li>• Custom workout builder</li>
                <li>• Progressive overload tracking</li>
                <li>• Personal records logging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

