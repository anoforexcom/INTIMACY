import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User, ShoppingCart, HelpCircle, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packs', href: '/packs' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
  ];

  if (isDashboard) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">IntimacyQuest</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="btn-primary py-2 px-6 text-sm">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background-dark border-b border-white/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Link to="/login" className="btn-secondary text-center" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                  <Link to="/register" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-background-dark border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white">IntimacyQuest</span>
              </Link>
              <p className="text-slate-400 max-w-sm mb-6">
                Redefining modern intimacy for couples through playful exploration and deep connection.
              </p>
              <div className="flex gap-4">
                <ShieldCheck className="text-primary w-5 h-5" />
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">End-to-end encrypted</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><Link to="/packs" className="text-slate-400 hover:text-primary text-sm transition-colors">Game Packs</Link></li>
                <li><Link to="/testimonials" className="text-slate-400 hover:text-primary text-sm transition-colors">Testimonials</Link></li>
                <li><Link to="/faq" className="text-slate-400 hover:text-primary text-sm transition-colors">Help Center</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/terms" className="text-slate-400 hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-slate-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-slate-400 hover:text-primary text-sm transition-colors">Cookie Settings</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
              © 2024 IntimacyQuest. Rediscover each other every day.
            </p>
            <div className="flex gap-6">
              <HelpCircle className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              <MessageSquare className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
