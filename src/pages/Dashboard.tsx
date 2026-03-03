import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  History, 
  Gift, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Heart, 
  Coins, 
  Play, 
  Flame, 
  Trophy, 
  Star,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { id: 'history', icon: <History className="w-5 h-5" />, label: 'History' },
    { id: 'rewards', icon: <Gift className="w-5 h-5" />, label: 'My Rewards' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { id: 'support', icon: <HelpCircle className="w-5 h-5" />, label: 'Support' },
  ];

  return (
    <div className="flex h-screen bg-background-dark overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 flex flex-col h-full bg-background-dark">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">IntimacyQuest</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                activeTab === item.id 
                  ? "bg-primary/10 text-primary" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5">
            <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
              <img src="https://picsum.photos/seed/couple/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-white">Alex & Sam</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Premium Members</p>
            </div>
            <Link to="/login" className="text-slate-500 hover:text-white transition-colors">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-2">Welcome back, Lovebirds!</h1>
            <p className="text-slate-400">Ready for your next intimate adventure?</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-[2rem] flex items-center gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Current Balance</p>
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-white">450</span>
              </div>
            </div>
            <Link to="/credits" className="btn-primary py-2 px-6 text-sm">
              Buy Credits
            </Link>
          </div>
        </header>

        {/* Featured Promo */}
        <div className="relative overflow-hidden rounded-[2.5rem] mb-12 bg-gradient-to-r from-primary to-rose-600 p-10 text-white">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Continue Playing: "Summer Romance"</h2>
            <p className="mb-8 text-white/80 text-lg">You're on level 12. Unlock the next challenge to discover something new together.</p>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-xl shadow-black/20">
              <Play className="w-5 h-5 fill-current" />
              Continue Last Session
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 pointer-events-none">
            <img src="https://picsum.photos/seed/passion/800/400" alt="Promo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Purchased Packs */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Your Game Packs</h3>
              <Link to="/packs" className="text-primary text-sm font-bold hover:underline">Browse Store</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pack 1 */}
              <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all group">
                <div className="h-40 relative">
                  <img src="https://picsum.photos/seed/sensual/400/200" alt="Pack" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-white">Sensual Nights</h4>
                    <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">A collection of 50+ intimate challenges focused on connection.</p>
                  <div className="w-full bg-white/5 h-2 rounded-full mb-6">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <button className="w-full border border-primary text-primary group-hover:bg-primary group-hover:text-white py-3 rounded-xl text-sm font-bold transition-all">
                    Resume Pack
                  </button>
                </div>
              </div>

              {/* Pack 2 */}
              <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all group">
                <div className="h-40 relative">
                  <img src="https://picsum.photos/seed/desire/400/200" alt="Pack" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-white">Deep Desires</h4>
                    <span className="text-[10px] bg-white/5 text-slate-500 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Locked</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">Explore the depths of your passion with advanced roleplay scenarios.</p>
                  <button className="w-full bg-primary text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20">
                    Unlock for 200 Credits
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Sidebar */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Couple Milestones</h3>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
              <div className="space-y-8">
                {[
                  { icon: <Flame className="w-6 h-6" />, color: 'text-orange-500', bg: 'bg-orange-500/10', title: '7 Day Streak', desc: "You're on fire! Keep it up." },
                  { icon: <Trophy className="w-6 h-6" />, color: 'text-purple-500', bg: 'bg-purple-500/10', title: 'Master Explorers', desc: '24 challenges completed this month.' },
                  { icon: <Star className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-500/10', title: 'Level 18', desc: '250 XP to reach the next level.' }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="font-bold text-white">{stat.title}</p>
                      <p className="text-xs text-slate-500">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-sm font-bold mb-6 text-center text-slate-300">Need inspiration?</p>
                <button className="w-full bg-white text-slate-900 py-4 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all shadow-xl shadow-white/5">
                  Random Daily Challenge
                </button>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-primary/5 border border-dashed border-primary/30 rounded-[2rem] p-8">
              <h4 className="font-bold text-primary mb-2 text-lg">Help Center</h4>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">Questions about credits or gameplay? Our support team is here for you 24/7.</p>
              <Link to="/faq" className="inline-flex items-center text-sm font-bold text-primary gap-2 group">
                Contact Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
