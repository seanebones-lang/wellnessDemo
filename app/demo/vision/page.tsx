'use client';

import { useState } from 'react';
import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import { Camera, Scan, Target, Zap, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisionDemo() {
  const [isScanning, setIsScanning] = useState(false);
  const [detectedPose, setDetectedPose] = useState('Standing');
  const [confidence, setConfidence] = useState(98);

  const startScan = () => {
    setIsScanning(true);
    const poses = ['Standing', 'Squatting', 'Lunging', 'Plank', 'Push-up'];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % poses.length;
      setDetectedPose(poses[index]);
      setConfidence(95 + Math.floor(Math.random() * 5));
      
      if (index === poses.length - 1) {
        clearInterval(interval);
        setIsScanning(false);
      }
    }, 2000);
  };

  const keypoints = [
    { name: 'Left Shoulder', x: 35, y: 30, active: isScanning },
    { name: 'Right Shoulder', x: 65, y: 30, active: isScanning },
    { name: 'Left Elbow', x: 25, y: 45, active: isScanning },
    { name: 'Right Elbow', x: 75, y: 45, active: isScanning },
    { name: 'Left Hip', x: 40, y: 55, active: isScanning },
    { name: 'Right Hip', x: 60, y: 55, active: isScanning },
    { name: 'Left Knee', x: 38, y: 75, active: isScanning },
    { name: 'Right Knee', x: 62, y: 75, active: isScanning },
  ];

  return (
    <DemoLayout
      title="Computer Vision"
      description="Pose estimation & form analysis"
      icon={<Camera className="w-6 h-6 text-white" />}
      gradient="from-violet-500 to-purple-600"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Computer Vision & Pose Estimation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced computer vision models for real-time pose detection, form analysis,
            and movement tracking using state-of-the-art deep learning.
          </p>
        </div>

        {/* Model Performance */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Model Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Zap className="w-6 h-6 text-white" />}
              label="Inference Speed"
              value="<50ms"
              gradient="from-yellow-500 to-orange-500"
            />
            <MetricCard
              icon={<Target className="w-6 h-6 text-white" />}
              label="Accuracy"
              value="96.8%"
              gradient="from-green-500 to-emerald-500"
            />
            <MetricCard
              icon={<Scan className="w-6 h-6 text-white" />}
              label="Keypoints Tracked"
              value="33"
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<Camera className="w-6 h-6 text-white" />}
              label="Frame Rate"
              value="30 FPS"
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </div>

        {/* Live Pose Detection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Live Pose Detection</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Feed Simulation */}
            <div>
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border-2 border-purple-500/50">
                {/* Simulated Person */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Body Lines */}
                    {isScanning && (
                      <>
                        <line x1="35" y1="30" x2="65" y2="30" stroke="#8b5cf6" strokeWidth="2" />
                        <line x1="35" y1="30" x2="25" y2="45" stroke="#8b5cf6" strokeWidth="2" />
                        <line x1="65" y1="30" x2="75" y2="45" stroke="#8b5cf6" strokeWidth="2" />
                        <line x1="50" y1="30" x2="50" y2="55" stroke="#8b5cf6" strokeWidth="2" />
                        <line x1="40" y1="55" x2="60" y2="55" stroke="#8b5cf6" strokeWidth="2" />
                        <line x1="40" y1="55" x2="38" y2="75" stroke="#8b5cf6" strokeWidth="2" />
                        <line x1="60" y1="55" x2="62" y2="75" stroke="#8b5cf6" strokeWidth="2" />
                      </>
                    )}
                    
                    {/* Keypoints */}
                    {keypoints.map((point, index) => (
                      <motion.circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="2"
                        fill={point.active ? '#a78bfa' : '#6b7280'}
                        initial={{ scale: 0 }}
                        animate={{ scale: point.active ? [1, 1.3, 1] : 1 }}
                        transition={{ repeat: point.active ? Infinity : 0, duration: 1 }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Overlay Info */}
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 left-4 right-4 flex justify-between"
                  >
                    <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-purple-400 font-semibold">Detecting...</p>
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-white font-semibold">{confidence}% confidence</p>
                    </div>
                  </motion.div>
                )}

                {/* Center Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => {
                      if (!isScanning) startScan();
                    }}
                    disabled={isScanning}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    {isScanning ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Start Detection
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Detection Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Detected Pose</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={detectedPose}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                      {detectedPose}
                    </div>
                    <div className="text-sm text-gray-300">
                      Confidence: {confidence}%
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Keypoint Detection</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {keypoints.slice(0, 6).map((point, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        point.active
                          ? 'bg-purple-500/20 border border-purple-500/30'
                          : 'bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">{point.name}</span>
                        {point.active && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Exercises */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Supported Exercises</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Squats', count: 1247 },
              { name: 'Push-ups', count: 892 },
              { name: 'Lunges', count: 734 },
              { name: 'Planks', count: 1089 },
              { name: 'Deadlifts', count: 456 },
              { name: 'Bicep Curls', count: 623 },
              { name: 'Shoulder Press', count: 512 },
              { name: 'Yoga Poses', count: 2134 },
            ].map((exercise) => (
              <div key={exercise.name} className="bg-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-1">{exercise.name}</h4>
                <div className="text-sm text-gray-400">
                  {exercise.count.toLocaleString()} sessions tracked
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Model Architecture</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Base Model:</span>
                <span className="text-white font-semibold">MoveNet Thunder</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Framework:</span>
                <span className="text-white font-semibold">TensorFlow Lite</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Input Size:</span>
                <span className="text-white font-semibold">256x256</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Model Size:</span>
                <span className="text-white font-semibold">12.6 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Keypoints:</span>
                <span className="text-white font-semibold">33 points (COCO format)</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Capabilities</h3>
            <div className="space-y-3">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 font-semibold mb-1">✓ Real-time Processing</p>
                <p className="text-gray-300 text-xs">30 FPS on mobile devices</p>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 font-semibold mb-1">✓ Multi-person Detection</p>
                <p className="text-gray-300 text-xs">Track up to 6 people simultaneously</p>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 font-semibold mb-1">✓ Angle Calculation</p>
                <p className="text-gray-300 text-xs">Precise joint angle measurements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Production Features */}
        <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Computer Vision Features</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Pose Estimation</h3>
              <ul className="space-y-1 text-sm">
                <li>• 33-point body tracking</li>
                <li>• Real-time joint angles</li>
                <li>• Movement velocity tracking</li>
                <li>• Range of motion analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Form Analysis</h3>
              <ul className="space-y-1 text-sm">
                <li>• Automatic rep counting</li>
                <li>• Form score calculation</li>
                <li>• Real-time corrections</li>
                <li>• Injury risk detection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Advanced Features</h3>
              <ul className="space-y-1 text-sm">
                <li>• Video playback analysis</li>
                <li>• Side-by-side comparison</li>
                <li>• Progress tracking</li>
                <li>• Export & sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

