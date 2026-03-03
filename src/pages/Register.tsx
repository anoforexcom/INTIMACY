import React from 'react';
import { motion } from 'motion/react';
import { Heart, Mail, Lock, User, Eye, EyeOff, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-primary/20">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-2">Create Your Couple Account</h1>
          <p className="text-slate-400">Join thousands of couples enhancing their intimacy through play.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-primary fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Partner 1</span>
                </div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Display Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Alex"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-primary fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Partner 2</span>
                </div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Display Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jordan"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Shared Couple Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="us@together.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-12 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="mt-2 text-[10px] text-slate-500">Use at least 8 characters with letters and numbers.</p>
            </div>

            <Link to="/dashboard" className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg">
              Create Account & Start Playing
            </Link>

            <div className="text-center">
              <p className="text-slate-400 text-sm">
                Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign in here</Link>
              </p>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-8 border-t border-white/5">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, text: 'End-to-End Encrypted' },
                { icon: <Sparkles className="w-4 h-4" />, text: 'Privacy First' },
                { icon: <RefreshCw className="w-4 h-4" />, text: 'Secure Sync' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span className="text-primary">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
