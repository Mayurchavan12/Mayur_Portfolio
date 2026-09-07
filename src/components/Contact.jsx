import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    // mailto fallback — opens default mail client
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#6366f1',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:+91${personalInfo.phone}`,
      color: '#22d3ee',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: '#10b981',
    },
  ];

  return (
    <section
      id="contact"
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
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(99,102,241,0.06) 0%, transparent 70%)',
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
          <span className="section-label">Contact</span>
          <h2 className="section-title mt-3">
            Let&apos;s Build{' '}
            <span className="gradient-text">Something</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Have an idea, opportunity, or project in mind? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Get in touch</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I&apos;m open to internships, freelance work, collaborations, and interesting conversations.
                Feel free to reach out — I respond promptly.
              </p>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03] group"
                    style={{ border: '1px solid rgba(99,102,241,0.1)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}25`,
                      }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-300 font-medium mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="no-underline"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-slate-600 font-medium uppercase tracking-wider mb-3">
                Find me online
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-all duration-300"
                  style={{
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(99,102,241,0.15)',
                  }}
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                {personalInfo.linkedin !== '#' && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-all duration-300"
                    style={{
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid rgba(99,102,241,0.15)',
                    }}
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 flex flex-col gap-5"
              noValidate
            >
              <h3 className="text-lg font-bold text-slate-100">Send a message</h3>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  autoComplete="email"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                  required
                />
              </div>

              {/* Status messages */}
              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-400 p-3 rounded-lg"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
                  role="alert"
                >
                  <CheckCircle size={15} />
                  Message sent! Your mail client should have opened.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 p-3 rounded-lg"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                  role="alert"
                >
                  <AlertCircle size={15} />
                  Something went wrong. Please email me directly.
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary justify-center"
                disabled={status === 'sending'}
                aria-label="Send message"
              >
                <span>{status === 'sending' ? 'Opening mail...' : 'Send Message'}</span>
                <Send size={15} />
              </button>

              <p className="text-xs text-slate-600 text-center">
                This opens your mail client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
