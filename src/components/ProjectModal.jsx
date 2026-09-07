import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: project.color + 'cc' }}
              >
                PROJECT {project.number}
              </span>
              <h2
                id={`modal-title-${project.id}`}
                className="text-xl md:text-2xl font-bold text-slate-100 mt-2 leading-tight"
              >
                {project.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{project.period}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
            </div>

            {/* Problem */}
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}
            >
              <h3 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                Problem
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div
              className="p-4 rounded-xl"
              style={{
                background: `${project.color}0a`,
                border: `1px solid ${project.color}25`,
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: project.color + 'cc' }}
              >
                Solution
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <ChevronRight
                      size={14}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: project.color }}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                Architecture
              </h3>
              <div className="flex flex-col items-center gap-2">
                {project.architecture.map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-1 w-full max-w-xs">
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="w-full px-4 py-2 rounded-lg text-center text-xs font-semibold"
                      style={{
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}25`,
                        color: project.color + 'cc',
                      }}
                    >
                      {step}
                    </motion.div>
                    {i < project.architecture.length - 1 && (
                      <ArrowRight
                        size={12}
                        className="rotate-90"
                        style={{ color: project.color + '60' }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-chip text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm inline-flex"
              >
                <GithubIcon size={15} />
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
