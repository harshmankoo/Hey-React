// State Management Masterclass: Context API to Redux
// Topics: Prop Drilling, Context API, useReducer, and Redux Architecture

import { createContext, useState, useContext, useReducer, useMemo } from 'react';

/* ============================================
   📚 TABLE OF CONTENTS:
   
   1. The Problem: Prop Drilling
   2. Example 1: Basic Context (Theme Switcher)
   3. Example 2: Advanced Context (Auth + useReducer)
   4. Example 3: Redux Concepts (Mini-Redux)
   5. PROJECT: Global State Dashboard
   
   ============================================ */


// ============================================
// 1️⃣ THE PROBLEM: PROP DRILLING
// ============================================

/* WHAT IS PROP DRILLING?
- Passing data through several levels of components just to reach a deep child.
- Makes components less reusable and harder to track.

THE SOLUTION: CONTEXT API
- Allows "teleporting" data directly to any component in the tree.
- The "Provider" holds the data; the "Consumer" (hook) grabs it.



WHEN TO USE:
✅ Context: Low-frequency updates (Theme, Language, User Auth).
✅ Redux/Zand: High-frequency updates or complex, massive state logic.
*/


// ============================================
// 2️⃣ EXAMPLE 1: BASIC CONTEXT (THEME SWITCHER)
// ============================================

// 1. Create the Context object
const ThemeContext = createContext();

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // 2. Wrap components with Provider and pass 'value'
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{
        ...styles.example,
        backgroundColor: theme === 'light' ? '#ffffff' : '#1f2937',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}>
        <h3>✅ Day 16-17: Context API Basics</h3>
        <p>This section demonstrates avoiding prop drilling for UI themes.</p>
        <ThemeToggleChild />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeToggleChild() {
  // 3. Use the hook to access context anywhere in the tree
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme} 
      style={{
        ...styles.button,
        backgroundColor: theme === 'light' ? '#1f2937' : '#f9fafb',
        color: theme === 'light' ? '#ffffff' : '#000000'
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}


// ============================================
// 3️⃣ EXAMPLE 2: ADVANCED CONTEXT (AUTH + USEREDUCER)
// ============================================

/* BEST PRACTICE: 
Combine Context with useReducer for complex global states.
This mimics Redux behavior using built-in React hooks.
*/

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload, isAuth: true };
    case 'LOGOUT': return { ...state, user: null, isAuth: false };
    case 'CHANGE_LANG': return { ...state, lang: action.payload };
    default: return state;
  }
};

function AdvancedContext() {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuth: false,
    lang: 'English'
  });

  // Performance optimization: Memoize context value
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>
      <div style={styles.example}>
        <h3>✅ Day 18-19: Context + useReducer</h3>
        <AuthDashboard />
      </div>
    </AuthContext.Provider>
  );
}

function AuthDashboard() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div style={styles.infoBox}>
      {state.isAuth ? (
        <>
          <p>Logged in as: <strong>{state.user}</strong></p>
          <p>Language preference: {state.lang}</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => dispatch({ type: 'CHANGE_LANG', payload: 'Hindi' })} style={styles.navButton}>Hindi</button>
            <button onClick={() => dispatch({ type: 'CHANGE_LANG', payload: 'Punjabi' })} style={styles.navButton}>Punjabi</button>
            <button onClick={() => dispatch({ type: 'LOGOUT' })} style={styles.buttonSecondary}>Logout</button>
          </div>
        </>
      ) : (
        <button 
          onClick={() => dispatch({ type: 'LOGIN', payload: 'Admin User' })} 
          style={styles.buttonSuccess}
        >
          Login to Dashboard
        </button>
      )}
    </div>
  );
}


// ============================================
// 4️⃣ EXAMPLE 3: REDUX CONCEPTS (MINI-REDUX)
// ============================================

/* REDUX ARCHITECTURE:
1. Store: The single source of truth (Global Object).
2. Action: An object describing "what to do" ({ type: 'INCREMENT' }).
3. Reducer: A pure function that calculates the new state based on the action.


*/

function MiniRedux() {
  // Simulating Redux logic with a local reducer
  const counterReducer = (count, action) => {
    switch (action.type) {
      case 'UP': return count + 1;
      case 'DOWN': return count - 1;
      default: return count;
    }
  };

  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div style={styles.example}>
      <h3>✅ Day 20: State Management Overview</h3>
      <div style={styles.codeBox}>
        <h4>Redux Pattern Simulator</h4>
        <div style={{ fontSize: '28px', margin: '15px 0' }}>Value: {count}</div>
        <button onClick={() => dispatch({ type: 'UP' })} style={styles.button}>Dispatch UP</button>
        <button onClick={() => dispatch({ type: 'DOWN' })} style={{ ...styles.button, marginLeft: '10px' }}>Dispatch DOWN</button>
      </div>
      <div style={styles.explanation}>
        💡 <strong>Key Difference:</strong> Redux uses a single Store for the 
        entire app, while Context can be split into many small providers.
      </div>
    </div>
  );
}


// ============================================
// MAIN TUTORIAL COMPONENT
// ============================================

function Context() {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'Comparison' },
    { id: 'context', label: '1. Context API' },
    { id: 'advanced', label: '2. Advanced Patterns' },
    { id: 'redux', label: '3. Redux Intro' },
  ];

  return (
    <div style={styles.app}>
      <h1 style={styles.mainTitle}>State Management Complete Guide</h1>
      
      <div style={styles.navigation}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.navButton,
              backgroundColor: activeTab === tab.id ? '#3b82f6' : '#e5e7eb',
              color: activeTab === tab.id ? 'white' : '#1f2937',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        {activeTab === 'intro' && (
          <div style={styles.intro}>
            <h2>State Management Levels 🚀</h2>
            <div style={styles.comparisonTable}>
              <div style={styles.comparisonHeader}>
                <div>Feature</div>
                <div>Context API</div>
                <div>Redux</div>
              </div>
              <div style={styles.comparisonRow}>
                <div><strong>Setup</strong></div>
                <div>Minimal (Built-in)</div>
                <div>Heavy (Boilerplate)</div>
              </div>
              <div style={styles.comparisonRow}>
                <div><strong>Performance</strong></div>
                <div>Re-renders whole tree</div>
                <div>Very optimized</div>
              </div>
              <div style={styles.comparisonRow}>
                <div><strong>Debugging</strong></div>
                <div>Basic React DevTools</div>
                <div>Powerful (Time Travel)</div>
              </div>
            </div>
            <div style={styles.recommendationBox}>
              <strong>Intern Guideline:</strong> Use Context for things that don't 
              change often (User profile, App settings). Use Redux/Zustand if the state 
              changes every few seconds (Live charts, complex games).
            </div>
          </div>
        )}

        {activeTab === 'context' && <ThemeSwitcher />}
        {activeTab === 'advanced' && <AdvancedContext />}
        {activeTab === 'redux' && <MiniRedux />}
      </div>
    </div>
  );
}

// Styles
const styles = {
  app: { maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh' },
  mainTitle: { textAlign: 'center', color: '#111827' },
  navigation: { display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' },
  navButton: { padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  content: { backgroundColor: 'black', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  example: { padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '20px' },
  infoBox: { backgroundColor: 'black', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' },
  button: { padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' },
  buttonSuccess: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  buttonSecondary: { padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  codeBox: { backgroundColor: '#111827', color: '#10b981', padding: '20px', borderRadius: '8px', textAlign: 'center' },
  explanation: { marginTop: '15px', padding: '15px', backgroundColor: '#fef3c7', borderRadius: '8px' },
  comparisonTable: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' },
  comparisonHeader: { display: 'contents', backgroundColor: '#f9fafb', fontWeight: 'bold' },
  comparisonRow: { display: 'contents', borderBottom: '1px solid #eee' },
  recommendationBox: { marginTop: '20px', padding: '15px', backgroundColor: '#dcfce7', borderLeft: '4px solid #22c55e', borderRadius: '4px' }
};

export default Context;