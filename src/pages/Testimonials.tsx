import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Mark',
      role: 'Together for 5 years',
      content: 'IntimacyQuest completely changed our weekends. It turned routine into an adventure. The packs are so well-designed and tasteful.',
      avatar: 'https://picsum.photos/seed/couple1/100/100'
    },
    {
      name: 'Elena & David',
      role: 'Newlyweds',
      content: 'We were looking for something modern and private. This app is exactly that. The privacy features are top-notch and the content is beautiful.',
      avatar: 'https://picsum.photos/seed/couple2/100/100'
    },
    {
      name: 'Chris & Sam',
      role: 'Together for 12 years',
      content: 'After a decade together, you think you know everything. IntimacyQuest proved us wrong in the best way possible. Highly recommended!',
      avatar: 'https://picsum.photos/seed/couple3/100/100'
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Real Stories</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Deeper Connections</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Join thousands of couples who have rediscovered each other through our curated intimate experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative"
            >
              <Quote className="absolute top-8 right-10 w-12 h-12 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-primary/5 border border-primary/20 rounded-[3rem] p-12 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6 fill-current" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to write your own story?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">Start your journey today and discover new dimensions of your relationship.</p>
          <button className="btn-primary px-12 py-4">Get Started Now</button>
        </div>
      </div>
    </div>
  );
}
