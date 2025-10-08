'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/fundstream_transparent.png" 
              alt="fund-stream logo" 
              width={180} 
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-[#1E3A5F] hover:text-[#00B8A9] transition-colors font-medium">
              How It Works
            </a>
            <a href="#why-us" className="text-[#1E3A5F] hover:text-[#00B8A9] transition-colors font-medium">
              Why Us
            </a>
            <a href="#faq" className="text-[#1E3A5F] hover:text-[#00B8A9] transition-colors font-medium">
              FAQ
            </a>
            <button
              onClick={scrollToForm}
              className="bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1E3A5F]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <a 
              href="#how-it-works" 
              className="block text-[#1E3A5F] hover:text-[#00B8A9] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-us" 
              className="block text-[#1E3A5F] hover:text-[#00B8A9] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#faq" 
              className="block text-[#1E3A5F] hover:text-[#00B8A9] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button
              onClick={scrollToForm}
              className="w-full bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

