// React Styling & Animation Masterclass
// Topics: CSS-in-JS, Tailwind CSS, and Framer Motion

import { useState } from 'react';



// ============================================
// 1️⃣ THE STYLING SPECTRUM
// ============================================

/* TRADITIONAL (CSS Modules):
- Scoped CSS to prevent "Global Namespace" pollution.
- Standard CSS syntax but imported as an object.

MODERN (CSS-in-JS):
- Styles are components (Styled Components/Emotion).
- Easy to use props to change styles dynamically.

FUTURE (Tailwind CSS):
- No CSS files. Just utility classes in your HTML/JSX.
- Extremely fast for building responsive layouts.
*/


// ============================================
// CSS-IN-JS & MODULES
// ============================================

/* STYLED COMPONENTS ANALOGY:
Instead of a separate .css file, you create a "Styled Button." 
If the 'primary' prop is true, it's blue; otherwise, it's gray.
*/

function StyledComponentDemo() {
  const [isPrimary, setIsPrimary] = useState(true);

  // Simulating Styled Components logic
  const dynamicStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
    backgroundColor: isPrimary ? '#3b82f6' : '#94a3b8',
    color: 'white',
    boxShadow: isPrimary ? '0 4px 14px 0 rgba(59, 130, 246, 0.39)' : 'none'
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 41-42: CSS-in-JS Concepts</h3>
      <div style={styles.infoBox}>
        <strong>Pro Tip:</strong> CSS-in-JS is perfect for Vidya Corp's 
        component libraries because styles are packaged with the code.
      </div>
      <button 
        style={dynamicStyle} 
        onClick={() => setIsPrimary(!isPrimary)}
      >
        {isPrimary ? 'Primary Style' : 'Secondary Style'}
      </button>
      <p style={styles.hint}>Click the button to see dynamic prop-based styling.</p>
    </div>
  );
}


// ============================================
//  TAILWIND CSS
// ============================================

/* THE UTILITY-FIRST APPROACH:
Instead of writing .btn { ... }, you write:
"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

RESPONSIVE DESIGN:
- sm: (Mobile)
- md: (Tablet)
- lg: (Desktop)
*/

function TailwindExplanation() {
  return (
    <div style={styles.example}>
      <h3>✅ Day 43-44: Tailwind & Responsive Design</h3>
      <div style={styles.codeBox}>
        <h4>Tailwind Logic:</h4>
        <code>{`<div className="flex flex-col md:flex-row gap-4">`}</code>
        <p style={{marginTop: '10px', fontSize: '0.9rem'}}>
          (This creates a vertical stack on mobile, but a side-by-side row on tablets!)
        </p>
      </div>
      
      <div style={styles.darkToggleCard}>
        <p><strong>Dark Mode Pattern:</strong></p>
        <code>{`className="bg-white dark:bg-slate-800 text-black dark:text-white"`}</code>
      </div>
    </div>
  );
}


// ============================================
// ANIMATION LIBRARIES
// ============================================

/* FRAMER MOTION:
The industry standard for React. It uses a "declarative" syntax:
- initial: Starting state.
- animate: Target state.
- transition: How it gets there (spring, duration).
*/

function AnimationDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.example}>
      <h3>✅ Day 45: Framer Motion Basics</h3>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.navButton}
      >
        {isOpen ? 'Close Panel' : 'Open Animated Panel'}
      </button>

      {/* Simulated Framer Motion logic */}
      <div style={{
        ...styles.animatedPanel,
        height: isOpen ? '100px' : '0px',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-20px)'
      }}>
        <p>🚀 Hello! I am a "Framer Motion" style transition.</p>
        <p>I use spring physics for that smooth "premium" feel.</p>
      </div>
    </div>
  );
}


// ============================================
// MAIN TUTORIAL WRAPPER
// ============================================

export default function StylingMasterclass() {
  const [tab, setTab] = useState('cssjs');

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Styling & Animation (Days 41–45)</h1>
        <p style={styles.subtitle}>Building High-End User Interfaces</p>
      </header>
      
      <div style={styles.navigation}>
        <button onClick={() => setTab('cssjs')} style={styles.tab(tab === 'cssjs')}>CSS-in-JS</button>
        <button onClick={() => setTab('tailwind')} style={styles.tab(tab === 'tailwind')}>Tailwind</button>
        <button onClick={() => setTab('animate')} style={styles.tab(tab === 'animate')}>Animations</button>
      </div>

      <div style={styles.content}>
        {tab === 'cssjs' && <StyledComponentDemo />}
        {tab === 'tailwind' && <TailwindExplanation />}
        {tab === 'animate' && <AnimationDemo />}
      </div>

      <footer style={styles.recommendationBox}>
        💡 <strong>Intern Task:</strong> Create a responsive card that "pops" 
        up using a hover transition. Use <code>transform: scale(1.05)</code>.
      </footer>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif', color: '#1e293b' },
  header: { textAlign: 'center', marginBottom: '40px' },
  mainTitle: { fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' },
  subtitle: { color: '#64748b', fontSize: '1.2rem' },
  navigation: { display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '30px' },
  tab: (active) => ({
    padding: '12px 24px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '700',
    backgroundColor: active ? '#8b5cf6' : '#f1f5f9',
    color: active ? '#ffffff' : '#64748b',
    transition: 'all 0.3s ease'
  }),
  content: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' },
  example: { animation: 'fadeIn 0.4s ease' },
  infoBox: { backgroundColor: '#f5f3ff', padding: '20px', borderRadius: '12px', borderLeft: '6px solid #8b5cf6', marginBottom: '25px' },
  button: { padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' },
  navButton: { padding: '10px 20px', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  codeBox: { backgroundColor: '#1e293b', color: '#38bdf8', padding: '20px', borderRadius: '12px', fontFamily: 'monospace' },
  darkToggleCard: { marginTop: '20px', padding: '15px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1' },
  animatedPanel: { 
    marginTop: '20px', 
    backgroundColor: '#fdf4ff', 
    border: '1px solid #f5d0fe', 
    borderRadius: '12px', 
    padding: '15px', 
    overflow: 'hidden', 
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
  },
  hint: { fontSize: '0.85rem', color: '#94a3b8', marginTop: '10px', fontStyle: 'italic' },
  recommendationBox: { marginTop: '40px', padding: '25px', backgroundColor: '#f0fdf4', borderRadius: '16px', border: '1px solid #dcfce7', color: '#166534' }
};