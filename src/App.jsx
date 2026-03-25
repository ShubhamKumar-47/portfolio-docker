import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#060610',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ marginBottom: '32px', textAlign: 'center' }}
      >
        <div style={{
          width: 64, height: 64,
          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
          borderRadius: '18px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
          boxShadow: '0 0 40px rgba(124, 58, 237, 0.5)',
        }}>
          <span style={{ color: 'white', fontSize: '28px', fontWeight: 800, fontFamily: 'Syne, sans-serif' }}>R</span>
        </div>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '24px', letterSpacing: '-0.02em' }}>
          Ragavendra
        </div>
        <div style={{ color: '#475569', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace', marginTop: '4px' }}>
          Full Stack Developer
        </div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        style={{
          width: 200, height: 3,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '60%', height: '100%',
            background: 'linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)',
            borderRadius: 3,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
          {/* Noise texture overlay */}
          <div className="noise-bg" />

          {/* Subtle radial gradient at the very top */}
          <div style={{
            position: 'fixed',
            top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '80vw', height: '60vh',
            background: 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          <Navbar />

          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <Projects />
            <Training />
            <Education />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
