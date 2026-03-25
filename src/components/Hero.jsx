import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Instagram, Sparkles, ChevronRight, Eye } from 'lucide-react';

const FloatingOrb = ({ style }) => (
    <div style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        ...style,
    }} />
);

export default function Hero() {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 24px 80px',
        }}>
            {/* Background orbs */}
            <FloatingOrb style={{
                width: 600, height: 600,
                background: 'rgba(124, 58, 237, 0.15)',
                top: '-10%', right: '-10%',
                animation: 'float 8s ease-in-out infinite',
            }} />
            <FloatingOrb style={{
                width: 500, height: 500,
                background: 'rgba(37, 99, 235, 0.12)',
                bottom: '-5%', left: '-5%',
                animation: 'float 10s ease-in-out infinite reverse',
            }} />
            <FloatingOrb style={{
                width: 300, height: 300,
                background: 'rgba(6, 182, 212, 0.08)',
                top: '40%', left: '30%',
                animation: 'float 12s ease-in-out infinite',
            }} />

            {/* Grid pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                }} className="hero-grid">

                    {/* Left content */}
                    <div>
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(124, 58, 237, 0.1)',
                                border: '1px solid rgba(124, 58, 237, 0.3)',
                                borderRadius: '100px',
                                marginBottom: '24px',
                            }}
                        >
                            <span style={{
                                width: 8, height: 8,
                                borderRadius: '50%',
                                background: '#22c55e',
                                display: 'block',
                                animation: 'pulse-glow 2s ease-in-out infinite',
                                boxShadow: '0 0 8px #22c55e',
                            }} />
                            <span style={{ color: '#a78bfa', fontSize: '13px', fontWeight: 600 }}>
                                Open to Opportunities
                            </span>
                            <Sparkles size={14} color="#a78bfa" />
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display"
                            style={{
                                fontSize: 'clamp(36px, 5vw, 62px)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                marginBottom: '16px',
                            }}
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text">
                                Ragavendra
                            </span>
                        </motion.h1>

                        {/* Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ marginBottom: '24px' }}
                        >
                            <span style={{
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '18px',
                                color: '#06b6d4',
                                fontWeight: 500,
                            }}>
                                &lt; Aspiring Full Stack Developer /&gt;
                            </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{
                                color: '#94a3b8',
                                fontSize: '16px',
                                lineHeight: 1.8,
                                marginBottom: '40px',
                                maxWidth: '520px',
                            }}
                        >
                            Mogalapu Karthikeya Rama Ragavendra is an aspiring Full Stack Developer and Computer Science student at Lovely Professional University who is passionate about building modern web applications and scalable digital platforms. With a strong interest in software development, he focuses on creating efficient backend systems, intuitive user interfaces, and reliable data-driven applications. His goal is to combine creativity with technology to design solutions that solve real-world problems. Through continuous learning and hands-on projects, he is developing expertise in full stack development, modern web technologies, and application architecture.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                View Projects <ChevronRight size={18} />
                            </motion.a>
                            <motion.a
                                href="/Ragavendra_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 18px rgba(6,182,212,0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary"
                                style={{ textDecoration: 'none' }}
                            >
                                <Eye size={18} /> View CV
                            </motion.a>
                            <motion.a
                                href="/Ragavendra_Resume.pdf"
                                download="Ragavendra_Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary"
                                style={{ textDecoration: 'none' }}
                            >
                                <Download size={18} /> Download CV
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary"
                            >
                                <Mail size={18} /> Contact Me
                            </motion.a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
                        >
                            <span style={{ color: '#475569', fontSize: '13px' }}>Connect:</span>
                            {[
                                { icon: Github, href: 'https://github.com/nan11082004', label: 'GitHub', hoverColor: '#e2e8f0', glowColor: 'rgba(226,232,240,0.2)' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/mogalapu-', label: 'LinkedIn', hoverColor: '#0ea5e9', glowColor: 'rgba(14,165,233,0.25)' },
                                { icon: Instagram, href: 'https://instagram.com/ragavendra_mogalapu', label: 'Instagram', hoverColor: '#f472b6', glowColor: 'rgba(244,114,182,0.25)' },
                                { icon: Mail, href: 'mailto:ragavendramogalapu@gmail.com', label: 'Email', hoverColor: '#a78bfa', glowColor: 'rgba(167,139,250,0.25)' },
                            ].map(({ icon: Icon, href, label, hoverColor, glowColor }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    title={label}
                                    whileHover={{ scale: 1.18, y: -3 }}
                                    whileTap={{ scale: 0.92 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 42, height: 42,
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        color: '#94a3b8',
                                        transition: 'all 0.25s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = hoverColor;
                                        e.currentTarget.style.borderColor = glowColor.replace('0.25', '0.6');
                                        e.currentTarget.style.boxShadow = `0 0 18px ${glowColor}`;
                                        e.currentTarget.style.background = glowColor.replace('0.25', '0.1');
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = '#94a3b8';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                    }}
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        className="hero-photo"
                    >
                        <div style={{ position: 'relative', display: 'inline-flex' }}>
                            {/* Glow ring */}
                            <div style={{
                                position: 'absolute',
                                inset: -3,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4)',
                                animation: 'rotate 4s linear infinite',
                                zIndex: 0,
                            }} />
                            {/* White gap */}
                            <div style={{
                                position: 'absolute',
                                inset: 1,
                                borderRadius: '50%',
                                background: '#060610',
                                zIndex: 1,
                            }} />
                            {/* Photo */}
                            <div style={{
                                position: 'relative',
                                width: 360, height: 360,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                zIndex: 2,
                                border: '4px solid #060610',
                            }}>
                                <img
                                    src="/profile.png"
                                    alt="Mogalapu Karthikeya Rama Ragavendra"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    top: 30, right: -40,
                                    background: 'rgba(13, 13, 31, 0.9)',
                                    border: '1px solid rgba(124, 58, 237, 0.3)',
                                    borderRadius: '12px',
                                    padding: '10px 16px',
                                    backdropFilter: 'blur(20px)',
                                    zIndex: 10,
                                    boxShadow: '0 10px 40px rgba(124, 58, 237, 0.2)',
                                }}
                            >
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#a78bfa', marginBottom: '2px' }}>STATUS</div>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>Available</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                style={{
                                    position: 'absolute',
                                    bottom: 40, left: -50,
                                    background: 'rgba(13, 13, 31, 0.9)',
                                    border: '1px solid rgba(6, 182, 212, 0.3)',
                                    borderRadius: '12px',
                                    padding: '10px 16px',
                                    backdropFilter: 'blur(20px)',
                                    zIndex: 10,
                                    boxShadow: '0 10px 40px rgba(6, 182, 212, 0.15)',
                                }}
                            >
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#06b6d4', marginBottom: '2px' }}>UNIVERSITY</div>
                                <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>LPU B.Tech CSE</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '20px',
                        marginTop: '80px',
                        paddingTop: '40px',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                    className="stats-grid"
                >
                    {[
                        { value: '5+', label: 'Projects Built' },
                        { value: '2027', label: 'Graduation Year' },
                        { value: '6.5', label: 'CGPA' },
                        { value: '10+', label: 'Technologies' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div className="gradient-text font-display" style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: '#475569', fontSize: '13px', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                    color: '#475569',
                    cursor: 'pointer',
                    zIndex: 1,
                }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em' }}>SCROLL</span>
                <ArrowDown size={18} />
            </motion.div>

            <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center !important;
          }
          .hero-photo {
            order: -1;
          }
          .hero-photo > div > div:last-child {
            width: 280px !important;
            height: 280px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
