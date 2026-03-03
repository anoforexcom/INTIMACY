import React from 'react';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 border border-white/10 p-12 rounded-[3rem]"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using IntimacyQuest, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Eligibility</h2>
              <p>You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to use this service. The service is intended for consenting adults only.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Privacy</h2>
              <p>Your privacy is paramount. We use end-to-end encryption for your personal data. Please review our Privacy Policy for detailed information on how we handle your data.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Content Ownership</h2>
              <p>All content provided through the service, including illustrations, text, and game mechanics, is the property of IntimacyQuest and is protected by copyright laws.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Payments and Refunds</h2>
              <p>All purchases of credit packs and game packs are final. Refunds may be granted at our discretion in exceptional circumstances.</p>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-sm text-slate-500">
            Last updated: May 2024
          </div>
        </motion.div>
      </div>
    </div>
  );
}
