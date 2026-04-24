import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Eye, Lightbulb } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function SectionBlock({ icon: Icon, tag, title, accent, children, delay = 0 }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ delay }}
            className="glass-card glass-card-hover"
            style={{ padding: '40px', marginBottom: '24px' }}
        >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{
                    width: 52, height: 52, borderRadius: '14px', flexShrink: 0,
                    background: `rgba(${accent}, 0.12)`,
                    border: `1px solid rgba(${accent}, 0.25)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <Icon size={24} color={`rgba(${accent}, 1)`} />
                </div>
                <div style={{ flex: 1 }}>
                    <div className="section-tag" style={{ marginBottom: '12px' }}>{tag}</div>
                    <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                        {title}
                    </h3>
                    <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '15px' }}>
                        {children}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function About() {
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" style={{ padding: '120px 24px', position: 'relative' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <div className="section-tag" style={{ justifyContent: 'center' }}>
                        <User size={14} /> About Me
                    </div>
                    <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        The Person Behind the{' '}
                        <span className="gradient-text">Code</span>
                    </h2>
                </motion.div>

                {/* Blocks */}
                <SectionBlock
                    icon={User}
                    tag="About Me"
                    title="Who I Am"
                    accent="124, 58, 237"
                    delay={0}
                >
                    I am Shubham Kumar, a dedicated Computer Science and Engineering student at Lovely Professional University. I have a strong passion for technology, software development, and building innovative digital products. My academic journey has allowed me to explore various areas of computer science including web development, database management, and backend systems.
                    {' '}I enjoy designing and developing web applications that combine strong functionality with modern user interface design. My interest in full stack development enables me to work across both frontend and backend technologies to build complete end-to-end software solutions. I am continuously learning new tools and frameworks to improve my development skills and stay updated with industry trends.
                    {' '}I believe that technology has the power to transform industries and improve people's lives. My goal is to contribute to impactful software projects and grow into a highly skilled software engineer capable of building scalable platforms used by thousands or even millions of users.
                </SectionBlock>

                <SectionBlock
                    icon={Lightbulb}
                    tag="What I Do"
                    title="My Expertise & Focus"
                    accent="6, 182, 212"
                    delay={0.1}
                >
                    As an aspiring Full Stack Developer, I focus on building complete web applications that combine frontend design, backend logic, and database systems. I enjoy working on the entire development lifecycle of a software product — from designing the user interface to implementing server-side functionality and managing data.
                    {' '}My work primarily involves creating responsive user interfaces using modern frontend technologies and designing efficient backend APIs that handle business logic and data processing. I also focus on building secure authentication systems, managing databases, and ensuring that applications perform efficiently and scale well.
                    {' '}By integrating frontend frameworks, backend servers, and databases, I develop applications that are functional, reliable, and user-friendly. My goal is to build software solutions that provide real value to users while maintaining high standards of performance, scalability, and security.
                </SectionBlock>

                <SectionBlock
                    icon={Target}
                    tag="Mission"
                    title="My Mission & Purpose"
                    accent="236, 72, 153"
                    delay={0.2}
                >
                    My mission is to become a highly skilled software engineer who can build impactful digital products and scalable technology solutions. I aim to develop applications that not only demonstrate technical excellence but also provide meaningful solutions to real-world challenges.
                    {' '}Through continuous learning, experimentation, and practical project development, I strive to strengthen my knowledge of programming, software architecture, and system design. I believe that dedication, curiosity, and consistent practice are essential to mastering the art of software development.
                    {' '}In the long term, my mission is to contribute to innovative technology projects that influence industries and improve people's everyday experiences through well-designed digital platforms.
                </SectionBlock>

                <SectionBlock
                    icon={Eye}
                    tag="Vision"
                    title="Where I'm Headed"
                    accent="37, 99, 235"
                    delay={0.3}
                >
                    My vision is to become a professional software developer who contributes to building large-scale platforms and advanced technological systems used globally. I want to be part of innovative teams that develop impactful software products capable of solving complex problems and creating new opportunities in the digital world.
                    {' '}I aspire to continuously expand my knowledge of modern technologies, cloud systems, and scalable architectures. By working on challenging projects and collaborating with talented engineers, I hope to contribute to cutting-edge technology solutions.
                    {' '}Ultimately, my vision is to build software systems that positively impact society while growing as a developer who values creativity, innovation, and technical excellence.
                </SectionBlock>
            </div>
        </section>
    );
}
