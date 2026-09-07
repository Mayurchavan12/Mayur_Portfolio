import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
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
            'radial-gradient(ellipse 70% 50% at 70% 40%, rgba(99,102,241,0.06) 0%, transparent 70%)',
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
          <span className="section-label">Work</span>
          <h2 className="section-title mt-3">
            Selected{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            A selection of projects I&apos;ve built, combining software engineering and machine learning.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="project-card"
            >
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
                  {/* Left content */}
                  <div className="flex flex-col gap-5">
                    {/* Number + period */}
                    <div className="flex items-center gap-3">
                      <span
                        className="text-4xl font-black"
                        style={{ color: project.color + '25' }}
                        aria-hidden="true"
                      >
                        {project.number}
                      </span>
                      <span className="text-xs text-slate-600 font-mono">{project.period}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                      {project.shortDescription}
                    </p>

                    {/* Features preview */}
                    <div className="flex flex-col gap-1.5">
                      {project.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-500">
                          <ChevronRight
                            size={12}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: project.color + '80' }}
                          />
                          {feat}
                        </div>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs text-slate-600 ml-4">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-chip text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-primary text-sm"
                      >
                        <span>View Details</span>
                        <ExternalLink size={14} />
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                        >
                          <GithubIcon size={14} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right — accent bar */}
                  <div className="hidden md:flex flex-col items-center gap-3">
                    <div
                      className="w-1 rounded-full"
                      style={{
                        height: '140px',
                        background: `linear-gradient(to bottom, ${project.color}, transparent)`,
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-xs font-bold tracking-wider uppercase"
                      style={{ color: project.color + '80', writingMode: 'vertical-rl' }}
                    >
                      {project.id === 'p1'
                        ? 'AI/ML'
                        : project.id === 'p2'
                        ? 'Data Science'
                        : 'Full Stack'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}40, transparent)`,
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
