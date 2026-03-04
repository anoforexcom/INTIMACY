import React from 'react';
import { motion } from 'motion/react';
import { Heart, Play, Sparkles, Shield, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  const packs = [
    {
      id: 'essential',
      name: 'Essential Pack',
      price: '$14.99',
      description: 'The beginner experience with 50+ classic positions and basic comfort tips.',
      features: ['50+ Classic Positions', 'Basic Comfort Tips', 'Full Mobile Access'],
      tag: 'The Beginner'
    },
    {
      id: 'intimate',
      name: 'Intimate Pack',
      price: '$24.99',
      description: 'Our most popular choice. 150+ advanced positions and detailed pleasure guides.',
      features: ['150+ Advanced Positions', 'Detailed Pleasure Guides', 'Custom Mood Ambience', 'Priority Updates'],
      tag: 'The Enthusiast',
      recommended: true
    },
    {
      id: 'ultimate',
      name: 'Ultimate Pack',
      price: '$39.99',
      description: 'The master collection with all 500+ positions and private concierge support.',
      features: ['All 500+ Positions', '4K Instructional Content', 'Weekly Passion Challenges', 'Private Concierge Support'],
      tag: 'The Master'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/romance/1920/1080?blur=4" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark"></div>
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Rediscover Each Other</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Ignite Your <span className="italic text-primary">Intimacy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              The ultimate modern Kamasutra experience designed specifically for couples. Break boundaries, explore new heights, and deepen your connection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                Start Your Journey
              </Link>
              <Link to="/game-room" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border-white/20 hover:bg-white/10">
                <Play className="w-4 h-4 fill-current" />
                Preview Game
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Process</span>
          <h2 className="text-4xl font-bold text-white mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: 'Choose a Pack', desc: 'Select from curated collections of positions and challenges that fit your relationship stage.' },
              { icon: <Play className="w-8 h-8" />, title: 'Interactive Play', desc: 'Beautifully illustrated guides with intensity filters and mood settings for a tailored experience.' },
              { icon: <Heart className="w-8 h-8" />, title: 'Level Up Intimacy', desc: 'Track your journey, unlock achievements, and discover new dimensions of passion together.' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-24 bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Discover Our Game Packs</h2>
              <p className="text-slate-400">Elevate your experience with one-time purchases. No recurring fees.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                <ChevronLeft />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack) => (
              <motion.div
                key={pack.id}
                whileHover={{ y: -10 }}
                className={cn(
                  "relative p-8 rounded-[2rem] border transition-all",
                  pack.recommended 
                    ? "bg-primary/5 border-primary shadow-2xl shadow-primary/10" 
                    : "bg-white/5 border-white/10"
                )}
              >
                {pack.recommended && (
                  <div className="absolute -top-4 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Recommended
                  </div>
                )}
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 block">{pack.tag}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-extrabold text-white">{pack.price}</span>
                  <span className="text-slate-500 text-sm font-bold">USD</span>
                </div>
                
                <Link 
                  to="/register" 
                  className={cn(
                    "w-full py-3 rounded-xl font-bold block text-center mb-8 transition-all",
                    pack.recommended ? "bg-primary text-white" : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {pack.recommended ? 'Unlock Everything' : 'Select Pack'}
                </Link>

                <ul className="space-y-4">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Elegantly Designed for Your <span className="text-primary">Privacy</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our app features a discrete icon, password protection, and end-to-end encrypted storage for your personal preferences and progress. No data is ever shared or stored on public servers.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: <Shield className="w-5 h-5" />, title: 'Stealth Mode Icon' },
                  { icon: <Sparkles className="w-5 h-5" />, title: 'Biometric Authentication' },
                  { icon: <Heart className="w-5 h-5" />, title: 'Hidden Gallery Mode' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <span className="font-bold text-white">{item.title}</span>
                  </div>
                ))}
              </div>

              <Link to="/privacy" className="btn-primary inline-flex items-center gap-2">
                Explore Safety Features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[3rem] w-[300px] h-[600px] mx-auto shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl"></div>
                <div className="p-6 pt-16 flex flex-col h-full bg-background-dark">
                  <div className="w-12 h-12 rounded-full bg-primary mb-6"></div>
                  <div className="h-4 w-3/4 bg-white/10 rounded-full mb-4"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded-full mb-12"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-white/5 rounded-2xl"></div>
                    <div className="aspect-square bg-white/5 rounded-2xl"></div>
                    <div className="aspect-square bg-white/5 rounded-2xl"></div>
                    <div className="aspect-square bg-white/5 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
