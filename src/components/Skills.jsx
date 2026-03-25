import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
    {
        id: 'frontend',
        label: 'Frontend',
        icon: Code2,
        color: '#7c3aed',
        skills: [
            { name: 'HTML5', level: 90, icon: '🌐' },
            { name: 'CSS3', level: 85, icon: '🎨' },
            { name: 'Tailwind CSS', level: 80, icon: '💨' },
            { name: 'JavaScript', level: 78, icon: '⚡' },
            { name: 'React.js', level: 72, icon: '⚛️' },
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        icon: Server,
        color: '#2563eb',
        skills: [
            { name: 'Node.js', level: 72, icon: '🟢' },
            { name: 'Express.js', level: 70, icon: '🚂' },
            { name: 'PHP', level: 65, icon: '🐘' },
        ],
    },
    {
        id: 'database',
        label: 'Database',
        icon: Database,
        color: '#06b6d4',
        skills: [
            { name: 'MongoDB', level: 70, icon: '🍃' },
            { name: 'MySQL', level: 75, icon: '🗄️' },
        ],
    },
    {
        id: 'tools',
        label: 'Dev Tools',
        icon: Wrench,
        color: '#ec4899',
        skills: [
            { name: 'Git', level: 80, icon: '🔀' },
            { name: 'GitHub', level: 82, icon: '🐙' },
            { name: 'VS Code', level: 90, icon: '💻' },
        ],
    },
];

function SkillBar({ name, level, icon, color, inView, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            style={{ marginBottom: '20px' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '18px' }}>{icon}</span>
                    <span style={{ fontWeight: 600, fontSize: '14px', color: '#e2e8f0' }}>{name}</span>
                </div>
                <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    color,
                    fontWeight: 600,
                    background: `rgba(${color === '#7c3aed' ? '124,58,237' : color === '#2563eb' ? '37,99,235' : color === '#06b6d4' ? '6,182,212' : '236,72,153'}, 0.12)`,
                    padding: '2px 10px',
                    borderRadius: '100px',
                }}>
                    {level}%
                </span>
            </div>
            <div className="skill-bar">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: delay + 0.2, ease: 'easeOut' }}
                    style={{
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                    }}
                />
            </div>
        </motion.div>
    );
}

function SkillCard({ category, isActive, onClick, inView, delay }) {
    const Icon = category.icon;
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            onClick={() => onClick(category.id)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '20px 16px',
                background: isActive ? `rgba(${category.color === '#7c3aed' ? '124,58,237' : category.color === '#2563eb' ? '37,99,235' : category.color === '#06b6d4' ? '6,182,212' : '236,72,153'}, 0.15)` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isActive ? category.color + '66' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                flex: 1,
                minWidth: '80px',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div style={{
                width: 44, height: 44,
                borderRadius: '12px',
                background: `rgba(${category.color === '#7c3aed' ? '124,58,237' : category.color === '#2563eb' ? '37,99,235' : category.color === '#06b6d4' ? '6,182,212' : '236,72,153'}, 0.2)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                <Icon size={22} color={category.color} />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, color: isActive ? '#f8fafc' : '#94a3b8', whiteSpace: 'nowrap' }}>
                {category.label}
            </span>
        </motion.button>
    );
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [barsRef, barsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const active = skillCategories.find(c => c.id === activeCategory);

    return (
        <section id="skills" style={{ padding: '120px 24px', position: 'relative' }}>
            {/* Background accent */}
            <div style={{
                position: 'absolute', left: 0, top: '20%',
                width: 400, height: 400,
                background: 'rgba(37, 99, 235, 0.06)',
                borderRadius: '50%', filter: 'blur(100px)',
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
                        <Code2 size={14} /> Technical Skills
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        My Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Tools and technologies I use to build modern, scalable applications
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '40px',
                    alignItems: 'start',
                }} className="skills-grid">

                    {/* Left - Category selector */}
                    <div>
                        {/* Category tabs */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                            {skillCategories.map((cat, i) => (
                                <SkillCard
                                    key={cat.id}
                                    category={cat}
                                    isActive={activeCategory === cat.id}
                                    onClick={setActiveCategory}
                                    inView={inView}
                                    delay={i * 0.1}
                                />
                            ))}
                        </div>

                        {/* All skills chips */}
                        <div className="glass-card" style={{ padding: '28px' }}>
                            <div style={{ marginBottom: '16px', color: '#475569', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                All Technologies
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {skillCategories.flatMap(cat => cat.skills).map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '6px',
                                            padding: '6px 12px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '100px',
                                            fontSize: '13px',
                                            color: '#cbd5e1',
                                            fontWeight: 500,
                                        }}
                                    >
                                        <span>{skill.icon}</span>
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Skill bars for selected category */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        ref={barsRef}
                        className="glass-card"
                        style={{ padding: '40px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
                            <div style={{
                                width: 46, height: 46, borderRadius: '12px',
                                background: `rgba(${active.color === '#7c3aed' ? '124,58,237' : active.color === '#2563eb' ? '37,99,235' : active.color === '#06b6d4' ? '6,182,212' : '236,72,153'}, 0.15)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <active.icon size={24} color={active.color} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '20px' }}>{active.label} Development</div>
                                <div style={{ color: '#475569', fontSize: '13px' }}>{active.skills.length} technologies</div>
                            </div>
                        </div>

                        {active.skills.map((skill, i) => (
                            <SkillBar
                                key={skill.name}
                                {...skill}
                                color={active.color}
                                inView={barsInView}
                                delay={i * 0.12}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
