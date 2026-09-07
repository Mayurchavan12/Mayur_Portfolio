import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { education } from '../data/portfolioData';

const iconMap = { University: GraduationCap, School, BookOpen };

const scoreColor = (score) => {
  const num = parseFloat(score);
  if (score.includes('CGPA')) return '#6366f1';
  if (num >= 90) return '#10b981';
  if (num >= 80) return '#22d3ee';
  return '#f59e0b';
};

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
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
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
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
          <span className="section-label">Education</span>
          <h2 className="section-title mt-3">
            Academic{' '}
            <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            The academic foundation behind my technical skills.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {education.map((edu, i) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            const color = scoreColor(edu.score);

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass-card p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={26} style={{ color }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-100 leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">{edu.institution}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Score badge */}
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        color,
                      }}
                    >
                      {edu.score}
                    </span>
                    {/* Period */}
                    <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  </div>
                </div>

                {/* Right number */}
                <span
                  className="hidden sm:block text-5xl font-black flex-shrink-0"
                  style={{ color: `${color}15` }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
