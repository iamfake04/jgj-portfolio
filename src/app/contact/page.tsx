// src/app/contact/page.tsx
'use client';

import React from 'react';
import ContactForm from "@/components/contact/ContactForm";
import AlternativeContactMethods from "@/components/contact/AlternativeContactMethods";
import GlassCard from "@/components/common/GlassCard"; // Corrected import path

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something amazing. Feel free to reach out!
          </p>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-12 items-start justify-center">
          {/* Wrap ContactForm with GlassCard */}
          <GlassCard className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0 p-0 overflow-visible bg-white/5 dark:bg-slate-800/10 backdrop-blur-xl">
            <div className="w-full">
              <ContactForm />
            </div>
          </GlassCard>
          
          {/* Wrap AlternativeContactMethods with GlassCard */}
          <GlassCard className="w-full lg:w-1/2 flex justify-center lg:justify-start p-0 bg-white/5 dark:bg-slate-800/10 backdrop-blur-xl">
            <div className="w-full">
              <AlternativeContactMethods />
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;