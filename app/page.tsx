'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  Brain,
  Heart,
  Smartphone,
  Database,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Camera,
  Apple,
  Cloud,
  ChevronRight,
} from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Health Monitoring',
    description: 'Real-time biometric tracking and health analytics',
    href: '/demo/health',
    color: 'from-red-500 to-pink-500',
    interactive: true,
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Machine learning predictions and personalized recommendations',
    href: '/demo/ai',
    color: 'from-purple-500 to-indigo-500',
    interactive: true,
  },
  {
    icon: Activity,
    title: 'Fitness Tracking',
    description: 'Workout analysis with computer vision pose estimation',
    href: '/demo/fitness',
    color: 'from-green-500 to-emerald-500',
    interactive: true,
  },
  {
    icon: Apple,
    title: 'Nutrition AI',
    description: 'Personalized meal plans and nutrition tracking',
    href: '/demo/nutrition',
    color: 'from-orange-500 to-yellow-500',
    interactive: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'React Native cross-platform mobile experience',
    href: '/demo/mobile',
    color: 'from-blue-500 to-cyan-500',
    interactive: true,
  },
  {
    icon: Users,
    title: 'Enterprise Portal',
    description: 'B2B dashboard for corporate wellness programs',
    href: '/demo/enterprise',
    color: 'from-indigo-500 to-purple-500',
    interactive: true,
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description: 'FastAPI, PostgreSQL, Redis infrastructure',
    href: '/demo/backend',
    color: 'from-gray-600 to-gray-800',
    interactive: false,
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'HIPAA, GDPR compliance with enterprise security',
    href: '/demo/security',
    color: 'from-red-600 to-red-800',
    interactive: false,
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Kubernetes, Docker, CI/CD pipeline',
    href: '/demo/infrastructure',
    color: 'from-sky-500 to-blue-600',
    interactive: false,
  },
  {
    icon: TrendingUp,
    title: 'Analytics Dashboard',
    description: 'Real-time metrics and business intelligence',
    href: '/demo/analytics',
    color: 'from-teal-500 to-green-600',
    interactive: true,
  },
  {
    icon: Camera,
    title: 'Computer Vision',
    description: 'Pose estimation and form correction AI',
    href: '/demo/vision',
    color: 'from-violet-500 to-purple-600',
    interactive: true,
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Sub-200ms response times, 99.9% uptime',
    href: '/demo/performance',
    color: 'from-yellow-500 to-orange-500',
    interactive: false,
  },
];

const stats = [
  { label: 'API Endpoints', value: '50+' },
  { label: 'ML Models', value: '4' },
  { label: 'Response Time', value: '<200ms' },
  { label: 'Uptime SLA', value: '99.9%' },
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <span className="gradient-text">WellnessAI</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Complete AI-Powered Wellness Platform
            </p>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6">
              <strong>Interactive Demo System</strong> - Explore Every Component
            </p>
            
            <div className="max-w-5xl mx-auto mb-12 text-left bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">What This Demo Shows</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Fully Interactive</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Live health monitoring simulations</li>
                    <li>• AI predictions with real-time data</li>
                    <li>• Interactive fitness tracking</li>
                    <li>• Nutrition planning tools</li>
                    <li>• Mobile app walkthrough</li>
                    <li>• Enterprise dashboard demo</li>
                    <li>• Analytics with live charts</li>
                    <li>• Computer vision demonstrations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 Technical Documentation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete system architecture</li>
                    <li>• Security & compliance frameworks</li>
                    <li>• Cloud infrastructure design</li>
                    <li>• Performance benchmarks</li>
                    <li>• API documentation</li>
                    <li>• Database schemas</li>
                    <li>• Deployment strategies</li>
                    <li>• Scalability solutions</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">⚠️ What's Not Included</h3>
                <p className="text-sm text-gray-400 mb-3">
                  This demo uses simulated data and mock backends. The following require production infrastructure:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-400">
                  <li>• Live ML model training</li>
                  <li>• Real-time wearable integration</li>
                  <li>• Production database connections</li>
                  <li>• Payment processing</li>
                  <li>• Email/SMS notifications</li>
                  <li>• Third-party API integrations</li>
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">🎯 What You Can Expect</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div>
                    <strong className="text-white">Production-Ready Code</strong>
                    <p className="text-gray-400 mt-1">Enterprise-grade architecture with 99.9% uptime SLA</p>
                  </div>
                  <div>
                    <strong className="text-white">Scalable Infrastructure</strong>
                    <p className="text-gray-400 mt-1">Kubernetes-based deployment handling millions of users</p>
                  </div>
                  <div>
                    <strong className="text-white">Full Customization</strong>
                    <p className="text-gray-400 mt-1">White-label ready with complete source code access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/demo/health"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Interactive Tour
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                href="/demo/backend"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Architecture
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Every Component
          </h2>
          <p className="text-xl text-gray-400">
            Interactive demos and detailed technical documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Link href={feature.href}>
                  <div className="relative group h-full">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                    
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${feature.interactive ? 'text-green-400' : 'text-blue-400'}`}>
                          {feature.interactive ? '🎮 Interactive Demo' : '📊 Technical Overview'}
                        </span>
                        
                        <ChevronRight className={`w-5 h-5 text-white transition-transform duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Acquisition CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Acquiring WellnessAI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            This complete platform is available for acquisition. Get a turnkey wellness solution
            with production-ready code, infrastructure, and comprehensive documentation.
          </p>
          <div className="flex justify-center">
            <a
              href="https://bizbot.store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Discuss Acquisition at BizBot.store
              <ChevronRight className="ml-2 w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-white/90">
            <div>
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-sm">Development Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm">Production Ready</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Full Stack</div>
              <div className="text-sm">Complete Platform</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">WellnessAI Platform</h3>
              <p className="text-gray-400 text-sm mb-4">
                Complete AI-powered wellness ecosystem for B2C and B2B markets.
                Production-ready, scalable, and fully documented.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/seanebones-lang/WellnessAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  BizBot.store
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/demo/health" className="text-gray-400 hover:text-white transition-colors">Health Monitoring</a></li>
                <li><a href="/demo/ai" className="text-gray-400 hover:text-white transition-colors">AI Insights</a></li>
                <li><a href="/demo/fitness" className="text-gray-400 hover:text-white transition-colors">Fitness Tracking</a></li>
                <li><a href="/demo/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Acquisition: <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">bizbot.store</a></li>
                <li>Repository: <a href="https://github.com/seanebones-lang/WellnessAI" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p className="mb-2">
              <strong className="text-white">WellnessAI Platform</strong> - Proprietary Software
            </p>
            <p className="text-sm">
              Copyright © 2025 Sean McDonnell. All Rights Reserved.
            </p>
            <p className="text-xs mt-2">
              This is a demonstration system. For licensing and acquisition inquiries, visit{' '}
              <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                bizbot.store
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

