import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, FileDown, Eye } from 'lucide-react';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Training', href: '#training' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '0 24px',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(6, 6, 16, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                >
                    <div style={{
                        width: 38, height: 38,
                        background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                        borderRadius: '10px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
                    }}>
                        <Code2 size={20} color="white" />
                    </div>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#f8fafc', letterSpacing: '-0.02em' }}>
                        Shubham Kumar
                    </span>
                </motion.a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} className="nav-link">
                            {item.label}
                        </a>
                    ))}

                    {/* CV buttons */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <motion.a
                            href="/shubham_kumar_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View CV"
                            whileHover={{ scale: 1.06, boxShadow: '0 0 16px rgba(6,182,212,0.35)' }}
                            whileTap={{ scale: 0.94 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '6px',
                                padding: '9px 14px',
                                background: 'rgba(6,182,212,0.1)',
                                border: '1px solid rgba(6,182,212,0.3)',
                                borderRadius: '10px',
                                color: '#67e8f9',
                                fontSize: '13px', fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <Eye size={14} /> View CV
                        </motion.a>
                        <motion.a
                            href="/shubham_kumar_resume.pdf"
                            download="Shubham_Kumar_Resume.pdf"
                            title="Download CV"
                            whileHover={{ scale: 1.06, boxShadow: '0 0 16px rgba(124,58,237,0.4)' }}
                            whileTap={{ scale: 0.94 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '6px',
                                padding: '9px 14px',
                                background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                                border: 'none',
                                borderRadius: '10px',
                                color: 'white',
                                fontSize: '13px', fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <FileDown size={14} /> Download CV
                        </motion.a>
                    </div>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        style={{ padding: '10px 20px', fontSize: '14px' }}
                    >
                        Hire Me
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        padding: '8px',
                        cursor: 'pointer',
                        color: '#f8fafc',
                    }}
                    id="menu-toggle"
                    className="mobile-toggle"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0, right: 0,
                            background: 'rgba(6, 6, 16, 0.97)',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    color: '#94a3b8',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    padding: '12px 16px',
                                    borderRadius: '10px',
                                    transition: 'all 0.2s ease',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </motion.nav>
    );
}
