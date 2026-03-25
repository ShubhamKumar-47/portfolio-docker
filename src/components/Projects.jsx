import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FolderGit2, ExternalLink, Github, Globe, Shield, Search, Calculator, Database, Lock, Music, Heart, ListMusic, Smile, Brain, ShoppingCart, Package, CreditCard, UserCheck, BarChart2 } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Land Records & Property Tax Platform',
        category: 'Full Stack Web App',
        description: 'A comprehensive web-based platform designed to simplify the management of land records and property tax information. The system allows users to search property records, list land details, and calculate property tax values through an easy-to-use interface.',
        longDescription: 'This project is a web-based platform designed to simplify the management of land records and property tax information. The system allows users to search property records, list land details, and calculate property tax values through an easy-to-use interface. The goal was to design a functional web application that demonstrates both frontend and backend integration. Users can interact through a responsive interface while the backend manages data storage, processing, and authentication.',
        tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
        features: ['Property listing system', 'Property search functionality', 'Property tax calculator', 'User authentication & login', 'Database management'],
        icons: [Globe, Search, Calculator, Database, Lock],
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
        accent: '#7c3aed',
        status: 'Completed',
        year: '2024',
    },
    {
        id: 2,
        title: 'BrainFuel AI – Music Streaming Platform',
        category: 'Full Stack Web App',
        description: 'An AI-powered music streaming platform inspired by Spotify and JioSaavn, featuring mood-based song categorization, personalized recommendations, playlist management, and real-time playback.',
        longDescription: 'BrainFuel AI is a full-stack music streaming platform that leverages the Spotify API to deliver an intelligent listening experience. The platform categorizes songs by mood using AI-driven logic, provides personalized recommendations based on user history, and supports complete playlist management. It features secure JWT-based authentication, real-time song playback, and a powerful search system — all wrapped in a modern, responsive UI.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Spotify API', 'JWT'],
        features: ['Mood-based song categorization', 'Personalized AI recommendations', 'Playlist management', 'Real-time music playback', 'User authentication & history tracking', 'Spotify API integration'],
        icons: [Music, ListMusic, Heart, Brain, Lock, Globe],
        gradient: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
        accent: '#1db954',
        status: 'Completed',
        year: '2025',
    },
    {
        id: 3,
        title: 'Stress Management & Wellness Portal',
        category: 'Full Stack Web App',
        description: 'A web-based platform designed to help users manage stress through guided activities, mood tracking, and wellness resources with personalized suggestions.',
        longDescription: 'This wellness platform empowers users to take control of their mental health through an engaging, interactive interface. It offers guided stress-management activities, a daily mood tracker, curated wellness resources, and AI-powered personalized suggestions. Secured with JWT authentication, the platform maintains user history and delivers a tailored wellness journey for every individual user.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        features: ['Guided stress-relief activities', 'Mood tracking & history', 'Personalized wellness suggestions', 'User authentication', 'Interactive wellness resources'],
        icons: [Smile, Heart, Brain, BarChart2, Lock],
        gradient: 'linear-gradient(135deg, #f472b6 0%, #7c3aed 100%)',
        accent: '#f472b6',
        status: 'Completed',
        year: '2025',
    },
    {
        id: 4,
        title: 'Nani Mart – E-Commerce Platform',
        category: 'Full Stack Web App',
        description: 'A complete e-commerce platform with product listings, shopping cart, user authentication, and order management system built with Django for secure, scalable operations.',
        longDescription: 'Nani Mart is a fully-featured e-commerce web application built with Python and Django. It provides a seamless shopping experience with dynamic product listings, a persistent shopping cart, and a comprehensive order management system. The Django backend ensures robust security, scalable data handling, and clean RESTful architecture, while the frontend delivers a smooth, responsive user experience.',
        tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite/MySQL'],
        features: ['Product listings & search', 'Shopping cart management', 'User authentication', 'Order management system', 'Secure Django backend', 'Responsive storefront UI'],
        icons: [ShoppingCart, Package, UserCheck, CreditCard, Lock, Search],
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        accent: '#f59e0b',
        status: 'Completed',
        year: '2026',
    },
];

function ProjectCard({ project, onClick }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-card glass-card-hover"
            onClick={() => onClick(project)}
            style={{
                padding: '0',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Top gradient banner */}
            <div style={{
                height: 200,
                background: project.gradient,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                {/* Animated background pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '30px 30px',
                }} />

                {/* Project icon */}
                <div style={{
                    width: 72, height: 72,
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <FolderGit2 size={36} color="white" />
                </div>

                {/* Status badge */}
                <div style={{
                    position: 'absolute',
                    top: 16, right: 16,
                    padding: '5px 12px',
                    background: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#86efac',
                }}>
                    ✓ {project.status}
                </div>

                <div style={{
                    position: 'absolute',
                    top: 16, left: 16,
                    padding: '5px 12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: 'JetBrains Mono, monospace',
                }}>
                    {project.year}
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: '28px' }}>
                <div style={{ marginBottom: '8px' }}>
                    <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#a78bfa',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        {project.category}
                    </span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                    {project.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            padding: '4px 12px',
                            background: 'rgba(124, 58, 237, 0.1)',
                            border: '1px solid rgba(124, 58, 237, 0.25)',
                            borderRadius: '100px',
                            fontSize: '12px',
                            color: '#a78bfa',
                            fontWeight: 600,
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        style={{
                            flex: 1,
                            padding: '10px',
                            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                            border: 'none',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <ExternalLink size={15} /> View Details
                    </button>
                    <button
                        style={{
                            padding: '10px 14px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            color: '#94a3b8',
                            fontSize: '13px',
                            cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <Github size={15} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function Modal({ project, onClose }) {
    if (!project) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 2000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '24px',
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        background: '#0d0d1f',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '24px',
                        padding: '40px',
                        maxWidth: '640px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                    }}
                >
                    <div style={{
                        height: 120,
                        background: project.gradient,
                        borderRadius: '16px',
                        marginBottom: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <FolderGit2 size={48} color="white" />
                    </div>

                    <div style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {project.category}
                    </div>
                    <h2 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                        {project.title}
                    </h2>
                    <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '28px' }}>
                        {project.longDescription}
                    </p>

                    <div style={{ marginBottom: '28px' }}>
                        <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px' }}>Key Features</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {project.features.map((f, i) => {
                                const Icon = project.icons[i] || Shield;
                                return (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '14px' }}>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: '8px',
                                            background: `rgba(124, 58, 237, 0.12)`,
                                            border: '1px solid rgba(124, 58, 237, 0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                        }}>
                                            <Icon size={16} color="#a78bfa" />
                                        </div>
                                        {f}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                        <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '12px' }}>Tech Stack</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: '6px 14px',
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    border: '1px solid rgba(124, 58, 237, 0.25)',
                                    borderRadius: '100px',
                                    fontSize: '13px',
                                    color: '#a78bfa',
                                    fontWeight: 600,
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: '#94a3b8',
                            fontSize: '15px',
                            fontWeight: 600,
                            cursor: 'pointer',
                        }}
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="projects" style={{ padding: '120px 24px', position: 'relative' }}>
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
                        <FolderGit2 size={14} /> Projects
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
                        Things I've <span className="gradient-text">Built</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '500px', margin: '16px auto 0' }}>
                        Real-world projects showcasing my full stack development capabilities
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '28px',
                }}>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                    ))}

                    {/* Coming Soon Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass-card"
                        style={{
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '340px',
                            textAlign: 'center',
                            background: 'rgba(255,255,255,0.02)',
                            borderStyle: 'dashed',
                        }}
                    >
                        <div style={{
                            width: 72, height: 72, borderRadius: '20px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px dashed rgba(255,255,255,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '20px',
                            fontSize: '32px',
                        }}>
                            🚀
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>More Coming Soon</h3>
                        <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7 }}>
                            I'm actively building new projects and improving my skills. Stay tuned for more exciting applications!
                        </p>
                    </motion.div>
                </div>
            </div>

            <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}
