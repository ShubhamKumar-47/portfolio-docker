import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import {
    Mail, Phone, Linkedin, Instagram, Send, MapPin,
    MessageSquare, CheckCircle, AlertCircle, Loader2,
} from 'lucide-react';

/* ─── EmailJS config pulled from .env.local ─────────────────────────── */
const EJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* ─── Contact info ───────────────────────────────────────────────────── */
const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'ragavendramogalapu@gmail.com',
        href: 'mailto:ragavendramogalapu@gmail.com',
        color: '#7c3aed',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 7989388792',
        href: 'tel:+917989388792',
        color: '#2563eb',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'mogalapu-karthikeya',
        href: 'https://www.linkedin.com/in/mogalapu-',
        color: '#06b6d4',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: '@ragavendra_mogalapu',
        href: 'https://instagram.com/ragavendra_mogalapu',
        color: '#ec4899',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Lovely Professional University, Punjab',
        href: null,
        color: '#f59e0b',
    },
];

/* ─── Color lookup helper ────────────────────────────────────────────── */
const colorRgb = {
    '#7c3aed': '124,58,237',
    '#2563eb': '37,99,235',
    '#06b6d4': '6,182,212',
    '#ec4899': '236,72,153',
    '#f59e0b': '245,158,11',
};

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [loading, setLoading] = useState(false);

    // Maps EmailJS input name attrs → formData state keys
    const nameToKey = { from_name: 'name', reply_to: 'email', subject: 'subject', message: 'message' };

    /* ── Validation ─────────────────────────────────────────────────── */
    const validate = () => {
        const errs = {};
        if (!formData.name.trim()) errs.name = 'Name is required';
        if (!formData.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errs.email = 'Please enter a valid email';
        }
        if (!formData.subject.trim()) errs.subject = 'Subject is required';
        if (!formData.message.trim()) errs.message = 'Message is required';
        else if (formData.message.trim().length < 20)
            errs.message = 'Message must be at least 20 characters';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const key = nameToKey[name] ?? name;   // resolve to state key
        setFormData(prev => ({ ...prev, [key]: value }));
        if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
    };

    /* ── Submit via EmailJS ─────────────────────────────────────────── */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setLoading(true);
        setStatus(null);

        try {
            await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, {
                publicKey: EJS_KEY,
            });
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(null), 6000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus(null), 6000);
        } finally {
            setLoading(false);
        }
    };

    /* ─── Render ─────────────────────────────────────────────────────── */
    return (
        <section id="contact" style={{ padding: '120px 24px', position: 'relative' }}>
            {/* Background orb */}
            <div style={{
                position: 'absolute', left: '20%', bottom: '10%',
                width: 500, height: 500,
                background: 'rgba(124, 58, 237, 0.08)',
                borderRadius: '50%', filter: 'blur(120px)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <div className="section-tag" style={{ justifyContent: 'center' }}>
                        <MessageSquare size={14} /> Contact
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.7 }}>
                        If you would like to collaborate, discuss opportunities, or learn more about my work, feel free to connect with me. I am always open to networking with professionals, developers, and organizations interested in technology and innovation.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '40px',
                }} className="contact-grid">

                    {/* ── Left — Contact Info ─────────────────────────── */}
                    <div>
                        {/* Contact details card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card"
                            style={{ padding: '36px', marginBottom: '24px' }}
                        >
                            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>Contact Details</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                                        style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
                                    >
                                        <div style={{
                                            width: 42, height: 42, borderRadius: '11px', flexShrink: 0,
                                            background: `rgba(${colorRgb[color]}, 0.12)`,
                                            border: `1px solid rgba(${colorRgb[color]}, 0.2)`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <Icon size={18} color={color} />
                                        </div>
                                        <div>
                                            <div style={{ color: '#475569', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                                                {label}
                                            </div>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    target={href.startsWith('http') ? '_blank' : undefined}
                                                    rel="noopener noreferrer"
                                                    style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s ease' }}
                                                    onMouseEnter={e => e.target.style.color = color}
                                                    onMouseLeave={e => e.target.style.color = '#e2e8f0'}
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <span style={{ color: '#e2e8f0', fontSize: '14px', fontWeight: 500 }}>{value}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{
                                padding: '28px',
                                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(37, 99, 235, 0.08))',
                                border: '1px solid rgba(124, 58, 237, 0.2)',
                                borderRadius: '18px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <span style={{
                                    width: 10, height: 10, borderRadius: '50%',
                                    background: '#22c55e', display: 'block',
                                    boxShadow: '0 0 8px #22c55e',
                                    animation: 'pulse-glow 2s ease-in-out infinite',
                                }} />
                                <span style={{ fontWeight: 700, fontSize: '15px' }}>Currently Available</span>
                            </div>
                            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7 }}>
                                Open to internships, freelance projects, collaborations, and entry-level developer roles. Let's build something amazing together!
                            </p>
                        </motion.div>

                        {/* Resume / CV card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            style={{
                                marginTop: '20px',
                                padding: '24px 28px',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '18px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                                <div style={{
                                    width: 40, height: 40, borderRadius: '11px',
                                    background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.2))',
                                    border: '1px solid rgba(124,58,237,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '18px',
                                }}>
                                    📄
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '14px' }}>My Resume / CV</div>
                                    <div style={{ color: '#475569', fontSize: '12px', marginTop: '1px' }}>Full Stack Developer · 2025</div>
                                </div>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.6, marginBottom: '18px' }}>
                                View or download my latest resume for internships, freelance, or full-time opportunities.
                            </p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <a
                                    href="/Ragavendra_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        flex: 1,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                                        padding: '10px',
                                        background: 'rgba(6,182,212,0.1)',
                                        border: '1px solid rgba(6,182,212,0.3)',
                                        borderRadius: '10px',
                                        color: '#67e8f9',
                                        fontSize: '13px', fontWeight: 600,
                                        textDecoration: 'none', transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.18)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(6,182,212,0.2)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    👁️ View CV
                                </a>
                                <a
                                    href="/Ragavendra_Resume.pdf"
                                    download="Ragavendra_Resume.pdf"
                                    style={{
                                        flex: 1,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                                        padding: '10px',
                                        background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                                        border: 'none', borderRadius: '10px',
                                        color: 'white', fontSize: '13px', fontWeight: 600,
                                        textDecoration: 'none', transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.45)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    ⬇️ Download CV
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Right — Contact Form ────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '40px' }}
                    >
                        <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Send Me a Message</h3>
                        <p style={{ color: '#475569', fontSize: '13px', marginBottom: '28px', lineHeight: 1.6 }}>
                            Fill out the form and I'll get back to you as soon as possible 🚀
                        </p>

                        {/* Status banners */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                                    padding: '16px 20px',
                                    background: 'rgba(34, 197, 94, 0.08)',
                                    border: '1px solid rgba(34, 197, 94, 0.25)',
                                    borderRadius: '12px',
                                    marginBottom: '24px',
                                    color: '#86efac',
                                    fontSize: '14px', fontWeight: 500,
                                }}
                            >
                                <CheckCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                                <div>
                                    <div style={{ fontWeight: 700 }}>Message sent successfully! 🎉</div>
                                    <div style={{ opacity: 0.8, marginTop: '2px', fontSize: '13px' }}>
                                        Thanks for reaching out. I'll reply to <strong>{formData.email || 'your email'}</strong> as soon as possible.
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                                    padding: '16px 20px',
                                    background: 'rgba(239, 68, 68, 0.08)',
                                    border: '1px solid rgba(239, 68, 68, 0.25)',
                                    borderRadius: '12px',
                                    marginBottom: '24px',
                                    color: '#fca5a5',
                                    fontSize: '14px', fontWeight: 500,
                                }}
                            >
                                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
                                <div>
                                    <div style={{ fontWeight: 700 }}>Oops! Something went wrong.</div>
                                    <div style={{ opacity: 0.8, marginTop: '2px', fontSize: '13px' }}>
                                        Could not send the message. Please try emailing me directly at{' '}
                                        <a href="mailto:ragavendramogalapu@gmail.com" style={{ color: '#fca5a5' }}>
                                            ragavendramogalapu@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* ── Form (ref passed to emailjs.sendForm) ── */}
                        <form ref={formRef} onSubmit={handleSubmit} noValidate>

                            {/* Name & Email row */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                                {/* Name — must match EmailJS template variable {{from_name}} */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                                        Full Name *
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="from_name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="form-input"
                                        style={{ borderColor: errors.name ? 'rgba(239,68,68,0.5)' : undefined }}
                                    />
                                    {errors.name && (
                                        <div style={{ color: '#f87171', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <AlertCircle size={12} /> {errors.name}
                                        </div>
                                    )}
                                </div>

                                {/* Email — matches {{reply_to}} */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                                        Email Address *
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="reply_to"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="form-input"
                                        style={{ borderColor: errors.email ? 'rgba(239,68,68,0.5)' : undefined }}
                                    />
                                    {errors.email && (
                                        <div style={{ color: '#f87171', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <AlertCircle size={12} /> {errors.email}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Subject — matches {{subject}} */}
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                                    Subject *
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="form-input"
                                    style={{ borderColor: errors.subject ? 'rgba(239,68,68,0.5)' : undefined }}
                                />
                                {errors.subject && (
                                    <div style={{ color: '#f87171', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <AlertCircle size={12} /> {errors.subject}
                                    </div>
                                )}
                            </div>

                            {/* Message — matches {{message}} */}
                            <div style={{ marginBottom: '28px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
                                    Message *
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project, idea, or opportunity..."
                                    rows={5}
                                    className="form-input"
                                    style={{
                                        resize: 'vertical', minHeight: '130px',
                                        borderColor: errors.message ? 'rgba(239,68,68,0.5)' : undefined,
                                    }}
                                />
                                {errors.message && (
                                    <div style={{ color: '#f87171', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <AlertCircle size={12} /> {errors.message}
                                    </div>
                                )}
                            </div>

                            {/* Hidden field so EmailJS knows who to send TO */}
                            <input type="hidden" name="to_name" value="Ragavendra" />

                            {/* Submit */}
                            <motion.button
                                id="contact-submit"
                                type="submit"
                                disabled={loading}
                                whileHover={!loading ? { scale: 1.02, boxShadow: '0 0 24px rgba(124,58,237,0.4)' } : {}}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    fontSize: '16px',
                                    padding: '16px',
                                    opacity: loading ? 0.75 : 1,
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    gap: '10px',
                                }}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} style={{ animation: 'spin 0.8s linear infinite' }} />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </motion.button>

                            <style>{`
                                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                            `}</style>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                    .form-row     { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
