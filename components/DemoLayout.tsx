'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

interface DemoLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export default function DemoLayout({
  children,
  title,
  description,
  icon,
  gradient,
}: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient}`}>
                {icon}
              </div>
              <div className="hidden md:block">
                <h1 className="text-white font-bold">{title}</h1>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <div className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>
              <strong className="text-white">WellnessAI Platform</strong> - Interactive Demo
            </p>
            <p className="mt-2">
              For acquisition inquiries:{' '}
              <a
                href="https://bizbot.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                bizbot.store
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

