'use client';

import { useState } from 'react';
import DemoLayout from '@/components/DemoLayout';
import { Smartphone, Home, Heart, Activity, Apple, User, Bell, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileDemo() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const screens = {
    dashboard: {
      title: 'Dashboard',
      content: (
        <div className="space-y-4 p-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Daily Summary</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <div className="text-2xl font-bold">8,432</div>
                <div className="text-xs opacity-80">Steps</div>
              </div>
              <div>
                <div className="text-2xl font-bold">485</div>
                <div className="text-xs opacity-80">Calories</div>
              </div>
              <div>
                <div className="text-2xl font-bold">48</div>
                <div className="text-xs opacity-80">Active Min</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="font-semibold text-white mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-left">
                <Heart className="w-5 h-5 text-red-400 mb-1" />
                <div className="text-sm text-white">Log Health</div>
              </button>
              <button className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-left">
                <Activity className="w-5 h-5 text-green-400 mb-1" />
                <div className="text-sm text-white">Start Workout</div>
              </button>
              <button className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 text-left">
                <Apple className="w-5 h-5 text-orange-400 mb-1" />
                <div className="text-sm text-white">Log Meal</div>
              </button>
              <button className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 text-left">
                <Bell className="w-5 h-5 text-blue-400 mb-1" />
                <div className="text-sm text-white">Reminders</div>
              </button>
            </div>
          </div>
        </div>
      ),
    },
    health: {
      title: 'Health',
      content: (
        <div className="space-y-4 p-4">
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="font-semibold text-white mb-3">Current Vitals</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Heart Rate</span>
                <span className="text-white font-semibold">72 BPM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Blood Pressure</span>
                <span className="text-white font-semibold">120/80</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Blood Oxygen</span>
                <span className="text-white font-semibold">98%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
            <h4 className="font-semibold text-green-400 mb-2">Health Score: 92/100</h4>
            <p className="text-gray-300 text-sm">Your health metrics are excellent. Keep up the great work!</p>
          </div>
        </div>
      ),
    },
    fitness: {
      title: 'Fitness',
      content: (
        <div className="space-y-4 p-4">
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="font-semibold text-white mb-3">Today's Workout</h4>
            <div className="space-y-2">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Upper Body Strength</span>
                  <span className="text-green-400 text-sm">Completed</span>
                </div>
                <div className="text-gray-300 text-sm mt-1">45 minutes • 8 exercises</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="font-semibold text-white mb-3">Weekly Goal</h4>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">5 of 5 workouts</span>
                <span className="text-white font-semibold">100%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    nutrition: {
      title: 'Nutrition',
      content: (
        <div className="space-y-4 p-4">
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="font-semibold text-white mb-3">Today's Meals</h4>
            <div className="space-y-2">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-semibold">Breakfast</span>
                  <span className="text-gray-300 text-sm">450 cal</span>
                </div>
                <div className="text-gray-400 text-xs">Power Breakfast Bowl</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-semibold">Lunch</span>
                  <span className="text-gray-300 text-sm">580 cal</span>
                </div>
                <div className="text-gray-400 text-xs">Mediterranean Chicken Bowl</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="font-semibold text-white mb-3">Macros</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Protein: 108g / 150g</span>
                  <span className="text-white">72%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <DemoLayout
      title="Mobile App"
      description="React Native cross-platform app"
      icon={<Smartphone className="w-6 h-6 text-white" />}
      gradient="from-blue-500 to-cyan-500"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mobile App Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cross-platform mobile application built with React Native. Seamless experience
            on iOS and Android with offline support and real-time sync.
          </p>
        </div>

        {/* Interactive Phone Demo */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-[375px] h-[750px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10" />
              
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-between px-6 pt-2 z-20">
                <span className="text-white text-xs">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-3 border border-white rounded-sm" />
                  <div className="text-white text-xs">100%</div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-12 pb-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreen}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full overflow-y-auto"
                  >
                    <div className="p-4">
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {screens[currentScreen as keyof typeof screens].title}
                      </h2>
                      {screens[currentScreen as keyof typeof screens].content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-lg border-t border-white/10 flex items-center justify-around px-4 pb-4">
                {[
                  { id: 'dashboard', icon: Home, label: 'Home' },
                  { id: 'health', icon: Heart, label: 'Health' },
                  { id: 'fitness', icon: Activity, label: 'Fitness' },
                  { id: 'nutrition', icon: Apple, label: 'Nutrition' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentScreen(tab.id)}
                    className={`flex flex-col items-center gap-1 transition-colors ${
                      currentScreen === tab.id ? 'text-purple-400' : 'text-gray-400'
                    }`}
                  >
                    <tab.icon className="w-6 h-6" />
                    <span className="text-xs">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Cross-Platform</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Single codebase for iOS & Android</li>
              <li>• Native performance</li>
              <li>• Platform-specific optimizations</li>
              <li>• Consistent UX across devices</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Offline Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Local data caching</li>
              <li>• Offline-first architecture</li>
              <li>• Background sync</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Integrations</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Apple Health & Google Fit</li>
              <li>• Wearable device sync</li>
              <li>• Push notifications</li>
              <li>• Social sharing</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Mobile Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Framework</h3>
              <ul className="space-y-1 text-sm">
                <li>• React Native 0.72+</li>
                <li>• TypeScript</li>
                <li>• Expo for rapid development</li>
                <li>• React Navigation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">State Management</h3>
              <ul className="space-y-1 text-sm">
                <li>• Redux Toolkit</li>
                <li>• React Query</li>
                <li>• AsyncStorage</li>
                <li>• Redux Persist</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Native Features</h3>
              <ul className="space-y-1 text-sm">
                <li>• Camera & photo library</li>
                <li>• Biometric authentication</li>
                <li>• Background tasks</li>
                <li>• Local notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

