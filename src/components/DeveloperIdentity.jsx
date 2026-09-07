import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Zap, MessageSquare } from 'lucide-react';
import { developerIdentities } from '../data/portfolioData';

const iconMap = { Code2, Brain, Zap, MessageSquare };

const DeveloperIdentity = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="identity"
      className="py-28 relative"
      style={{
        background: 'linear-gradient(180deg, #030712 0%, #07101e 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)',
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
          <span className="section-label">My Identity</span>
          <h2 className="section-title mt-3">
            My Developer{' '}
            <span className="gradient-text">Identity</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            The four dimensions that define how I approach software and technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {developerIdentities.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card p-7 flex flex-col gap-4 group cursor-default"
              >
                {/* Number */}
                <span
                  className="text-xs font-bold tracking-[0.2em]"
                  style={{ color: item.color + '80' }}
                >
                  {item.number}
                </span>

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: item.color + '15',
                    border: `1px solid ${item.color}30`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {Icon && <Icon size={22} style={{ color: item.color }} />}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-base font-bold leading-tight"
                  style={{ color: '#f1f5f9' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeveloperIdentity;
