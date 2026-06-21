import type { Metadata } from 'next';
import './globals.css'; // Standard Tailwind directives (@tailwind base; @tailwind components; @tailwind utilities;)
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WEGO | High-Performance Digital Agency',
  description: 'Elevate your online presence with professional Shopify, WordPress, and SEO services from WEGO. Custom landing pages, Google Ads, and e-commerce growth strategies.',
  openGraph: {
    title: 'WEGO | High-Performance Digital Agency',
    description: 'Elevate your online presence with professional digital solutions.',
    url: 'https://wego.agency',
    siteName: 'WEGO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEGO Digital Agency',
    description: 'Professional Web Development and Performance Marketing.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema markup injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WEGO Digital Agency",
    "url": "https://wego.agency",
    "logo": "https://wego.agency/logo.png",
    "sameAs": [
      "https://facebook.com/wego",
      "https://twitter.com/wego",
      "https://linkedin.com/company/wego"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0199",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-950 text-slate-100 min-h-screen flex flex-col selection:bg-brand-500 selection:text-white">
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-brand-950/80 border-b border-slate-800/80 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-wider text-white">
              WE<span className="text-brand-500">GO</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-brand-500 transition-colors">About</Link>
              <Link href="/services" className="hover:text-brand-500 transition-colors">Services</Link>
              <Link href="/portfolio" className="hover:text-brand-500 transition-colors">Portfolio</Link>
              <Link href="/blog" className="hover:text-brand-500 transition-colors">Blog</Link>
              <Link href="/contact" className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all">
                Let's Talk
              </Link>
            </nav>

            {/* Mobile Nav Button (Basic Toggle placeholder - standard NextJS client interactions handled inside pages) */}
            <div className="md:hidden">
              <Link href="/contact" className="px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-all">
                Quote
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Dark Footer */}
        <footer className="bg-black border-t border-slate-900 pt-16 pb-12 text-slate-400">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="text-2xl font-black text-white tracking-wider block mb-4">WE<span className="text-brand-500">GO</span></span>
              <p className="text-sm leading-relaxed mb-6">
                A high-performance digital agency delivering cutting-edge web development, growth marketing, and scalable e-commerce designs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-widest uppercase">Expertise</h4>
              <ul className="space-y-3.5 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Growth Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-widest uppercase">Agency</h4>
              <ul className="space-y-3.5 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Story</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Insights</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm tracking-widest uppercase">Stay Informed</h4>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 text-slate-100" 
                  required
                />
                <button type="submit" className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} WEGO Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
