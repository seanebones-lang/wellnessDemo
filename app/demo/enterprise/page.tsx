'use client';

import { useState } from 'react';
import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import InteractiveChart from '@/components/InteractiveChart';
import { Users, TrendingUp, Award, DollarSign, Building, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnterpriseDemo() {
  const [selectedCompany, setSelectedCompany] = useState('acme');

  const companyData = {
    acme: {
      name: 'Acme Corporation',
      employees: 2500,
      activeUsers: 1875,
      engagement: 75,
      healthScore: 82,
    },
    techco: {
      name: 'TechCo Inc',
      employees: 1200,
      activeUsers: 1080,
      engagement: 90,
      healthScore: 88,
    },
  };

  const engagementData = [
    { month: 'Jan', users: 1200, engagement: 65 },
    { month: 'Feb', users: 1350, engagement: 68 },
    { month: 'Mar', users: 1500, engagement: 72 },
    { month: 'Apr', users: 1650, engagement: 75 },
    { month: 'May', users: 1750, engagement: 78 },
    { month: 'Jun', users: 1875, engagement: 75 },
  ];

  const currentCompany = companyData[selectedCompany as keyof typeof companyData];

  return (
    <DemoLayout
      title="Enterprise Portal"
      description="B2B corporate wellness dashboard"
      icon={<Users className="w-6 h-6 text-white" />}
      gradient="from-indigo-500 to-purple-500"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise Wellness Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive corporate wellness platform for HR teams and wellness coordinators.
            Track employee engagement, health outcomes, and ROI metrics.
          </p>
        </div>

        {/* Company Selector */}
        <div className="flex gap-4 justify-center mb-8">
          {Object.entries(companyData).map(([key, company]) => (
            <button
              key={key}
              onClick={() => setSelectedCompany(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCompany === key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          key={selectedCompany}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Users className="w-6 h-6 text-white" />}
              label="Total Employees"
              value={currentCompany.employees.toLocaleString()}
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<UserCheck className="w-6 h-6 text-white" />}
              label="Active Users"
              value={currentCompany.activeUsers.toLocaleString()}
              trend="+12%"
              trendUp={true}
              gradient="from-green-500 to-emerald-500"
            />
            <MetricCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              label="Engagement Rate"
              value={`${currentCompany.engagement}%`}
              trend="+5%"
              trendUp={true}
              gradient="from-purple-500 to-pink-500"
            />
            <MetricCard
              icon={<Award className="w-6 h-6 text-white" />}
              label="Health Score"
              value={`${currentCompany.healthScore}/100`}
              trend="+8%"
              trendUp={true}
              gradient="from-orange-500 to-yellow-500"
            />
          </div>
        </motion.div>

        {/* Engagement Trends */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Engagement Trends</h2>
          <InteractiveChart
            data={engagementData}
            type="area"
            dataKey="users"
            xKey="month"
            color="#8b5cf6"
            height={300}
          />
        </div>

        {/* Program Performance */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Popular Programs</h3>
            <div className="space-y-4">
              {[
                { name: 'Fitness Challenges', participation: 68, color: 'green' },
                { name: 'Mental Health Support', participation: 54, color: 'blue' },
                { name: 'Nutrition Coaching', participation: 42, color: 'orange' },
                { name: 'Sleep Optimization', participation: 38, color: 'purple' },
              ].map((program) => (
                <div key={program.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{program.name}</span>
                    <span className="text-white font-semibold">{program.participation}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-${program.color}-500 h-2 rounded-full`}
                      style={{ width: `${program.participation}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">ROI Metrics</h3>
            <div className="space-y-4">
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Healthcare Cost Reduction</span>
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">$1.2M</div>
                <div className="text-sm text-gray-400">Annual savings</div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Absenteeism Reduction</span>
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white">23%</div>
                <div className="text-sm text-gray-400">Fewer sick days</div>
              </div>
              
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Employee Satisfaction</span>
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">+18%</div>
                <div className="text-sm text-gray-400">Improvement in surveys</div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Department Breakdown</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { dept: 'Engineering', users: 450, engagement: 82 },
              { dept: 'Sales', users: 320, engagement: 76 },
              { dept: 'Marketing', users: 180, engagement: 88 },
              { dept: 'Operations', users: 280, engagement: 71 },
            ].map((dept) => (
              <div key={dept.dept} className="bg-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">{dept.dept}</h4>
                <div className="text-2xl font-bold text-purple-400 mb-1">{dept.users}</div>
                <div className="text-sm text-gray-400">Users</div>
                <div className="mt-3 text-sm">
                  <span className="text-gray-300">Engagement: </span>
                  <span className="text-white font-semibold">{dept.engagement}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Enterprise Features</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Administration</h3>
              <ul className="space-y-1 text-sm">
                <li>• Bulk user management</li>
                <li>• SSO integration (SAML, OAuth)</li>
                <li>• Role-based access control</li>
                <li>• Custom branding & white-label</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Analytics & Reporting</h3>
              <ul className="space-y-1 text-sm">
                <li>• Real-time dashboards</li>
                <li>• Custom report builder</li>
                <li>• Data export (CSV, PDF)</li>
                <li>• Scheduled report delivery</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Integration & API</h3>
              <ul className="space-y-1 text-sm">
                <li>• HRIS system integration</li>
                <li>• Benefits platform sync</li>
                <li>• RESTful API access</li>
                <li>• Webhook notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

