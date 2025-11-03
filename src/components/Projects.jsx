import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nova UI Kit',
    description:
      'Komponen UI futuristik berbasis Tailwind untuk membangun dashboard modern dengan cepat.',
    tags: ['React', 'Tailwind', 'Radix'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Astra Analytics',
    description:
      'Platform analitik real-time dengan visualisasi interaktif dan performa tinggi.',
    tags: ['Vite', 'TypeScript', 'ECharts'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Pulse API',
    description:
      'REST API yang dirancang untuk kecepatan dengan caching pintar dan dokumentasi lengkap.',
    tags: ['FastAPI', 'MongoDB', 'Docker'],
    demo: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#05060a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proyek Pilihan</h2>
          <p className="mt-2 text-white/70">Kumpulan karya dengan fokus pada kualitas visual, arsitektur rapi, dan performa.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-lg backdrop-blur transition hover:border-cyan-400/30"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 blur-2xl" />
              </div>

              <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/60">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-cyan-400/40 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-cyan-400/40 hover:text-white"
                >
                  <Github className="h-4 w-4" /> Kode
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
