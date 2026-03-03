import React from 'react';
import { motion } from 'motion/react';
import { Coins, Check, ShieldCheck, CreditCard, Apple, Wallet, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Credits() {
  const creditPacks = [
    {
      name: 'Starter Pack',
      price: '$9.99',
      credits: '100 Credits',
      features: ['Access to 50+ basic levels', 'Basic romantic stickers', 'Priority support'],
      disabledFeatures: ['Priority support'],
      tag: null
    },
    {
      name: 'Romantic Bundle',
      price: '$24.99',
      credits: '300 Credits',
      features: ['Access to all standard levels', 'Special anniversary mode', 'Bonus date night stickers', 'Standard support'],
      tag: 'Best Seller',
      recommended: true
    },
    {
      name: 'Passionate Elite',
      price: '$49.99',
      credits: '750 Credits',
      features: ['Unlimited level access', 'Early access to new content', 'Personalized challenge generator', '24/7 Priority support'],
      tag: 'Best Value'
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Fuel Your Passion</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect credit pack to unlock exclusive positions, romantic challenges, and intimate adventures designed for couples.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {creditPacks.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-10 rounded-[2.5rem] border transition-all",
                pack.recommended 
                  ? "bg-white/5 border-primary shadow-2xl shadow-primary/10 ring-1 ring-primary" 
                  : "bg-white/5 border-white/10"
              )}
            >
              {pack.tag && (
                <div className={cn(
                  "absolute -top-4 right-10 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full",
                  pack.recommended ? "bg-primary text-white" : "bg-white/10 text-slate-400"
                )}>
                  {pack.tag}
                </div>
              )}
              
              <div className="mb-8">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-2">{pack.name}</span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-white">{pack.price}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Coins className="w-5 h-5" />
                  <span>{pack.credits}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {pack.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-4 text-sm text-slate-300">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all shadow-xl",
                pack.recommended 
                  ? "bg-primary text-white hover:brightness-110 shadow-primary/20" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              )}>
                {pack.recommended ? 'Get Romantic Now' : 'Purchase Pack'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Secure Checkout */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Checkout</h3>
              <p className="text-slate-400 max-w-md">All transactions are encrypted and processed securely. We never store your payment details.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <CreditCard className="w-6 h-6" />, label: 'VISA' },
              { icon: <Wallet className="w-6 h-6" />, label: 'MASTERCARD' },
              { icon: <Apple className="w-6 h-6" />, label: 'APPLE PAY' },
              { icon: <Sparkles className="w-6 h-6" />, label: 'PAYPAL' }
            ].map((method, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                  {method.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-500 tracking-widest">{method.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Need help? <Link to="/faq" className="text-primary font-bold hover:underline">Contact our passion specialists</Link> or visit the <Link to="/faq" className="text-primary font-bold hover:underline">FAQ section</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
