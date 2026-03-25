import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, X, ExternalLink, Calendar, Building2, Star, BadgeCheck, Brain, Cpu } from 'lucide-react';

/* ─── Data ──────────────────────────────────────────────────────────── */
const trainings = [
    {
        id: 1,
        title: 'Full Stack Development Training (React & Node.js)',
        organization: 'Lovely Professional University – Centre for Professional Enhancement',
        duration: 'June 10, 2025 – July 19, 2025',
        badge: '✓ Grade A',
        badgeColor: { bg: 'rgba(34,197,94,0.18)', border: 'rgba(34,197,94,0.4)', text: '#86efac' },
        certificateNo: '405977',
        description: 'Successfully completed an intensive full-stack development training program focused on building modern web applications using React.js and Node.js. Gained hands-on experience in frontend and backend development, REST APIs, and real-world project implementation.',
        image: '/certificate_lpu.jpg',
        tags: ['React.js', 'Node.js', 'Full Stack', 'REST APIs'],
        metaRows: (t) => [
            { icon: Building2, label: t.organization },
            { icon: Calendar, label: t.duration },
            { icon: Star, label: 'Grade: A' },
            { icon: BadgeCheck, label: `Certificate No. ${t.certificateNo}` },
        ],
        categoryLabel: '🎓 Training',
        accentGradient: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    },
];

const aiCertifications = [
    {
        id: 'ai-1',
        title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
        organization: 'Infosys Springboard',
        duration: 'Completed: August 23, 2025',
        issued: 'Issued: November 24, 2025',
        description: 'Completed a comprehensive course on ChatGPT-4 prompt engineering, covering Generative AI fundamentals, Large Language Models, and advanced prompt design techniques for real-world AI applications.',
        image: '/cert_chatgpt_prompt.jpg',
        tags: ['🤖 AI', 'Prompt Engineering', 'ChatGPT', 'LLM', 'GenAI'],
        badge: '✓ Completed',
        badgeColor: { bg: 'rgba(6,182,212,0.18)', border: 'rgba(6,182,212,0.4)', text: '#67e8f9' },
        metaRows: (t) => [
            { icon: Building2, label: t.organization },
            { icon: Calendar, label: t.duration },
            { icon: BadgeCheck, label: t.issued },
        ],
        categoryLabel: '🤖 AI Certification',
        accentGradient: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
        verifyUrl: 'https://verify.onwingspan.com',
    },
    {
        id: 'ai-2',
        title: 'Computational Theory: Language Principle & Finite Automata Theory',
        organization: 'Infosys Springboard',
        duration: 'Completed: August 20, 2025',
        issued: 'Issued: November 24, 2025',
        description: 'Completed an in-depth course on computational theory covering formal languages, finite automata, Turing machines, and language principles essential for understanding the foundations of computer science.',
        image: '/cert_computational_theory.jpg',
        tags: ['Computational Theory', 'Automata', 'Formal Languages', 'CS Fundamentals'],
        badge: '✓ Completed',
        badgeColor: { bg: 'rgba(139,92,246,0.18)', border: 'rgba(139,92,246,0.4)', text: '#c4b5fd' },
        metaRows: (t) => [
            { icon: Building2, label: t.organization },
            { icon: Calendar, label: t.duration },
            { icon: BadgeCheck, label: t.issued },
        ],
        categoryLabel: '💡 CS Certification',
        accentGradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        verifyUrl: 'https://verify.onwingspan.com',
    },
    {
        id: 'ai-3',
        title: 'Master Generative AI & Generative AI Tools (ChatGPT & more)',
        organization: 'Udemy – Instructor: Saad A',
        duration: 'Completed: Aug 23, 2025',
        issued: 'Length: 14 total hours',
        description: 'Mastered Generative AI concepts and tools including ChatGPT and other leading AI platforms. Covered practical workflows, AI-powered content generation, automation techniques, and building AI solutions across multiple domains.',
        image: '/cert_udemy_genai.jpg',
        tags: ['🤖 GenAI', 'ChatGPT', 'AI Tools', 'Automation', 'Udemy'],
        badge: '✓ 14 hrs',
        badgeColor: { bg: 'rgba(245,158,11,0.18)', border: 'rgba(245,158,11,0.4)', text: '#fcd34d' },
        metaRows: (t) => [
            { icon: Building2, label: t.organization },
            { icon: Calendar, label: t.duration },
            { icon: BadgeCheck, label: t.issued },
        ],
        categoryLabel: '🤖 AI Certification',
        accentGradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        verifyUrl: 'https://ude.my/UC-c6e0534d-d28a-472d-a752-e70a75bc4d5a',
    },
    {
        id: 'ai-4',
        title: 'Build Generative AI Apps and Solutions with No-Code Tools',
        organization: 'Infosys Springboard',
        duration: 'Completed: August 23, 2025',
        issued: 'Issued: November 24, 2025',
        description: 'Successfully completed a certification program focused on building Generative AI applications using no-code tools. Learned prompt engineering techniques, AI app development workflows, and practical implementation of AI-powered solutions.',
        image: '/cert_nocode_genai.jpg',
        tags: ['🤖 GenAI', 'No-Code', 'AI Apps', 'Prompt Engineering'],
        badge: '✓ Completed',
        badgeColor: { bg: 'rgba(34,197,94,0.18)', border: 'rgba(34,197,94,0.4)', text: '#86efac' },
        metaRows: (t) => [
            { icon: Building2, label: t.organization },
            { icon: Calendar, label: t.duration },
            { icon: BadgeCheck, label: t.issued },
        ],
        categoryLabel: '🤖 AI Certification',
        accentGradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
        verifyUrl: 'https://verify.onwingspan.com',
    },
];

/* ─── Certificate Modal ─────────────────────────────────────────────── */
function CertificateModal({ cert, onClose }) {
    if (!cert) return null;
    const metaRows = cert.metaRows(cert);
    return (
        <AnimatePresence>
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(0,0,0,0.88)',
                    backdropFilter: 'blur(14px)',
                    zIndex: 2000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '24px',
                }}
            >
                <motion.div
                    initial={{ scale: 0.88, y: 24, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.88, y: 24, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        background: '#0d0d1f',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '24px',
                        padding: '32px',
                        maxWidth: '760px',
                        width: '100%',
                        maxHeight: '92vh',
                        overflowY: 'auto',
                        position: 'relative',
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute', top: 18, right: 18,
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            width: 36, height: 36,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', color: '#94a3b8',
                        }}
                    >
                        <X size={18} />
                    </button>

                    {/* Gradient header bar */}
                    <div style={{
                        height: 6, borderRadius: '3px',
                        background: cert.accentGradient,
                        marginBottom: '24px',
                    }} />

                    {/* Image */}
                    <div style={{ borderRadius: '14px', overflow: 'hidden', marginBottom: '28px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src={cert.image} alt={cert.title} style={{ width: '100%', display: 'block' }} />
                    </div>

                    {/* Category */}
                    <div style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {cert.categoryLabel}
                    </div>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '20px', lineHeight: 1.3 }}>
                        {cert.title}
                    </h2>

                    {/* Meta rows */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                        {metaRows.map(({ icon: Icon, label }) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '14px' }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '8px',
                                    background: 'rgba(124,58,237,0.12)',
                                    border: '1px solid rgba(124,58,237,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                }}>
                                    <Icon size={16} color="#a78bfa" />
                                </div>
                                {label}
                            </div>
                        ))}
                    </div>

                    <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '14px', marginBottom: '24px' }}>
                        {cert.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                        {cert.tags.map(tag => (
                            <span key={tag} style={{
                                padding: '6px 14px',
                                background: 'rgba(124,58,237,0.1)',
                                border: '1px solid rgba(124,58,237,0.25)',
                                borderRadius: '100px',
                                fontSize: '12px', color: '#a78bfa', fontWeight: 600,
                            }}>{tag}</span>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                        {cert.verifyUrl && (
                            <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    flex: 1, padding: '13px',
                                    background: cert.accentGradient,
                                    border: 'none', borderRadius: '12px',
                                    color: 'white', fontSize: '14px', fontWeight: 600,
                                    cursor: 'pointer', textDecoration: 'none',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                }}
                            >
                                <ExternalLink size={15} /> Verify Certificate
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            style={{
                                flex: cert.verifyUrl ? 0 : 1,
                                padding: '13px 20px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: '#94a3b8', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

/* ─── Certificate Card ──────────────────────────────────────────────── */
function CertCard({ cert, onClick, delay = 0 }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick(cert)}
            style={{
                background: 'rgba(255,255,255,0.03)',
                border: hovered ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
                boxShadow: hovered
                    ? '0 28px 60px rgba(124,58,237,0.22), 0 0 0 1px rgba(124,58,237,0.15)'
                    : '0 4px 24px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Accent top bar */}
            <div style={{ height: 4, background: cert.accentGradient }} />

            {/* Image */}
            <div style={{ overflow: 'hidden', position: 'relative' }}>
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    background: 'linear-gradient(to bottom, transparent 55%, rgba(6,6,16,0.95) 100%)',
                }} />
                {/* Badge */}
                <div style={{
                    position: 'absolute', top: 12, right: 12, zIndex: 2,
                    padding: '4px 12px',
                    background: cert.badgeColor.bg,
                    border: `1px solid ${cert.badgeColor.border}`,
                    borderRadius: '100px',
                    fontSize: '11px', fontWeight: 700, color: cert.badgeColor.text,
                }}>
                    {cert.badge}
                </div>
                <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                        width: '100%', display: 'block',
                        transition: 'transform 0.5s ease',
                        transform: hovered ? 'scale(1.05)' : 'scale(1)',
                        maxHeight: '220px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                    }}
                />
            </div>

            {/* Content */}
            <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{
                    fontSize: '10px', fontWeight: 700, color: '#a78bfa',
                    letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px',
                }}>
                    {cert.categoryLabel}
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1.4, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                    {cert.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#94a3b8', fontSize: '12px' }}>
                        <Building2 size={12} color="#a78bfa" style={{ flexShrink: 0 }} />
                        {cert.organization}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#94a3b8', fontSize: '12px' }}>
                        <Calendar size={12} color="#a78bfa" style={{ flexShrink: 0 }} />
                        {cert.duration}
                    </div>
                </div>

                <p style={{ color: '#64748b', fontSize: '12px', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
                    {cert.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {cert.tags.map(tag => (
                        <span key={tag} style={{
                            padding: '3px 10px',
                            background: 'rgba(124,58,237,0.1)',
                            border: '1px solid rgba(124,58,237,0.22)',
                            borderRadius: '100px',
                            fontSize: '10px', color: '#a78bfa', fontWeight: 600,
                        }}>{tag}</span>
                    ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={e => { e.stopPropagation(); onClick(cert); }}
                        style={{
                            flex: 1, padding: '9px',
                            background: cert.accentGradient,
                            border: 'none', borderRadius: '10px',
                            color: 'white', fontSize: '12px', fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        }}
                    >
                        <ExternalLink size={13} /> View Certificate
                    </button>
                    {cert.verifyUrl && (
                        <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{
                                padding: '9px 12px',
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '10px',
                                color: '#94a3b8',
                                cursor: 'pointer', textDecoration: 'none',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                            title="Verify"
                        >
                            <BadgeCheck size={14} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Sub-section divider ───────────────────────────────────────────── */
function SubHeading({ icon: Icon, title, subtitle, inView }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '36px' }}
        >
            <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '8px 18px',
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '100px',
                marginBottom: '16px',
            }}>
                <Icon size={15} color="#a78bfa" />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {title}
                </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.7, maxWidth: '560px' }}>
                {subtitle}
            </p>
        </motion.div>
    );
}

/* ─── Main Section ──────────────────────────────────────────────────── */
export default function Training() {
    const [selected, setSelected] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
    const [aiRef, aiInView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="training" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* ── Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '72px' }}
                >
                    <div className="section-tag" style={{ justifyContent: 'center' }}>
                        <Award size={14} /> Training
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Training &amp; <span className="gradient-text">Certifications</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.7 }}>
                        Professional training and certifications that showcase my technical skills and continuous learning journey.
                    </p>
                </motion.div>

                {/* ── Sub-section 1: Professional Training */}
                <div style={{ marginBottom: '80px' }}>
                    <SubHeading
                        icon={Award}
                        title="Professional Training"
                        subtitle="Intensive hands-on training programs completed at leading institutions."
                        inView={inView}
                    />
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '28px',
                    }}>
                        {trainings.map((t, i) => (
                            <CertCard key={t.id} cert={t} onClick={setSelected} delay={i * 0.1} />
                        ))}
                    </div>
                </div>

                {/* ── Divider */}
                <div style={{
                    height: 1,
                    background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.3), transparent)',
                    marginBottom: '80px',
                }} />

                {/* ── Sub-section 2: AI & Prompt Engineering Certifications */}
                <div ref={aiRef}>
                    <SubHeading
                        icon={Brain}
                        title="AI & Prompt Engineering Certifications"
                        subtitle="Specialized certifications in Generative AI, prompt engineering, and AI-powered application development."
                        inView={aiInView}
                    />
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                    }}>
                        {aiCertifications.map((cert, i) => (
                            <CertCard key={cert.id} cert={cert} onClick={setSelected} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </div>

            <CertificateModal cert={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
