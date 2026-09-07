import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap, BookOpen, Globe, BarChart2, Brain,
} from 'lucide-react';
import { timelineItems } from '../data/portfolioData';

const iconMap = { GraduationCap, BookOpen, Globe, BarChart2, Brain };

const typeStyles = {
  education: {
    dot: '#6366f1',
    badge: { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.25)', color: '#818cf8' },
    label: 'Education',
  },
  project: {
    dot: '#22d3ee',
    badge: { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)', color: '#22d3ee' },
    label: 'Project',
  },
};

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="journey"
      className="py-28 relative"
      style={{
        background: 'linear-gradient(180deg, #030712 0%, #07101e 50%, #030712 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label">Journey</span>
          <h2 className="section-title mt-3">
            My <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Education, projects, and milestones — the path that shaped who I am today.
          </p>
        </motion.div>

        {/* Animated vertical line */}
        <div className="relative max-w-3xl mx-auto">
          {/* Background line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'rgba(99,102,241,0.12)',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />
          {/* Animated fill line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background: 'linear-gradient(to bottom, #6366f1, #8b5cf6, #22d3ee)',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          {/* Timeline items */}
          <div className="flex flex-col gap-10">
            {timelineItems.map((item, i) => {
              const style = typeStyles[item.type];
              const Icon = iconMap[item.icon] || BookOpen;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    } ml-14 md:ml-0`}
                  >
                    <div
                      className="glass-card p-5 inline-block w-full hover:scale-[1.02] transition-transform duration-300"
                    >
                      {/* Type badge */}
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3"
                        style={{
                          background: style.badge.bg,
                          border: `1px solid ${style.badge.border}`,
                          color: style.badge.color,
                        }}
                      >
                        {style.label}
                      </span>
                      <h3 className="text-base font-bold text-slate-100 leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-2">{item.subtitle}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="text-xs font-mono font-semibold"
                          style={{ color: style.badge.color }}
                        >
                          {item.year}
                        </span>
                        <span className="text-slate-700 text-xs">•</span>
                        <span className="text-xs text-slate-400">{item.detail}</span>
                      </div>
                    </div>
                  </div>

                  {/* Centre dot — desktop */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                    style={{
                      background: '#0f172a',
                      border: `2px solid ${style.dot}`,
                      boxShadow: `0 0 12px ${style.dot}40`,
                    }}
                  >
                    <Icon size={16} style={{ color: style.dot }} />
                  </div>

                  {/* Left dot — mobile */}
                  <div
                    className="md:hidden absolute left-6 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                    style={{
                      background: '#0f172a',
                      border: `2px solid ${style.dot}`,
                      boxShadow: `0 0 10px ${style.dot}40`,
                    }}
                  >
                    <Icon size={13} style={{ color: style.dot }} />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
