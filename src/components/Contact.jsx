import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Kontak</h2>
          <p className="mt-2 text-white/70">Mari berdiskusi tentang ide dan proyek Anda berikutnya.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <span className="rounded-lg bg-cyan-500/20 p-2 ring-1 ring-cyan-400/30">
              <Mail className="h-5 w-5 text-cyan-300" />
            </span>
            <div>
              <p className="text-sm text-white/60">Email</p>
              <p className="font-medium">hello@example.com</p>
            </div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <span className="rounded-lg bg-cyan-500/20 p-2 ring-1 ring-cyan-400/30">
              <Github className="h-5 w-5 text-cyan-300" />
            </span>
            <div>
              <p className="text-sm text-white/60">GitHub</p>
              <p className="font-medium">github.com/username</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <span className="rounded-lg bg-cyan-500/20 p-2 ring-1 ring-cyan-400/30">
              <Linkedin className="h-5 w-5 text-cyan-300" />
            </span>
            <div>
              <p className="text-sm text-white/60">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/username</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-cyan-400/40 hover:text-white">Kembali ke atas</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
