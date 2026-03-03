import React from 'react';
import { motion } from 'motion/react';
import { Heart, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-primary/20">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Continue your romantic journey</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-300">Password</label>
                <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
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
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-slate-400">Remember me for 30 days</label>
            </div>

            <Link to="/dashboard" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
              Log In <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-slate-400 text-sm">
              Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Join the club</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
