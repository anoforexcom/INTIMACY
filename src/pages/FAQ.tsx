import React from 'react';
import { motion } from 'motion/react';
import { Search, ChevronDown, ChevronUp, MessageSquare, Heart, Shield, HelpCircle, Play } from 'lucide-react';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [activeCategory, setActiveCategory] = React.useState('General');

  const categories = ['General', 'Payments', 'Privacy', 'Technical'];

  const faqs = [
    {
      question: 'How to play',
      answer: 'Simply choose a pack from our collection, invite your partner via a unique and secure link generated for your session, and follow the guided prompts. The game is designed to be played together on your own devices at your own pace, ensuring a comfortable and intimate experience.'
    },
    {
      question: 'Payment security',
      answer: 'We use industry-standard encryption for all transactions. Your payment details are processed through secure gateways and are never stored on our servers. We support major credit cards, Apple Pay, and PayPal.'
    },
    {
      question: 'Privacy and Anonymity',
      answer: 'Your privacy is our top priority. The app features a discrete icon, biometric lock, and end-to-end encryption for all your progress and preferences. We do not share your data with any third parties.'
    },
    {
      question: 'Technical support',
      answer: 'If you encounter any issues, our support team is available 24/7. You can reach us via the contact form in the app or join our community Discord for immediate assistance.'
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the Kamasutra experience, your digital safety, and payment security.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search questions..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                activeCategory === cat 
                  ? "bg-primary text-white" 
                  : "text-slate-500 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {i === 0 ? <Play className="w-4 h-4 fill-current" /> : i === 1 ? <Shield className="w-4 h-4" /> : i === 2 ? <Heart className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                  </div>
                  <span className="font-bold text-white">{faq.question}</span>
                </div>
                {openIndex === i ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Can't find the answer you're looking for? Our team is here to help you make your experience perfect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary w-full sm:w-auto px-10">Contact Support</button>
            <button className="btn-secondary w-full sm:w-auto px-10 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Join Discord Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
