import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Star, Calendar, TrendingUp } from 'lucide-react';

const certifications = [
    { name: 'JavaScript Fundamentals', issuer: 'Online Learning Platform', date: '2023', icon: '⚡' },
    { name: 'Full Stack Web Development', issuer: 'Coursera / Udemy', date: '2023', icon: '🌐' },
    { name: 'React.js for Beginners', issuer: 'Online Course', date: '2024', icon: '⚛️' },
    { name: 'Database Management Systems', issuer: 'Academic Coursework', date: '2024', icon: '🗄️' },
    { name: 'Node.js & Express', issuer: 'Self-Learning Program', date: '2024', icon: '🟢' },
    { name: 'Git & GitHub Essentials', issuer: 'GitHub Learning Lab', date: '2024', icon: '🔀' },
];

const courses = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Web Technologies',
    'Software Engineering',
    'Object-Oriented Programming',
    'Computer Networks',
    'Operating Systems',
    'Discrete Mathematics',
];

export default function Education() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [certRef, certInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="education" style={{ padding: '120px 24px', position: 'relative' }}>
            {/* Background orb */}
            <div style={{
                position: 'absolute', right: '-5%', top: '10%',
                width: 400, height: 400,
                background: 'rgba(124, 58, 237, 0.06)',
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
                        <GraduationCap size={14} /> Education
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Academic <span className="gradient-text">Journey</span>
                    </h2>
                </motion.div>

                {/* Main Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="gradient-border"
                    style={{ padding: '48px', marginBottom: '40px' }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '40px',
                        alignItems: 'center',
                    }} className="edu-grid">
                        {/* Left */}
                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 20px',
                                background: 'rgba(124, 58, 237, 0.1)',
                                border: '1px solid rgba(124, 58, 237, 0.25)',
                                borderRadius: '12px',
                                marginBottom: '24px',
                            }}>
                                <GraduationCap size={18} color="#a78bfa" />
                                <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '14px' }}>B.Tech Computer Science</span>
                            </div>

                            <h3 className="font-display" style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                                Lovely Professional University
                            </h3>
                            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px', lineHeight: 1.7 }}>
                                Bachelor of Technology (B.Tech) in Computer Science and Engineering. My academic journey focuses on understanding fundamental principles of computer science including programming, software engineering, database systems, and web technologies.
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.8 }}>
                                During my studies, I have developed practical knowledge in building web applications and implementing software solutions using modern programming tools. My coursework and project work have helped me gain exposure to both theoretical concepts and practical software development.
                            </p>
                        </div>

                        {/* Right - Stats */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { icon: Star, label: 'CGPA', value: '6.5 / 10', color: '#f59e0b' },
                                { icon: Calendar, label: 'Expected Graduation', value: '2027', color: '#06b6d4' },
                                { icon: BookOpen, label: 'Degree', value: 'B.Tech CSE', color: '#7c3aed' },
                                { icon: TrendingUp, label: 'Status', value: 'Currently Enrolled', color: '#22c55e' },
                            ].map(({ icon: Icon, label, value, color }) => (
                                <div key={label} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '16px 20px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '14px',
                                }}>
                                    <div style={{
                                        width: 42, height: 42, borderRadius: '10px', flexShrink: 0,
                                        background: `rgba(${color === '#f59e0b' ? '245,158,11' : color === '#06b6d4' ? '6,182,212' : color === '#7c3aed' ? '124,58,237' : '34,197,94'}, 0.12)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Icon size={20} color={color} />
                                    </div>
                                    <div>
                                        <div style={{ color: '#475569', fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>{label}</div>
                                        <div style={{ fontWeight: 700, fontSize: '16px' }}>{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Courses */}
                    <div style={{
                        marginTop: '40px',
                        paddingTop: '32px',
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                    }}>
                        <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px', color: '#94a3b8' }}>Core Coursework</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {courses.map((course, i) => (
                                <motion.span
                                    key={course}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                                    style={{
                                        padding: '6px 14px',
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '100px',
                                        fontSize: '13px',
                                        color: '#cbd5e1',
                                        fontWeight: 500,
                                    }}
                                >
                                    {course}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Education Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                    {[
                        {
                            title: 'Intermediate',
                            school: 'Sasi Junior College',
                            location: 'Vellivennu, Andhra Pradesh',
                            score: '94%',
                            icon: '🎓',
                            color: '#06b6d4',
                            delay: 0.2,
                            description: 'Completed my intermediate education with a strong focus on Mathematics, Physics, and Chemistry. Built a solid analytical foundation and problem-solving skills.',
                        },
                        {
                            title: '10th Grade',
                            school: 'Sai E.M High School',
                            location: 'Tadepalligudem, Andhra Pradesh',
                            score: '95%',
                            icon: '📚',
                            color: '#22c55e',
                            delay: 0.35,
                            description: 'Successfully completed my secondary education with excellent academic performance. Developed discipline, consistency, and a strong foundation in core subjects.',
                        },
                    ].map(({ title, school, location, score, icon, color, delay, description }) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay }}
                            className="glass-card glass-card-hover"
                            style={{ padding: '32px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: '14px', flexShrink: 0,
                                    background: `rgba(${color === '#06b6d4' ? '6,182,212' : '34,197,94'}, 0.1)`,
                                    border: `1px solid rgba(${color === '#06b6d4' ? '6,182,212' : '34,197,94'}, 0.25)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '24px',
                                }}>
                                    {icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        padding: '4px 12px',
                                        background: `rgba(${color === '#06b6d4' ? '6,182,212' : '34,197,94'}, 0.1)`,
                                        border: `1px solid rgba(${color === '#06b6d4' ? '6,182,212' : '34,197,94'}, 0.25)`,
                                        borderRadius: '100px',
                                        fontSize: '12px', fontWeight: 700,
                                        color, marginBottom: '10px',
                                    }}>
                                        {title}
                                    </div>
                                    <h4 className="font-display" style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '6px' }}>
                                        {school}
                                    </h4>
                                    <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '16px' }}>
                                        📍 {location}
                                    </p>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        padding: '10px 16px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        borderRadius: '10px',
                                    }}>
                                        <Star size={15} color="#f59e0b" fill="#f59e0b" />
                                        <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 600 }}>Score</span>
                                        <span style={{ marginLeft: 'auto', fontWeight: 800, fontSize: '16px', color }}>{score}</span>
                                    </div>
                                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.8, marginTop: '16px' }}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    ref={certRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={certInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <Award size={24} color="#a78bfa" />
                        <h3 className="font-display" style={{ fontSize: '24px', fontWeight: 700 }}>Certifications & Learning</h3>
                    </div>

                    <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px', maxWidth: '700px' }}>
                        I have completed several certifications and learning programs focused on improving my technical knowledge and development skills. These certifications demonstrate my commitment to continuous learning and professional development. As technology evolves rapidly, I actively seek new learning opportunities and certifications that help me stay updated with the latest trends in software development.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '20px',
                    }}>
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={certInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card glass-card-hover"
                                style={{ padding: '24px' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <div style={{
                                        width: 46, height: 46, borderRadius: '12px',
                                        background: 'rgba(124, 58, 237, 0.1)',
                                        border: '1px solid rgba(124, 58, 237, 0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '22px', flexShrink: 0,
                                    }}>
                                        {cert.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px', lineHeight: 1.4 }}>{cert.name}</div>
                                        <div style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '8px' }}>{cert.issuer}</div>
                                        <div style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                                            padding: '3px 10px',
                                            background: 'rgba(6, 182, 212, 0.08)',
                                            border: '1px solid rgba(6, 182, 212, 0.2)',
                                            borderRadius: '100px',
                                            fontSize: '11px',
                                            color: '#06b6d4',
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontWeight: 600,
                                        }}>
                                            {cert.date}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
