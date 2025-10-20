'use client';

import DemoLayout from '@/components/DemoLayout';
import { Cloud, Server, Database, Zap, GitBranch, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InfrastructureDemo() {
  return (
    <DemoLayout
      title="Cloud Infrastructure"
      description="Kubernetes & cloud deployment"
      icon={<Cloud className="w-6 h-6 text-white" />}
      gradient="from-sky-500 to-blue-600"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-grade Kubernetes deployment on AWS with auto-scaling, monitoring,
            and CI/CD pipelines. Built for reliability and scale.
          </p>
        </div>

        {/* Infrastructure Diagram */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Kubernetes Architecture</h2>
          
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 border border-blue-700">
            {/* Ingress */}
            <div className="mb-6">
              <div className="text-center mb-3">
                <span className="text-blue-300 font-semibold text-sm">Ingress Layer</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center max-w-md mx-auto"
              >
                <Cloud className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">NGINX Ingress Controller</p>
                <p className="text-gray-400 text-xs">SSL/TLS • Load Balancing • Routing</p>
              </motion.div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <div className="text-center mb-3">
                <span className="text-green-300 font-semibold text-sm">Services (Pods)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: 'Backend API', replicas: 3 },
                  { name: 'ML Service', replicas: 2 },
                  { name: 'Worker Jobs', replicas: 2 },
                  { name: 'WebSocket', replicas: 2 },
                ].map((service) => (
                  <motion.div
                    key={service.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center"
                  >
                    <Server className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <p className="text-white text-xs font-semibold">{service.name}</p>
                    <p className="text-gray-400 text-xs">{service.replicas} replicas</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Stores */}
            <div>
              <div className="text-center mb-3">
                <span className="text-orange-300 font-semibold text-sm">Data Layer</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'PostgreSQL', type: 'StatefulSet' },
                  { name: 'Redis', type: 'Deployment' },
                  { name: 'S3', type: 'External' },
                ].map((store) => (
                  <motion.div
                    key={store.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 text-center"
                  >
                    <Database className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                    <p className="text-white text-xs font-semibold">{store.name}</p>
                    <p className="text-gray-400 text-xs">{store.type}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Services */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-400" />
              Compute
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• EKS (Elastic Kubernetes Service)</li>
              <li>• EC2 instances (t3.large+)</li>
              <li>• Auto Scaling Groups</li>
              <li>• Spot instances for cost savings</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-orange-400" />
              Storage
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• RDS PostgreSQL (Multi-AZ)</li>
              <li>• ElastiCache Redis</li>
              <li>• S3 for object storage</li>
              <li>• EBS volumes for persistent data</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-purple-400" />
              Networking
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• VPC with private subnets</li>
              <li>• Application Load Balancer</li>
              <li>• CloudFront CDN</li>
              <li>• Route 53 DNS</li>
            </ul>
          </div>
        </div>

        {/* CI/CD Pipeline */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-green-400" />
            CI/CD Pipeline
          </h2>
          
          <div className="space-y-4">
            {[
              {
                stage: 'Code Commit',
                desc: 'Push to GitHub',
                actions: ['Trigger GitHub Actions', 'Run pre-commit hooks'],
                color: 'blue',
              },
              {
                stage: 'Build & Test',
                desc: 'Automated testing',
                actions: ['Unit tests', 'Integration tests', 'Security scans', 'Build Docker images'],
                color: 'green',
              },
              {
                stage: 'Deploy Staging',
                desc: 'Staging environment',
                actions: ['Deploy to staging cluster', 'Run E2E tests', 'Performance tests'],
                color: 'yellow',
              },
              {
                stage: 'Deploy Production',
                desc: 'Production rollout',
                actions: ['Blue-green deployment', 'Health checks', 'Rollback on failure'],
                color: 'purple',
              },
            ].map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-${stage.color}-500/10 border border-${stage.color}-500/30 rounded-xl p-6`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{stage.stage}</h3>
                    <p className="text-gray-400 text-sm">{stage.desc}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-${stage.color}-500/20 flex items-center justify-center`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {stage.actions.map((action, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className={`w-1.5 h-1.5 bg-${stage.color}-400 rounded-full`} />
                      {action}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monitoring & Observability */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Monitoring Stack</h3>
            <div className="space-y-4">
              {[
                { tool: 'Prometheus', desc: 'Metrics collection & alerting', icon: Zap },
                { tool: 'Grafana', desc: 'Visualization dashboards', icon: Package },
                { tool: 'Loki', desc: 'Log aggregation', icon: Server },
                { tool: 'Sentry', desc: 'Error tracking', icon: Zap },
              ].map((tool) => (
                <div key={tool.tool} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <tool.icon className="w-5 h-5 text-blue-400" />
                    <p className="text-white font-semibold">{tool.tool}</p>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Key Metrics</h3>
            <div className="space-y-3">
              {[
                { metric: 'Request Rate', value: '1,247 req/sec', status: 'good' },
                { metric: 'Error Rate', value: '0.02%', status: 'good' },
                { metric: 'P95 Latency', value: '142ms', status: 'good' },
                { metric: 'CPU Usage', value: '45%', status: 'good' },
                { metric: 'Memory Usage', value: '62%', status: 'warning' },
                { metric: 'Disk I/O', value: '32%', status: 'good' },
              ].map((item) => (
                <div key={item.metric} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300 text-sm">{item.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">{item.value}</span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.status === 'good' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Features */}
        <div className="bg-gradient-to-r from-sky-600/20 to-blue-700/20 border border-sky-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Infrastructure Features</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">High Availability</h3>
              <ul className="space-y-1 text-sm">
                <li>• Multi-AZ deployment</li>
                <li>• Auto-scaling (HPA & VPA)</li>
                <li>• Health checks & self-healing</li>
                <li>• Zero-downtime deployments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Disaster Recovery</h3>
              <ul className="space-y-1 text-sm">
                <li>• Automated backups (daily)</li>
                <li>• Point-in-time recovery</li>
                <li>• Cross-region replication</li>
                <li>• RTO: 1 hour, RPO: 15 minutes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Cost Optimization</h3>
              <ul className="space-y-1 text-sm">
                <li>• Spot instances for non-critical workloads</li>
                <li>• Resource right-sizing</li>
                <li>• S3 lifecycle policies</li>
                <li>• Reserved instances for predictable loads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

