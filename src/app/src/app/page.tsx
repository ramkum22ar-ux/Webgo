'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const servicesSummary = [
    { title: "E-Commerce", desc: "Crafting modern, high-conversion online stores using Shopify and custom architectures." },
    { title: "Web Development", desc: "Engineered performant, SEO-friendly platforms using WordPress, Wix, and Next.js." },
    { title: "Performance Growth", desc: "Scale revenue using high-performance SEO, Google Ads, and systematic SMO." },
  ];

  const steps = [
    { num: "01", name: "Deep Discovery", desc: "Analyzing target demographics, architecture maps, and technical constraints." },
    { num: "02", name: "Modern Design", desc: "Iterative prototype engineering showcasing premium layout options." },
    { num: "03", name: "Agile Build", desc: "Writing clean, efficient, components optimized for lightning-fast speeds." },
    { num: "04", name: "Growth Track", desc: "Iterating layout variations, optimizing content funnels, and tracking metrics." },
  ];

  const faqs = [
    { q: "What is your main technology stack?", a: "We specialize in modern frontend ecosystems including React, Next.js, and Tailwind CSS, alongside flexible standard engines like WordPress, Shopify, and headless Wix implementations." },
    { q: "Do you offer post-launch platform maintenance?", a: "Yes, we provide ongoing updates, structural monitoring, layout maintenance, optimization tasks, and general technical guidance." },
    { q: "How are project timelines calculated?", a: "Standard structures average 3 to 6 weeks. More extensive e-commerce integrations might expand based on specifications." },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0,transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-100 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            🚀 High-Performance Digital Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            We Build Digital Engines That <span className="bg-gradient-to-r from-brand-500 to-indigo-300 bg-clip-text text-transparent">Scale Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional Shopify development, targeted SEO campaigns, interactive landing pages, and clean custom web design built to convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold transition-all shadow-lg hover:shadow-brand-500/15 text-center">
              Partner With Us
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-bold transition-all text-center">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Stats Bar */}
      <section className="border-y border-slate-900 bg-black/40 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-4xl font-extrabold text-white mb-2">150+</span>
            <span className="text-xs text-slate-500 tracking-wider uppercase">Successful Projects</span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-white mb-2">99%</span>
            <span className="text-xs text-slate-500 tracking-wider uppercase">Client Retention</span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-white mb-2">35M+</span>
            <span className="text-xs text-slate-500 tracking-wider uppercase">Organic Impressions</span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-white mb-2">24/7</span>
            <span className="text-xs text-slate-500 tracking-wider uppercase">Proactive Support</span>
          </div>
        </div>
      </section>

      {/* Brief Services Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-xs tracking-widest text-brand-500 uppercase font-bold block mb-2">Core Solutions</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">What We Excel At</h2>
          </div>
          <Link href="/services" className="text-brand-500 hover:text-brand-100 font-bold flex items-center gap-2 transition-colors">
            See all standard services 
            <span>&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesSummary.map((srv, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-900 p-8 rounded-2xl hover:border-brand-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6">
                <span className="text-brand-500 font-bold text-xl">{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Workflow / Process Section */}
      <section className="py-24 px-6 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-widest text-brand-500 uppercase font-bold block mb-2">Execution Flow</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">How We Secure Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-brand-500/20 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-brand-500 uppercase font-bold block mb-2">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Frequently Asked</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-950 bg-slate-950 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(idx)} 
                className="w-full text-left px-6 py-5 flex justify-between items-center text-white hover:text-brand-500 transition-colors"
              >
                <span className="font-semibold text-base">{faq.q}</span>
                <span className="text-xl">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-900/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand-600 to-indigo-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Ready to Modernize Your Operations?</h2>
          <p className="text-slate-200 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with our technical delivery managers to receive a scope estimate, project breakdown, and growth roadmap tailored for your business.
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-extrabold transition-all shadow-xl">
            Schedule Scope Call
          </Link>
        </div>
      </section>
    </div>
  );
}
