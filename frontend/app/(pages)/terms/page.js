"use client";
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';

const TermsPage = () => {
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
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-6">
                Welcome to Japa Talent. By using our services, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-6">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Japa Talent if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Use License</h2>
              <p className="text-slate-600 mb-6">
                Permission is granted to temporarily download one copy of the materials on Japa Talent's website for personal, non-commercial transitory viewing only.
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

export default TermsPage;
