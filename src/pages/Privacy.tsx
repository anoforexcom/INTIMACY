import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, Bell } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Data Protection",
      content: "We use industry-standard AES-256 encryption to protect your personal data. Your intimate preferences and progress are stored securely and are only accessible by you and your partner."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "End-to-End Encryption",
      content: "All communications between you and your partner within the app are end-to-end encrypted. Not even our administrators can read your private messages or view your shared media."
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Discrete Presence",
      content: "IntimacyQuest is designed to be discrete. We offer a 'Stealth Mode' icon and biometric authentication (FaceID/Fingerprint) to ensure that your app usage remains private."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "No Third-Party Sharing",
      content: "We never sell, rent, or share your personal data with third-party advertisers or data brokers. Your privacy is our product, not your data."
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your data at any time. You can export your account data or permanently delete your profile from the settings menu."
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Privacy Policy</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            At IntimacyQuest, your privacy isn't just a feature—it's our foundation. 
            We are committed to protecting the most personal aspects of your relationship.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {section.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                <p className="text-slate-400 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-[2rem] text-center"
        >
          <p className="text-slate-300 mb-4 italic">"Privacy is not an option, and it shouldn't be the price we pay for just getting on the Internet."</p>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">— Gary Kovacs</p>
        </motion.div>

        <div className="mt-12 text-center text-sm text-slate-500">
          Last updated: May 2024. For any privacy-related inquiries, please contact privacy@intimacyquest.com
        </div>
      </div>
    </div>
  );
}
