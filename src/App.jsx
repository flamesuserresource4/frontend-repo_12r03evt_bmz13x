import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-black shadow">
              <Star className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/90">Developer</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white">Tentang</a>
            <a href="#projects" className="hover:text-white">Proyek</a>
            <a href="#contact" className="hover:text-white">Kontak</a>
          </nav>
          <a
            href="#projects"
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-cyan-400/40 hover:text-white"
          >
            Mulai Jelajah
          </a>
        </div>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
