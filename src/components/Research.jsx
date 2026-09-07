import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FlaskConical, FileText, ArrowRight } from 'lucide-react';

const pipeline = [
  { label: 'Data', color: '#6366f1' },
  { label: 'Feature Representation', color: '#818cf8' },
  { label: 'CNN / Deep Component', color: '#8b5cf6' },
  { label: 'Factorization Machine', color: '#a78bfa' },
  { label: 'Personalized Job Matching', color: '#22d3ee' },
];

const Research = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="research"
      className="py-28 relative"
      style={{
        background: 'linear-gradient(180deg, #030712 0%, #060c1a 50%, #030712 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">Research</span>
          <h2 className="section-title mt-3">
            Research &amp;{' '}
            <span className="gradient-text">Innovation</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Hybrid ConvFM research */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
            >
              <FlaskConical size={22} style={{ color: '#818cf8' }} />
            </div>

            <span className="section-label mb-3 block">Final Year Project</span>
            <h3 className="text-xl font-bold text-slate-100 mb-3 leading-snug">
              Hybrid Conv-DeepFM based Job Recommendation
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Developing a hybrid deep learning model that fuses Convolutional Neural Networks,
              Deep Neural Networks, and Factorization Machines to deliver highly personalised
              job recommendations — going beyond simple keyword matching to semantic skill-preference
              alignment.
            </p>

            {/* Pipeline */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-600 mb-2">
                Model Pipeline
              </p>
              {pipeline.map((step, i) => (
                <div key={step.label} className="flex flex-col items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold"
                    style={{
                      background: `${step.color}12`,
                      border: `1px solid ${step.color}28`,
                      color: step.color,
                    }}
                  >
                    {step.label}
                  </motion.div>
                  {i < pipeline.length - 1 && (
                    <div className="flex items-center justify-center w-8 my-0.5 ml-4">
                      <ArrowRight
                        size={12}
                        className="rotate-90"
                        style={{ color: 'rgba(99,102,241,0.35)' }}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Publication */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Publication card */}
            <div
              className="glass-card p-8 flex flex-col gap-5"
              style={{ flex: 1 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.2)' }}
              >
                <FileText size={22} style={{ color: '#22d3ee' }} />
              </div>

              <span className="section-label" style={{ color: '#22d3ee' }}>
                Published Paper
              </span>
              <h3 className="text-xl font-bold text-slate-100 leading-snug">
                &ldquo;The Theory of Big Bang&rdquo;
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A review paper exploring the conceptual foundations of the Big Bang theory,
                published in an international peer-reviewed journal.
              </p>
              <div
                className="p-4 rounded-xl"
                style={{
                  background: 'rgba(34,211,238,0.05)',
                  border: '1px solid rgba(34,211,238,0.15)',
                }}
              >
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  📖 Published in the{' '}
                  <span className="text-slate-300">
                    International Journal of Research and Development in Technology
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Research', 'Publication', 'Academic', 'Peer-Reviewed'].map((tag) => (
                  <span key={tag} className="accent-badge text-xs" style={{ fontSize: '0.65rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Research interests */}
            <div
              className="glass-card p-6"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-slate-600 mb-4">
                Research Interests
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Recommendation Systems',
                  'Deep Learning Architectures',
                  'AI-assisted Software Development',
                  'Natural Language Processing',
                ].map((interest, i) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2.5 text-sm text-slate-400"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#6366f1' }}
                      aria-hidden="true"
                    />
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
