import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const ResumeCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="resume"
      className="py-24 relative"
      style={{
        background: 'linear-gradient(180deg, #030712 0%, #060c1a 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden"
            style={{
              background: 'rgba(15,23,42,0.7)',
              border: '1px solid rgba(99,102,241,0.2)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Decorative corner accents */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl"
              style={{ background: 'rgba(99,102,241,0.08)' }}
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl"
              style={{ background: 'rgba(139,92,246,0.08)' }}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.25)',
                }}
              >
                <FileText size={28} style={{ color: '#818cf8' }} />
              </div>

              <span className="section-label block mb-3">Resume</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-100 mb-4 leading-tight">
                Want to know more{' '}
                <span className="gradient-text">about me?</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
                My resume covers my education, technical skills, projects, and achievements.
                Download or view it to get the full picture.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/Mayur_Chavan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>View Resume</span>
                  <FileText size={15} />
                </a>
                <a
                  href="/Mayur_Chavan_Resume.pdf"
                  download="Mayur_Chavan_Resume.pdf"
                  className="btn-secondary"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>

              {/* Note */}
              <p className="text-xs text-slate-600 mt-8">
                PDF format · Updated 2026 · Place your resume PDF at{' '}
                <code className="text-slate-500">public/Mayur_Chavan_Resume.pdf</code>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;
