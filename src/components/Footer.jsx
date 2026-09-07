import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: 'linear-gradient(180deg, #030712 0%, #020509 100%)',
        borderTop: '1px solid rgba(99,102,241,0.1)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative">
        {/* Main footer row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black gradient-text">MAYUR.</span>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Software Developer · AI Builder · Vibe Coder · Prompt Engineer
            </p>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Building intelligent software by combining engineering, AI, and modern development workflows.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-600 mb-4">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 cursor-pointer border-none bg-transparent"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-600 mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
              >
                <Mail size={14} style={{ color: '#6366f1' }} />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={14} style={{ color: '#8b5cf6' }} />
                GitHub
              </a>
              {personalInfo.linkedin !== '#' && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} style={{ color: '#22d3ee' }} />
                  LinkedIn
                </a>
              )}
              <span className="flex items-center gap-2.5 text-sm text-slate-500">
                <span className="text-xs" style={{ color: '#10b981' }}>📍</span>
                {personalInfo.location}, India
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)',
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026{' '}
            <span className="text-slate-500 font-semibold">Mayur Chavan</span>
            . Built with React + Vite + Framer Motion.
          </p>

          {/* Social icons row */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/5 text-slate-600 hover:text-slate-300 hover:border-indigo-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg border border-white/5 text-slate-600 hover:text-slate-300 hover:border-indigo-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 p-2 rounded-lg border text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
              style={{
                borderColor: 'rgba(99,102,241,0.25)',
                background: 'rgba(99,102,241,0.08)',
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
