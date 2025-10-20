'use client';

import { useState } from 'react';
import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import { Brain, Sparkles, Target, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIDemo() {
  const [selectedMetric, setSelectedMetric] = useState('health');
  const [analyzing, setAnalyzing] = useState(false);

  const runAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 2000);
  };

  const predictions = {
    health: {
      title: 'Health Risk Assessment',
      score: 92,
      insights: [
        { type: 'success', text: 'Low risk for cardiovascular disease (8% probability)' },
        { type: 'success', text: 'Excellent metabolic health indicators' },
        { type: 'warning', text: 'Slight vitamin D deficiency detected' },
        { type: 'info', text: 'Sleep quality could be improved for optimal recovery' },
      ],
    },
    fitness: {
      title: 'Fitness Performance Prediction',
      score: 85,
      insights: [
        { type: 'success', text: 'On track to reach 5K goal in 3 weeks' },
        { type: 'success', text: 'Strength gains trending 15% above average' },
        { type: 'warning', text: 'Recovery time increasing - consider rest day' },
        { type: 'info', text: 'Optimal workout time: 6-8 AM based on your patterns' },
      ],
    },
    nutrition: {
      title: 'Nutritional Analysis',
      score: 88,
      insights: [
        { type: 'success', text: 'Protein intake optimal for muscle recovery' },
        { type: 'warning', text: 'Fiber intake 20% below recommended levels' },
        { type: 'warning', text: 'Hydration needs improvement (target: 2.5L/day)' },
        { type: 'info', text: 'Meal timing aligned with circadian rhythm' },
      ],
    },
  };

  const currentPrediction = predictions[selectedMetric as keyof typeof predictions];

  return (
    <DemoLayout
      title="AI-Powered Insights"
      description="Machine learning predictions"
      icon={<Brain className="w-6 h-6 text-white" />}
      gradient="from-purple-500 to-indigo-500"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Health Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced machine learning models analyze your health data to provide personalized
            predictions, recommendations, and risk assessments.
          </p>
        </div>

        {/* ML Model Stats */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Model Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Brain className="w-6 h-6 text-white" />}
              label="Prediction Accuracy"
              value="94.2%"
              trend="+2.1%"
              trendUp={true}
              gradient="from-purple-500 to-indigo-500"
            />
            <MetricCard
              icon={<Target className="w-6 h-6 text-white" />}
              label="Models Deployed"
              value="4"
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              label="Predictions Made"
              value="1.2M+"
              gradient="from-green-500 to-emerald-500"
            />
            <MetricCard
              icon={<Sparkles className="w-6 h-6 text-white" />}
              label="Inference Time"
              value="<50ms"
              gradient="from-yellow-500 to-orange-500"
            />
          </div>
        </div>

        {/* Interactive Analysis */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Interactive AI Analysis</h2>
          
          {/* Metric Selector */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { id: 'health', label: 'Health Risk', icon: Heart },
              { id: 'fitness', label: 'Fitness Goals', icon: Activity },
              { id: 'nutrition', label: 'Nutrition', icon: Target },
            ].map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedMetric === metric.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <metric.icon className="w-5 h-5" />
                {metric.label}
              </button>
            ))}
            <button
              onClick={runAnalysis}
              disabled={analyzing}
              className="ml-auto px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {analyzing ? 'Analyzing...' : 'Run Analysis'}
            </button>
          </div>

          {/* Analysis Results */}
          <motion.div
            key={selectedMetric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Score */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{currentPrediction.title}</h3>
                <p className="text-gray-300">AI Confidence Score</p>
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {currentPrediction.score}%
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-3">
              {currentPrediction.insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 p-4 rounded-xl border ${
                    insight.type === 'success'
                      ? 'bg-green-500/10 border-green-500/30'
                      : insight.type === 'warning'
                      ? 'bg-yellow-500/10 border-yellow-500/30'
                      : 'bg-blue-500/10 border-blue-500/30'
                  }`}
                >
                  {insight.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : insight.type === 'warning' ? (
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-gray-200">{insight.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ML Models Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Health Prediction Model</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Architecture:</span>
                <span className="text-white font-semibold">Transformer-based</span>
              </div>
              <div className="flex justify-between">
                <span>Training Data:</span>
                <span className="text-white font-semibold">2.5M records</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="text-white font-semibold">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span>Features:</span>
                <span className="text-white font-semibold">127 inputs</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Recommendation Engine</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Architecture:</span>
                <span className="text-white font-semibold">Collaborative Filtering</span>
              </div>
              <div className="flex justify-between">
                <span>User Profiles:</span>
                <span className="text-white font-semibold">500K+</span>
              </div>
              <div className="flex justify-between">
                <span>Precision:</span>
                <span className="text-white font-semibold">91.8%</span>
              </div>
              <div className="flex justify-between">
                <span>Update Frequency:</span>
                <span className="text-white font-semibold">Real-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Production Features */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Predictive Models</h3>
              <ul className="space-y-1 text-sm">
                <li>• Disease risk assessment</li>
                <li>• Fitness goal achievement</li>
                <li>• Nutrition optimization</li>
                <li>• Sleep quality prediction</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Personalization</h3>
              <ul className="space-y-1 text-sm">
                <li>• Individual health profiles</li>
                <li>• Adaptive recommendations</li>
                <li>• Behavioral pattern learning</li>
                <li>• Context-aware insights</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Continuous Learning</h3>
              <ul className="space-y-1 text-sm">
                <li>• Model retraining pipeline</li>
                <li>• A/B testing framework</li>
                <li>• Performance monitoring</li>
                <li>• Bias detection & mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function Activity({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

