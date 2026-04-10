// React Performance Optimization Masterclass
// Topics: React.memo, useMemo, useCallback, and Code Splitting

import { useState, useMemo, useCallback, memo, lazy, Suspense, useEffect } from 'react';


// ============================================
// 1️⃣ THE RENDERING MYTH
// ============================================

/* FACT: By default, when a parent component re-renders, ALL its children 
re-render, even if their props haven't changed.

WHY OPTIMIZE?
- To prevent "Jank" (UI lag).
- To save battery/CPU on mobile devices.
- To handle massive data sets (like large tables at Vidya Corporation).


/* REACT.MEMO: A Higher Order Component. It tells React: "Only re-render 
this component if its props actually change."

USEMEMO: A hook to "cache" the result of an expensive calculation 
so it doesn't run on every single render.
*/

// A "Heavy" component that simulates slow rendering
const SlowComponent = memo(({ name }) => {
  console.log(`%c[Render] SlowComponent for ${name}`, 'color: #ef4444');
  // Simulating a delay
  let startTime = performance.now();
  while (performance.now() - startTime < 100) {} 

  return <div style={styles.card}>🐢 Heavy Component: {name}</div>;
});

function MemoizationDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo: This calculation only runs when 'text' changes.
  // Incrementing 'count' will NOT trigger this loop.
  const expensiveCalculation = useMemo(() => {
    console.log("%c[Calc] Running expensive loop...", 'color: #f59e0b');
    return text.split("").reverse().join("");
  }, [text]);

  return (
    <div style={styles.example}>
      <h3>✅ Day 21-22: React.memo & useMemo</h3>
      <div style={styles.infoBox}>
        <strong>Note:</strong> Incrementing the counter re-renders the parent, 
        but <code>React.memo</code> saves the Heavy Component from re-rendering!
      </div>
      
      <p>Expensive Result: <strong>{expensiveCalculation}</strong></p>
      
      <input 
        placeholder="Type to trigger calculation" 
        onChange={(e) => setText(e.target.value)} 
        style={styles.input} 
      />
      
      <button onClick={() => setCount(c => c + 1)} style={styles.button}>
        Re-render Parent (Count: {count})
      </button>

      <SlowComponent name="Static Data" />
    </div>
  );
}


//  USECALLBACK

/* THE PROBLEM: In JavaScript, `function() {}` !== `function() {}`. 
Every time a parent re-renders, it creates a NEW function reference. 
This breaks React.memo because the "prop" looks different to React.

USECALLBACK: "Freezes" the function reference so it stays the same 
between renders.
*/

const OptimizedButton = memo(({ onClick, label }) => {
  console.log(`%c[Render] Button: ${label}`, 'color: #10b981');
  return <button onClick={onClick} style={styles.navButton}>{label}</button>;
});

function CallbackDemo() {
  const [count, setCount] = useState(0);

  // Without useCallback, this is a "new" function every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency means this function never changes

  return (
    <div style={styles.example}>
      <h3>✅ Day 23-24: useCallback</h3>
      <p>Count: {count}</p>
      <div style={styles.infoBox}>
        The button below is memoized. It will <strong>never</strong> re-render 
        because the <code>increment</code> function reference is stable.
      </div>
      <OptimizedButton onClick={increment} label="Optimized Increment" />
    </div>
  );
}


// ============================================
// CODE SPLITTING (SIMULATED)
// ============================================

/* REACT.LAZY: Loads a component only when it's needed (e.g., when a user 
clicks a tab).
SUSPENSE: Shows a fallback (like a spinner) while the code is loading.
*/

const SimulatedLazyDashboard = () => {
  return (
    <div style={styles.successBox}>
      <h4>🚀 Lazy Loaded Dashboard</h4>
      <p>This code was loaded dynamically only after you clicked the tab!</p>
    </div>
  );
};

function CodeSplittingDemo() {
  const [show, setShow] = useState(false);

  return (
    <div style={styles.example}>
      <h3>✅ Day 25: Code Splitting</h3>
      <p>Reduces the initial "Bundle Size" of your app.</p>
      
      {!show ? (
        <button onClick={() => setShow(true)} style={styles.button}>
          Load Admin Dashboard (Lazy)
        </button>
      ) : (
        <Suspense fallback={<div>Loading component...</div>}>
          <SimulatedLazyDashboard />
        </Suspense>
      )}
    </div>
  );
}


// ============================================
// WRAPPER
// ============================================

export default function PerformanceMasterclass() {
  const [activeTab, setActiveTab] = useState('memo');

  return (
    <div style={styles.app}>
      <h1 style={styles.mainTitle}>Performance Mastery (Days 21–25)</h1>
      
      <div style={styles.navigation}>
        <button onClick={() => setActiveTab('memo')} style={styles.tab(activeTab === 'memo')}>memo & useMemo</button>
        <button onClick={() => setActiveTab('callback')} style={styles.tab(activeTab === 'callback')}>useCallback</button>
        <button onClick={() => setActiveTab('lazy')} style={styles.tab(activeTab === 'lazy')}>Code Splitting</button>
      </div>

      <div style={styles.content}>
        {activeTab === 'memo' && <MemoizationDemo />}
        {activeTab === 'callback' && <CallbackDemo />}
        {activeTab === 'lazy' && <CodeSplittingDemo />}
      </div>

      <div style={styles.recommendationBox}>
        <h3>⚠️ When NOT to optimize:</h3>
        <ul>
          <li>Don't wrap every component in <code>memo</code>. It has its own cost.</li>
          <li>Don't use <code>useMemo</code> for simple math (1 + 1).</li>
          <li><strong>Rule:</strong> Measure performance issues first, then fix them.</li>
        </ul>
      </div>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Inter, sans-serif' },
  mainTitle: { textAlign: 'center', color: '#111827' },
  navigation: { display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' },
  tab: (active) => ({
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: active ? '#3b82f6' : '#e5e7eb',
    color: active ? 'white' : '#4b5563'
  }),
  content: { backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
  example: { marginBottom: '30px' },
  infoBox: { backgroundColor: '#eff6ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3b82f6', marginBottom: '20px' },
  successBox: { backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #22c55e' },
  card: { padding: '15px', backgroundColor: '#f9fafb', border: '1px solid #ddd', borderRadius: '8px', marginTop: '10px' },
  button: { padding: '10px 20px', backgroundColor: '#1f2937', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'block', margin: '10px 0' },
  navButton: { padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  input: { padding: '10px', width: '100%', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' },
  recommendationBox: { marginTop: '40px', padding: '20px', backgroundColor: '#fffbeb', borderRadius: '12px', border: '1px solid #fde68a' }
};