'use client';

import DemoLayout from '@/components/DemoLayout';
import MetricCard from '@/components/MetricCard';
import InteractiveChart from '@/components/InteractiveChart';
import { Zap, TrendingUp, Activity, Target, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PerformanceDemo() {
  const latencyData = [
    { endpoint: 'Health API', p50: 45, p95: 142, p99: 287 },
    { endpoint: 'Auth API', p50: 38, p95: 98, p99: 156 },
    { endpoint: 'ML Inference', p50: 62, p95: 185, p99: 342 },
    { endpoint: 'Analytics', p50: 78, p95: 234, p99: 456 },
  ];

  const uptimeData = [
    { month: 'Jan', uptime: 99.98 },
    { month: 'Feb', uptime: 99.99 },
    { month: 'Mar', uptime: 99.97 },
    { month: 'Apr', uptime: 99.99 },
    { month: 'May', uptime: 100 },
    { month: 'Jun', uptime: 99.98 },
  ];

  return (
    <DemoLayout
      title="Performance Metrics"
      description="Speed & reliability benchmarks"
      icon={<Zap className="w-6 h-6 text-white" />}
      gradient="from-yellow-500 to-orange-500"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Performance & Reliability
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production metrics demonstrating sub-200ms response times, 99.9% uptime SLA,
            and enterprise-grade reliability at scale.
          </p>
        </div>

        {/* Key Performance Metrics */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              icon={<Zap className="w-6 h-6 text-white" />}
              label="P95 Latency"
              value="<200ms"
              gradient="from-yellow-500 to-orange-500"
            />
            <MetricCard
              icon={<TrendingUp className="w-6 h-6 text-white" />}
              label="Uptime (30 days)"
              value="99.98%"
              gradient="from-green-500 to-emerald-500"
            />
            <MetricCard
              icon={<Activity className="w-6 h-6 text-white" />}
              label="Throughput"
              value="1.2K req/s"
              gradient="from-blue-500 to-cyan-500"
            />
            <MetricCard
              icon={<Target className="w-6 h-6 text-white" />}
              label="Error Rate"
              value="0.02%"
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </div>

        {/* API Latency Breakdown */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">API Latency Breakdown</h2>
          <div className="space-y-4">
            {latencyData.map((api) => (
              <div key={api.endpoint} className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{api.endpoint}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">P50 (Median)</div>
                    <div className="text-2xl font-bold text-green-400">{api.p50}ms</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">P95</div>
                    <div className="text-2xl font-bold text-yellow-400">{api.p95}ms</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">P99</div>
                    <div className="text-2xl font-bold text-orange-400">{api.p99}ms</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 h-2 rounded-full"
                      style={{ width: `${Math.min((api.p95 / 500) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uptime History */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Uptime History</h2>
          <InteractiveChart
            data={uptimeData}
            type="line"
            dataKey="uptime"
            xKey="month"
            color="#10b981"
            height={300}
          />
        </div>

        {/* Performance Optimizations */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Speed Optimizations
            </h3>
            <div className="space-y-3">
              {[
                { feature: 'Redis Caching', impact: '60% faster reads', status: 'active' },
                { feature: 'Database Indexing', impact: '5x query speed', status: 'active' },
                { feature: 'CDN for Static Assets', impact: '80% faster load', status: 'active' },
                { feature: 'Async I/O (uvloop)', impact: '2x throughput', status: 'active' },
                { feature: 'Response Compression', impact: '70% smaller payloads', status: 'active' },
                { feature: 'Connection Pooling', impact: '50% less overhead', status: 'active' },
              ].map((opt) => (
                <div key={opt.feature} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-semibold">{opt.feature}</p>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-400 text-sm">{opt.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-400" />
              Reliability Features
            </h3>
            <div className="space-y-3">
              {[
                { feature: 'Health Checks', impact: 'Auto-healing pods', status: 'active' },
                { feature: 'Circuit Breakers', impact: 'Prevent cascading failures', status: 'active' },
                { feature: 'Rate Limiting', impact: 'Protect from abuse', status: 'active' },
                { feature: 'Retry Logic', impact: 'Handle transient errors', status: 'active' },
                { feature: 'Graceful Degradation', impact: 'Partial service availability', status: 'active' },
                { feature: 'Blue-Green Deployment', impact: 'Zero downtime updates', status: 'active' },
              ].map((feature) => (
                <div key={feature.feature} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-semibold">{feature.feature}</p>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-400 text-sm">{feature.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Load Testing Results */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Load Testing Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                test: 'Normal Load',
                users: '1,000 concurrent',
                rps: '1,247 req/s',
                latency: '142ms (P95)',
                errors: '0.01%',
                status: 'pass',
              },
              {
                test: 'Peak Load',
                users: '5,000 concurrent',
                rps: '5,832 req/s',
                latency: '287ms (P95)',
                errors: '0.08%',
                status: 'pass',
              },
              {
                test: 'Stress Test',
                users: '10,000 concurrent',
                rps: '10,245 req/s',
                latency: '542ms (P95)',
                errors: '1.2%',
                status: 'warning',
              },
            ].map((test) => (
              <div
                key={test.test}
                className={`rounded-xl p-6 border ${
                  test.status === 'pass'
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-yellow-500/10 border-yellow-500/30'
                }`}
              >
                <h3 className="text-lg font-bold text-white mb-4">{test.test}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Concurrent Users:</span>
                    <span className="text-white font-semibold">{test.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Requests/sec:</span>
                    <span className="text-white font-semibold">{test.rps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Latency:</span>
                    <span className="text-white font-semibold">{test.latency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Error Rate:</span>
                    <span className="text-white font-semibold">{test.errors}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {test.status === 'pass' ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">Passed</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold">Needs Optimization</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Targets */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Performance Targets & SLAs</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Response Time</h3>
              <ul className="space-y-1 text-sm">
                <li>• P50 (Median): &lt;50ms</li>
                <li>• P95: &lt;200ms</li>
                <li>• P99: &lt;500ms</li>
                <li>• Target: 99% under 200ms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Availability</h3>
              <ul className="space-y-1 text-sm">
                <li>• Uptime SLA: 99.9%</li>
                <li>• Max downtime: 43 min/month</li>
                <li>• Planned maintenance: Off-peak</li>
                <li>• Incident response: &lt;15 min</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Scalability</h3>
              <ul className="space-y-1 text-sm">
                <li>• Handle 10K concurrent users</li>
                <li>• Auto-scale to 50 pods</li>
                <li>• Database: 10K connections</li>
                <li>• Storage: Unlimited (S3)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

