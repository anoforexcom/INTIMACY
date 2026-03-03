import React from 'react';
import { motion } from 'motion/react';
import { Cookie, Info, ShieldCheck, Settings } from 'lucide-react';

export default function Cookies() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "These are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
      status: "Always Active"
    },
    {
      title: "Performance Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
      status: "Optional"
    },
    {
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.",
      status: "Optional"
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 p-12 rounded-[3rem]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
          </div>

          <p className="text-slate-400 mb-12 leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements. 
            By continuing to use our site, you consent to our use of cookies. You can manage your preferences below.
          </p>

          <div className="space-y-8">
            {cookieTypes.map((type, i) => (
              <div key={i} className="border-b border-white/5 pb-8 last:border-0">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-white">{type.title}</h2>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    type.status === 'Always Active' ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-500'
                  }`}>
                    {type.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{type.description}</p>
                {type.status === 'Optional' && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-5 bg-white/10 rounded-full relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-3 h-3 bg-slate-400 rounded-full transition-all"></div>
                    </div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Disabled</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-slate-500">
              <Info className="w-4 h-4" />
              <span className="text-xs">Your preferences are saved locally.</span>
            </div>
            <div className="flex gap-4">
              <button className="btn-secondary py-2 px-6 text-sm">Reject All</button>
              <button className="btn-primary py-2 px-6 text-sm">Accept All</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
