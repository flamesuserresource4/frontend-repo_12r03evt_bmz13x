import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

const Hero = () => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth (do not block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span className="text-xs uppercase tracking-widest text-cyan-300/80">Web Developer Portfolio</span>
        </div>
        <h1 className="text-balance bg-gradient-to-br from-white via-cyan-200 to-cyan-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Membangun Pengalaman Web Futuristik
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm text-white/70 sm:text-base">
          Saya menggabungkan desain modern, performa tinggi, dan teknologi terbaru untuk menciptakan antarmuka web yang elegan dan responsif.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleScrollToProjects}
            className="group relative inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400"
          >
            Lihat Proyek
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <a
            href="#about"
            className="relative inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:border-cyan-400/50 hover:text-white"
          >
            <Download className="h-4 w-4" /> Tentang Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
