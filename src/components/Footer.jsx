import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer style={{
            padding: '60px 24px 32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Top */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '40px',
                    marginBottom: '48px',
                    alignItems: 'start',
                }} className="footer-grid">

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{
                                width: 36, height: 36,
                                background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                                borderRadius: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Code2 size={18} color="white" />
                            </div>
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px' }}>Ragavendra</span>
                        </div>
                        <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7 }}>
                            Aspiring Full Stack Developer building modern web applications and scalable digital platforms. Based in Lovely Professional University, Punjab.
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                            Quick Links
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {navLinks.map(link => (
                                <a key={link.label} href={link.href} style={{ color: '#475569', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                                    onMouseEnter={e => e.target.style.color = '#a78bfa'}
                                    onMouseLeave={e => e.target.style.color = '#475569'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                            Connect
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
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
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.92 }}
                                    style={{
                                        width: 40, height: 40,
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#475569',
                                        transition: 'all 0.25s ease',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = hoverColor;
                                        e.currentTarget.style.borderColor = glowColor.replace('0.25', '0.55').replace('0.2', '0.55');
                                        e.currentTarget.style.boxShadow = `0 0 16px ${glowColor}`;
                                        e.currentTarget.style.background = glowColor.replace('0.25', '0.08').replace('0.2', '0.08');
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = '#475569';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                    }}
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                        <a href="mailto:ragavendramogalapu@gmail.com" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}>
                            ragavendramogalapu@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    paddingTop: '24px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <p style={{ color: '#334155', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        © 2025 Mogalapu Karthikeya Rama Ragavendra. Built with{' '}
                        <Heart size={13} color="#ec4899" fill="#ec4899" />
                        {' '}using React & Framer Motion
                    </p>
                    <motion.button
                        onClick={scrollTop}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '10px',
                            color: '#94a3b8',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        Back to top <ArrowUp size={14} />
                    </motion.button>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}
