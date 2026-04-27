"use client";
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Your privacy is important to us. It is Japa Talent's policy to respect your privacy regarding any information we may collect from you across our website.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 mb-6">
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Data Retention</h2>
              <p className="text-slate-600 mb-6">
                We only retain collected information for as long as necessary to provide you with your requested service.
              </p>
              <p className="text-slate-400 italic text-sm mt-12 border-t pt-8">
                Last Updated: April 27, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
