'use client';

import DemoLayout from '@/components/DemoLayout';
import { Database, Server, Layers, Code, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BackendDemo() {
  return (
    <DemoLayout
      title="Backend Architecture"
      description="System design & infrastructure"
      icon={<Database className="w-6 h-6 text-white" />}
      gradient="from-gray-600 to-gray-800"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Backend Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-grade backend infrastructure built with FastAPI, PostgreSQL, and Redis.
            Microservices architecture with comprehensive API documentation.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">System Architecture</h2>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
            {/* Client Layer */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <span className="text-blue-400 font-semibold">Client Layer</span>
              </div>
              <div className="flex justify-center gap-4">
                {['Mobile App', 'Web App', 'Enterprise Portal'].map((client) => (
                  <motion.div
                    key={client}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center"
                  >
                    <p className="text-white text-sm">{client}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-purple-500" />
            </div>

            {/* API Gateway */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <span className="text-purple-400 font-semibold">API Gateway</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-6 text-center max-w-md mx-auto"
              >
                <Server className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">NGINX Load Balancer</p>
                <p className="text-gray-400 text-sm">Rate Limiting • SSL Termination • Routing</p>
              </motion.div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-green-500" />
            </div>

            {/* Services Layer */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <span className="text-green-400 font-semibold">Services Layer</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Auth Service', icon: Shield },
                  { name: 'Health API', icon: Server },
                  { name: 'ML Service', icon: Zap },
                  { name: 'Analytics', icon: Layers },
                ].map((service) => (
                  <motion.div
                    key={service.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                  >
                    <service.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-white text-sm">{service.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-gradient-to-b from-green-500 to-orange-500" />
            </div>

            {/* Data Layer */}
            <div>
              <div className="text-center mb-4">
                <span className="text-orange-400 font-semibold">Data Layer</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'PostgreSQL', desc: 'Primary Database' },
                  { name: 'Redis', desc: 'Cache & Sessions' },
                  { name: 'S3', desc: 'File Storage' },
                ].map((db) => (
                  <motion.div
                    key={db.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 text-center"
                  >
                    <Database className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-white text-sm font-semibold">{db.name}</p>
                    <p className="text-gray-400 text-xs">{db.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              Backend Stack
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Framework</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• FastAPI (Python 3.11+)</li>
                  <li>• Async/await architecture</li>
                  <li>• Pydantic for validation</li>
                  <li>• SQLAlchemy ORM</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">API Features</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• RESTful endpoints (50+)</li>
                  <li>• WebSocket support</li>
                  <li>• OpenAPI documentation</li>
                  <li>• GraphQL gateway</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-orange-400" />
              Database Design
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">PostgreSQL</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 25+ normalized tables</li>
                  <li>• JSONB for flexible data</li>
                  <li>• Full-text search</li>
                  <li>• Partitioning for scale</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Redis</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Session management</li>
                  <li>• API response caching</li>
                  <li>• Rate limiting</li>
                  <li>• Real-time pub/sub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { method: 'POST', path: '/api/v1/auth/login', desc: 'User authentication' },
              { method: 'GET', path: '/api/v1/health/metrics', desc: 'Retrieve health data' },
              { method: 'POST', path: '/api/v1/ml/predict', desc: 'AI predictions' },
              { method: 'GET', path: '/api/v1/nutrition/plan', desc: 'Meal plans' },
              { method: 'POST', path: '/api/v1/fitness/workout', desc: 'Log workout' },
              { method: 'GET', path: '/api/v1/analytics/dashboard', desc: 'Analytics data' },
            ].map((endpoint, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg p-4 font-mono text-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      endpoint.method === 'GET'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <span className="text-gray-300">{endpoint.path}</span>
                </div>
                <p className="text-gray-400 text-xs">{endpoint.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Optimizations */}
        <div className="bg-gradient-to-r from-gray-700/20 to-gray-900/20 border border-gray-600/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Performance Optimizations</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Caching Strategy</h3>
              <ul className="space-y-1 text-sm">
                <li>• Redis for hot data</li>
                <li>• CDN for static assets</li>
                <li>• Database query caching</li>
                <li>• Aggressive cache invalidation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Database Optimization</h3>
              <ul className="space-y-1 text-sm">
                <li>• Indexed foreign keys</li>
                <li>• Connection pooling</li>
                <li>• Query optimization</li>
                <li>• Read replicas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">API Performance</h3>
              <ul className="space-y-1 text-sm">
                <li>• Async I/O operations</li>
                <li>• Response compression</li>
                <li>• Pagination & filtering</li>
                <li>• Rate limiting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Code Example</h2>
          <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`# FastAPI Endpoint Example
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()

@router.get("/health/metrics")
async def get_health_metrics(
    user_id: int,
    db: AsyncSession = Depends(get_db),
    cache: Redis = Depends(get_redis)
):
    # Check cache first
    cached = await cache.get(f"metrics:{user_id}")
    if cached:
        return cached
    
    # Query database
    metrics = await db.execute(
        select(HealthMetric)
        .where(HealthMetric.user_id == user_id)
        .order_by(HealthMetric.timestamp.desc())
        .limit(100)
    )
    
    # Cache result
    await cache.setex(
        f"metrics:{user_id}",
        300,  # 5 minutes
        metrics.json()
    )
    
    return metrics`}</code>
            </pre>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

