'use client';

import DemoLayout from '@/components/DemoLayout';
import { Shield, Lock, Key, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SecurityDemo() {
  return (
    <DemoLayout
      title="Security & Compliance"
      description="Enterprise-grade security"
      icon={<Shield className="w-6 h-6 text-white" />}
      gradient="from-red-600 to-red-800"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security with HIPAA and GDPR compliance. Multi-layered protection
            for sensitive health data with comprehensive audit logging.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'HIPAA Compliant', color: 'blue' },
            { name: 'GDPR Ready', color: 'green' },
            { name: 'SOC 2 Type II', color: 'purple' },
            { name: 'ISO 27001', color: 'orange' },
          ].map((badge) => (
            <motion.div
              key={badge.name}
              whileHover={{ scale: 1.05 }}
              className={`bg-${badge.color}-500/20 border border-${badge.color}-500/30 rounded-xl p-6 text-center`}
            >
              <CheckCircle className={`w-12 h-12 text-${badge.color}-400 mx-auto mb-3`} />
              <p className="text-white font-semibold">{badge.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Security Layers */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Security Architecture</h2>
          
          <div className="space-y-4">
            {[
              {
                layer: 'Application Layer',
                icon: Shield,
                features: [
                  'JWT authentication with refresh tokens',
                  'Role-based access control (RBAC)',
                  'Input validation & sanitization',
                  'CSRF & XSS protection',
                ],
                color: 'red',
              },
              {
                layer: 'Network Layer',
                icon: Lock,
                features: [
                  'TLS 1.3 encryption in transit',
                  'WAF (Web Application Firewall)',
                  'DDoS protection',
                  'IP whitelisting for admin access',
                ],
                color: 'orange',
              },
              {
                layer: 'Data Layer',
                icon: Key,
                features: [
                  'AES-256 encryption at rest',
                  'Database field-level encryption',
                  'Secure key management (AWS KMS)',
                  'Automated backup encryption',
                ],
                color: 'yellow',
              },
              {
                layer: 'Compliance Layer',
                icon: FileCheck,
                features: [
                  'Comprehensive audit logging',
                  'PHI access tracking',
                  'Data retention policies',
                  'Right to erasure (GDPR)',
                ],
                color: 'green',
              },
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-${layer.color}-500/10 border border-${layer.color}-500/30 rounded-xl p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${layer.color}-500/20`}>
                    <layer.icon className={`w-6 h-6 text-${layer.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{layer.layer}</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-300 text-sm">
                  {layer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 text-${layer.color}-400 flex-shrink-0 mt-0.5`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Authentication Flow */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Authentication & Authorization</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Authentication Methods</h3>
              <div className="space-y-3">
                {[
                  { method: 'Email/Password', desc: 'Bcrypt hashing with salt' },
                  { method: 'OAuth 2.0', desc: 'Google, Apple, Facebook' },
                  { method: 'SSO (SAML)', desc: 'Enterprise identity providers' },
                  { method: 'Biometric', desc: 'Face ID, Touch ID on mobile' },
                  { method: 'MFA', desc: 'TOTP, SMS, Email verification' },
                ].map((auth) => (
                  <div key={auth.method} className="bg-white/5 rounded-lg p-4">
                    <p className="text-white font-semibold mb-1">{auth.method}</p>
                    <p className="text-gray-400 text-sm">{auth.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Access Control</h3>
              <div className="space-y-3">
                {[
                  { role: 'User', permissions: ['Read own data', 'Update profile', 'Log activities'] },
                  { role: 'Premium', permissions: ['All user permissions', 'AI insights', 'Export data'] },
                  { role: 'Enterprise Admin', permissions: ['Manage team', 'View analytics', 'Configure settings'] },
                  { role: 'System Admin', permissions: ['Full system access', 'User management', 'System configuration'] },
                ].map((role) => (
                  <div key={role.role} className="bg-white/5 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">{role.role}</p>
                    <ul className="space-y-1">
                      {role.permissions.map((perm, i) => (
                        <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full" />
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Monitoring */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Threat Detection
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Real-time anomaly detection</li>
              <li>• Brute force protection</li>
              <li>• Suspicious activity alerts</li>
              <li>• Automated account lockout</li>
              <li>• IP reputation checking</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-400" />
              Audit Logging
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• All PHI access logged</li>
              <li>• User action tracking</li>
              <li>• Admin activity monitoring</li>
              <li>• Tamper-proof logs</li>
              <li>• 7-year retention</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Vulnerability Management
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Automated security scanning</li>
              <li>• Dependency vulnerability checks</li>
              <li>• Penetration testing (quarterly)</li>
              <li>• Bug bounty program</li>
              <li>• Security patch management</li>
            </ul>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-gradient-to-r from-red-700/20 to-red-900/20 border border-red-600/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Data Protection & Privacy</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">HIPAA Compliance</h3>
              <ul className="space-y-1 text-sm">
                <li>• BAA with all vendors</li>
                <li>• PHI encryption at rest & transit</li>
                <li>• Access controls & audit logs</li>
                <li>• Breach notification procedures</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">GDPR Compliance</h3>
              <ul className="space-y-1 text-sm">
                <li>• Data processing agreements</li>
                <li>• Right to access & portability</li>
                <li>• Right to erasure</li>
                <li>• Consent management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Data Handling</h3>
              <ul className="space-y-1 text-sm">
                <li>• Data minimization principle</li>
                <li>• Pseudonymization techniques</li>
                <li>• Secure data disposal</li>
                <li>• Geographic data residency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Certifications */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Development Security</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Secure SDLC with security reviews
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Static code analysis (Bandit, Safety)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Dependency scanning (Snyk, Trivy)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Code signing & verification
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Operational Security</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  24/7 security monitoring (SIEM)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Incident response plan & team
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Regular security training
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Disaster recovery & business continuity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

