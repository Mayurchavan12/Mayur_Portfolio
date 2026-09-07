import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Lightbulb, MessageSquare, Brain, Code2, TestTube, Rocket,
} from 'lucide-react';
import { buildSteps } from '../data/portfolioData';

const iconMap = { Lightbulb, MessageSquare, Brain, Code2, TestTube, Rocket };

const HowIBuild = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="how-i-build"
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #07101e 0%, #030712 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%)',
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
          <span className="section-label">Process</span>
          <h2 className="section-title mt-3">
            From Idea to{' '}
            <span className="gradient-text">Product</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            My development process combines traditional engineering discipline with modern AI-assisted workflows.
          </p>
        </motion.div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.75rem] left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
            }}
            aria-hidden="true"
          />

          {/* Animated line overlay */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            className="hidden lg:block absolute top-[3.75rem] left-0 right-0 h-px origin-left"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #22d3ee)',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-4">
            {buildSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center gap-3 group"
                >
                  {/* Circle with icon */}
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(15,23,42,0.9)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      boxShadow: '0 0 0 4px rgba(99,102,241,0.06)',
                    }}
                  >
                    {Icon && (
                      <Icon size={22} style={{ color: '#818cf8' }} />
                    )}
                    {/* Step number */}
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        fontSize: '0.6rem',
                        color: '#fff',
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span
                      className="text-xs font-bold tracking-[0.12em] uppercase"
                      style={{ color: '#818cf8' }}
                    >
                      {step.title}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
