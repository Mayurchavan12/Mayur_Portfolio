import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
// Replace src/assets/profile.jpg with your actual professional photo
import profileImg from '../assets/profile.jpg';


const techBadges = [
  { label: 'Python', color: '#3b82f6', delay: 0.6 },
  { label: 'React', color: '#22d3ee', delay: 0.75 },
  { label: 'AI/ML', color: '#8b5cf6', delay: 0.9 },
  { label: 'SQL', color: '#f59e0b', delay: 1.05 },
  { label: 'Java', color: '#ef4444', delay: 1.2 },
];

const roles = ['Software Developer', 'AI Builder', 'Vibe Coder', 'Prompt Engineer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = isDeleting ? 50 : 110;

    typingRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(typingRef.current);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid"
      style={{ background: 'linear-gradient(135deg, #030712 0%, #0d1229 50%, #030712 100%)' }}
    >
      {/* Radial glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(99,102,241,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 80% 30%, rgba(139,92,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT */}
          <motion.div
            className="flex flex-col gap-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="accent-badge">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#22d3ee' }}
                  aria-hidden="true"
                />
                SOFTWARE DEVELOPER • AI BUILDER
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                Hi, I&apos;m{' '}
                <span className="gradient-text">Mayur.</span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-slate-400 min-h-[2.5rem]">
                <span style={{ color: '#818cf8' }}>{displayText}</span>
                <span className="inline-block w-0.5 h-7 ml-0.5 bg-indigo-400 align-middle animate-pulse" aria-hidden="true" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg"
            >
              {personalInfo.subTagline}
            </motion.p>

            {/* Identity pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Vibe Coder', 'Prompt Engineer', 'AI Builder'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full border"
                  style={{
                    background: 'rgba(99,102,241,0.08)',
                    borderColor: 'rgba(99,102,241,0.22)',
                    color: '#a5b4fc',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <span>View My Work</span>
                <ExternalLink size={15} />
              </a>
              <a
                href="/Mayur_Chavan_Resume.pdf"
                download="Mayur_Chavan_Resume.pdf"
                className="btn-secondary"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <span className="text-slate-600 text-xs font-mono hidden sm:block">
                {personalInfo.email}
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          >
            {/* Glow ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.1) 50%, transparent 80%)',
                animation: 'pulse-glow 4s ease-in-out infinite',
              }}
            />

            {/* Photo container */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]"
              style={{ filter: 'drop-shadow(0 0 40px rgba(99,102,241,0.25))' }}
            >
              {/* Rotating border ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #6366f1, #8b5cf6, #22d3ee, #6366f1)',
                  padding: '2px',
                  animation: 'spin-slow 8s linear infinite',
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: '#030712' }}
                />
              </div>

              {/* Profile image */}
              <div
                className="absolute inset-2 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(99,102,241,0.3)',
                  boxShadow: '0 0 0 4px rgba(99,102,241,0.1)',
                }}
              >
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Mayur Chavan — Software Developer & AI Builder"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                ) : (
                  // Fallback avatar when profile.jpg is not yet placed
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)',
                    }}
                    aria-label="Mayur Chavan — profile photo placeholder"
                  >
                    <span
                      className="font-black select-none"
                      style={{
                        fontSize: 'clamp(4rem, 15vw, 7rem)',
                        background: 'linear-gradient(135deg, #818cf8, #c4b5fd)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                      }}
                    >
                      MC
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating tech badges */}
            {techBadges.map((badge, i) => {
              const positions = [
                { top: '8%', left: '-8%' },
                { top: '75%', left: '-5%' },
                { top: '88%', right: '5%' },
                { top: '10%', right: '-5%' },
                { top: '45%', right: '-12%' },
              ];
              const pos = positions[i % positions.length];
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: badge.delay, duration: 0.4, type: 'spring' }}
                  className="absolute px-3 py-1.5 rounded-full text-xs font-bold float-animation"
                  style={{
                    ...pos,
                    background: 'rgba(15,23,42,0.9)',
                    border: `1px solid ${badge.color}40`,
                    color: badge.color,
                    backdropFilter: 'blur(12px)',
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${3 + i * 0.5}s`,
                    boxShadow: `0 0 12px ${badge.color}20`,
                    zIndex: 10,
                  }}
                >
                  {badge.label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
