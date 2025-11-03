import React from 'react';
import { User, Code2, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'FastAPI',
    'MongoDB',
    'REST API',
    'Framer Motion',
  ];

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#05060a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/20 p-2 ring-1 ring-cyan-400/40">
            <User className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tentang Saya</h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-white/80">
              Saya adalah seorang Web Developer yang berfokus pada pembuatan antarmuka yang cepat, aksesibel, dan estetis. 
              Saya menyukai tantangan membangun produk digital end-to-end, mulai dari ide, desain, hingga implementasi dan optimasi performa.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
              <Code2 className="h-4 w-4" />
              <span>Frontend-first • UX-oriented • Performance-minded</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-white/60">
              <Rocket className="h-4 w-4" />
              <span>Mengutamakan eksperimen teknologi terbaru untuk hasil yang futuristik</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="mb-3 text-sm font-medium text-white/80">Keahlian</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-3 py-1 text-xs text-white/80 shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
