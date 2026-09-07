import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Zap, Brain, ArrowRight } from 'lucide-react';

const aiCards = [
  {
    icon: MessageSquare,
    title: 'Prompt Engineering',
    description:
      'Designing structured prompts and AI workflows to improve software development, problem solving, content generation and experimentation.',
    color: '#6366f1',
    gradient: 'from-indigo-500/10 to-transparent',
  },
  {
    icon: Zap,
    title: 'Vibe Coding',
    description:
      'Turning ideas into working prototypes through AI-assisted development while validating, debugging and refining the generated code.',
    color: '#22d3ee',
    gradient: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Development',
    description:
      'Using modern AI tools to accelerate development, explore solutions and improve productivity across the full software development lifecycle.',
    color: '#8b5cf6',
    gradient: 'from-violet-500/10 to-transparent',
  },
];

const pipeline = ['IDEA', 'PROMPT', 'AI', 'CODE', 'TEST', 'PRODUCT'];

const AIBuilding = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="ai-building"
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #030712 0%, #08101f 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)',
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
          <span className="section-label">AI Development</span>
          <h2 className="section-title mt-3">
            Building with{' '}
            <span className="gradient-text">AI</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Combining traditional software engineering with modern AI-assisted workflows to build smarter, faster.
          </p>
        </motion.div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {aiCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative glass-card p-8 overflow-hidden group"
              >
                {/* Card bg gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: card.color + '15',
                    border: `1px solid ${card.color}30`,
                  }}
                >
                  <Icon size={24} style={{ color: card.color }} />
                </div>

                <h3 className="relative text-lg font-bold text-slate-100 mb-3">
                  {card.title}
                </h3>
                <p className="relative text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(15,23,42,0.6)',
            border: '1px solid rgba(99,102,241,0.15)',
          }}
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
              AI Development Pipeline
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4, type: 'spring' }}
                  className="px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    color: '#818cf8',
                  }}
                >
                  {step}
                </motion.div>
                {i < pipeline.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                  >
                    <ArrowRight size={14} className="text-slate-600" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIBuilding;
