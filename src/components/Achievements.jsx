import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';

/* ─── Achievement Data ──────────────────────────────────────────────── */
const achievements = [
    {
        id: 1,
        emoji: '⚡',
        number: 5,
        suffix: '+',
        label: 'Full Stack Projects Built',
        description: 'Built and deployed multiple real-world applications using React.js, Node.js, and Django.',
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
        glowColor: 'rgba(124, 58, 237, 0.35)',
        highlight: true,
    },
    {
        id: 2,
        emoji: '🤖',
        number: 2,
        suffix: '+',
        label: 'AI-Based Applications Developed',
        description: 'Created AI-powered platforms including music recommendation and prompt-based solutions.',
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)',
        glowColor: 'rgba(6, 182, 212, 0.3)',
        highlight: false,
    },
    {
        id: 3,
        emoji: '💻',
        number: 3,
        suffix: '+',
        label: 'Technologies Mastered',
        description: 'Worked with React.js, Node.js, MongoDB, and Django in full-stack development.',
        gradient: 'linear-gradient(135deg, #10b981 0%, #2563eb 100%)',
        glowColor: 'rgba(16, 185, 129, 0.3)',
        highlight: false,
    },
    {
        id: 4,
        emoji: '🚀',
        number: 1,
        suffix: '+',
        label: 'Live Portfolio Website Deployed',
        description: 'Designed and deployed a modern personal portfolio with responsive UI and animations.',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        glowColor: 'rgba(245, 158, 11, 0.3)',
        highlight: false,
    },
    {
        id: 5,
        emoji: '📚',
        number: 2,
        suffix: '+',
        label: 'Professional Certifications Earned',
        description: 'Completed certifications in Full Stack Development and Generative AI.',
        gradient: 'linear-gradient(135deg, #f472b6 0%, #7c3aed 100%)',
        glowColor: 'rgba(244, 114, 182, 0.3)',
        highlight: false,
    },
    {
        id: 6,
        emoji: '🛠️',
        number: 10,
        suffix: '+',
        label: 'Features Implemented in Projects',
        description: 'Implemented authentication, APIs, playlists, carts, and real-time functionalities.',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
        glowColor: 'rgba(139, 92, 246, 0.3)',
        highlight: false,
    },
];

/* ─── Animated Counter Hook ─────────────────────────────────────────── */
function useCounter(target, duration = 1500, started = false) {
    const [count, setCount] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!started) return;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [started, target, duration]);

    return count;
}

/* ─── Achievement Card ──────────────────────────────────────────────── */
function AchievementCard({ item, index, started }) {
    const [hovered, setHovered] = useState(false);
    const count = useCounter(item.number, 1200 + index * 100, started);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                background: hovered
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(255,255,255,0.025)',
                border: hovered
                    ? `1px solid ${item.glowColor.replace('0.3', '0.6')}`
                    : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px',
                padding: '36px 28px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hovered
                    ? `0 24px 60px ${item.glowColor}, 0 0 0 1px ${item.glowColor}`
                    : '0 4px 24px rgba(0,0,0,0.25)',
                overflow: 'hidden',
            }}
        >
            {/* Highlight top badge */}
            {item.highlight && (
                <div style={{
                    position: 'absolute', top: 14, right: 16,
                    padding: '3px 10px',
                    background: 'rgba(124,58,237,0.18)',
                    border: '1px solid rgba(124,58,237,0.35)',
                    borderRadius: '100px',
                    fontSize: '10px', fontWeight: 700, color: '#a78bfa',
                    letterSpacing: '0.05em',
                }}>
                    ★ Top Achievement
                </div>
            )}

            {/* Subtle radial glow background */}
            <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 0%, ${item.glowColor.replace('0.3', hovered ? '0.12' : '0.06')} 0%, transparent 70%)`,
                transition: 'all 0.35s ease',
                pointerEvents: 'none',
            }} />

            {/* Emoji icon in gradient circle */}
            <div style={{
                width: 64, height: 64,
                borderRadius: '18px',
                background: item.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '28px',
                boxShadow: hovered ? `0 8px 30px ${item.glowColor}` : `0 4px 16px ${item.glowColor.replace('0.3', '0.2')}`,
                transition: 'all 0.35s ease',
                transform: hovered ? 'scale(1.1) rotate(-4deg)' : 'scale(1) rotate(0deg)',
                position: 'relative', zIndex: 1,
            }}>
                {item.emoji}
            </div>

            {/* Animated counting number */}
            <div style={{
                fontSize: 'clamp(42px, 5vw, 58px)',
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: '10px',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '-0.04em',
                background: item.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative', zIndex: 1,
                transition: 'filter 0.3s ease',
                filter: hovered ? 'brightness(1.2)' : 'brightness(1)',
            }}>
                {count}{item.suffix}
            </div>

            {/* Label */}
            <div style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#e2e8f0',
                marginBottom: '10px',
                lineHeight: 1.35,
                position: 'relative', zIndex: 1,
            }}>
                {item.label}
            </div>

            {/* Description */}
            <p style={{
                fontSize: '13px',
                color: '#64748b',
                lineHeight: 1.7,
                margin: 0,
                position: 'relative', zIndex: 1,
                transition: 'color 0.3s ease',
                ...(hovered && { color: '#94a3b8' }),
            }}>
                {item.description}
            </p>

            {/* Bottom gradient accent line */}
            <div style={{
                position: 'absolute', bottom: 0, left: '20%', right: '20%', height: 2,
                background: item.gradient,
                borderRadius: '2px 2px 0 0',
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.35s ease',
            }} />
        </motion.div>
    );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export default function Achievements() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="achievements" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '72px' }}
                >
                    <div className="section-tag" style={{ justifyContent: 'center' }}>
                        <Trophy size={14} /> Achievements
                    </div>
                    <h2 className="font-display" style={{
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                    }}>
                        By The <span className="gradient-text">Numbers</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '500px', margin: '16px auto 0', lineHeight: 1.7 }}>
                        Milestones and metrics that reflect my growth as a full-stack developer.
                    </p>
                </motion.div>

                {/* Achievement Cards Grid */}
                <div
                    ref={cardsRef}
                    className="achievements-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px',
                    }}
                >
                    {cardsInView && achievements.map((item, i) => (
                        <AchievementCard key={item.id} item={item} index={i} started={cardsInView} />
                    ))}
                </div>

                <style>{`
                    .achievements-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    @media (max-width: 900px) {
                        .achievements-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    @media (max-width: 560px) {
                        .achievements-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
