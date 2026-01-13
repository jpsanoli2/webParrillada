'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold tracking-tight text-red-900 md:text-2xl">
            La Parrilla Uruguaya
          </div>
          <button
            className="text-gray-700 transition-colors hover:text-red-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute left-0 top-full w-full bg-white shadow-xl md:static md:flex md:w-auto md:bg-transparent md:shadow-none`}
          >
            <ul className="flex flex-col space-y-1 p-4 md:flex-row md:items-center md:space-x-1 md:space-y-0 md:p-0">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#menu', label: 'Menú' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#ubicacion', label: 'Ubicación' },
                { href: '#contacto', label: 'Contacto' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-red-50 hover:text-red-900 md:px-4 md:py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
