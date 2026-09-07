import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Sparkles, Compass } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const processSteps = ['PROBLEM', 'UNDERSTAND', 'DESIGN', 'BUILD', 'TEST', 'IMPROVE'];
const exploring = [
  'AI-assisted development',
  'Prompt engineering',
  'Vibe coding',
  'Modern web development',
  'AI-powered applications',
];

const AnimatedCard = ({ children, variants, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="py-28 relative"
      style={{
        background:
          'linear-gradient(180deg, #030712 0%, #060d1f 50%, #030712 100%)',
      }}
    >
      {/* Subtle bg gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title mt-3">
            Driven by{' '}
            <span className="gradient-text">curiosity</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 — Who I Am */}
          <AnimatedCard variants={fadeLeft} delay={0.1} className="glass-card p-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
            >
              <User size={20} style={{ color: '#818cf8' }} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-3">Who I Am</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I am a Computer Engineering graduate from IIIT Pune with a strong foundation in 
              programming, software development, databases, data science, and machine learning.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              I enjoy transforming ideas into practical applications and exploring modern 
              AI-assisted development techniques. I&apos;m particularly interested in 
              AI-powered applications, prompt engineering, and rapid product development.
            </p>
          </AnimatedCard>

          {/* Card 2 — How I Think */}
          <AnimatedCard variants={fadeUp} delay={0.2} className="glass-card p-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)' }}
            >
              <Sparkles size={20} style={{ color: '#a78bfa' }} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-5">How I Think</h3>
            <div className="flex flex-col gap-2">
              {processSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: 'rgba(99,102,241,0.15)',
                        border: '1px solid rgba(99,102,241,0.3)',
                        color: '#818cf8',
                        fontSize: '0.6rem',
                      }}
                    >
                      {i + 1}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div
                        className="w-px h-4"
                        style={{
                          background:
                            'linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.1))',
                        }}
                      />
                    )}
                  </div>
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: i % 2 === 0 ? '#94a3b8' : '#64748b' }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          {/* Card 3 — Currently Exploring */}
          <AnimatedCard variants={fadeRight} delay={0.3} className="glass-card p-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.2)' }}
            >
              <Compass size={20} style={{ color: '#22d3ee' }} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-4">Currently Exploring</h3>
            <div className="flex flex-col gap-2.5">
              {exploring.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2.5 text-sm text-slate-400"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#22d3ee' }}
                    aria-hidden="true"
                  />
                  {item}
                </motion.div>
              ))}
            </div>
            <div
              className="mt-6 p-3 rounded-lg text-xs text-slate-500 leading-relaxed"
              style={{
                background: 'rgba(99,102,241,0.05)',
                border: '1px solid rgba(99,102,241,0.1)',
              }}
            >
              CGPA: <span className="text-indigo-400 font-semibold">8.85</span> · Computer Engineering · IIIT Pune
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default About;
