// API Integration & Real-Time Mastery
// Topics: Axios Interceptors, TanStack Query, Optimistic Updates, and WebSockets

import { useState, useEffect, useMemo, useReducer } from 'react';


// ============================================
// 1️⃣ EVOLUTION OF FETCHING
// ============================================

/* FETCH VS AXIOS:
- Fetch: Built-in, but needs two .then() calls and manual error handling for 4xx/5xx.
- Axios: Automatic JSON parsing, better error handling, and Interceptors.

SERVER STATE VS CLIENT STATE:
- Client State: "Is this modal open?" (useState/Context).
- Server State: "What is the user's name from the DB?" (TanStack Query).


*/


// ============================================
// ADVANCED API PATTERNS
// ============================================

/* INTERCEPTORS:
Think of an interceptor as a "Security Guard" at the Vidya Corporation entrance.
- Request Interceptor: Checks if you have an ID card (Auth Token) before you enter.
- Response Interceptor: Checks if your session expired and kicks you out (Redirect to Login).
*/

const MockAxiosWrapper = {
  get: async (url) => {
    console.log(`%c[Request Interceptor] Adding Auth Token to ${url}`, 'color: #3b82f6');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { id: 1, status: "Connected", latency: "24ms" } });
      }, 800);
    });
  }
};

function ApiClientDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await MockAxiosWrapper.get('/api/v1/status');
    setData(response.data);
    setLoading(false);
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 36-37: Axios & Interceptors</h3>
      <div style={styles.infoBox}>
        <strong>Interceptors:</strong> Use them to globally handle 401 Unauthorized errors or attach JWT tokens to every header.
      </div>
      <button onClick={fetchData} style={styles.button} disabled={loading}>
        {loading ? 'Intercepting...' : 'Fetch with Mock Axios'}
      </button>
      {data && (
        <pre style={styles.codeBox}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}


// ============================================
// TANSTACK QUERY (REACT QUERY)
// ============================================

/* WHY TANSTACK QUERY?
1. Caching: It remembers data so you don't fetch twice.
2. Optimistic Updates: UI updates *before* the server responds (feels instant).
3. Auto-Refetch: Refetches data when the window is refocused.


*/

function TanStackQueryDemo() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [serverValue, setServerValue] = useState("Original Data");

  const handleOptimisticUpdate = () => {
    const previousValue = serverValue;
    // 1. Update UI instantly
    setServerValue("New Updated Data (Optimistic)");
    setIsUpdating(true);

    // 2. Simulate API Call
    setTimeout(() => {
      const isError = Math.random() > 0.7; // 30% chance of failure
      if (isError) {
        alert("Server Error! Rolling back...");
        setServerValue(previousValue); // 3. Rollback on failure
      }
      setIsUpdating(false);
    }, 1500);
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 38-39: Server State & Optimistic Updates</h3>
      <div style={styles.infoBox}>
        <strong>Optimistic UI:</strong> Makes the app feel faster by assuming the server will succeed.
      </div>
      <div style={styles.dashboardCard}>
        <p>Current Server Value: <strong>{serverValue}</strong></p>
        <button 
          onClick={handleOptimisticUpdate} 
          style={styles.buttonSuccess}
          disabled={isUpdating}
        >
          {isUpdating ? 'Syncing with DB...' : 'Update Data Instantly'}
        </button>
      </div>
    </div>
  );
}


// ============================================
// WEBSOCKETS & REAL-TIME
// ============================================

/* WEBSOCKETS VS HTTP:
- HTTP: You ask the server, "Any new mail?" (Polling).
- WebSockets: The server knocks on your door, "You've got mail!" (Push).


*/

function ChatRealTimeDemo() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Vidya Corp Chat!", sender: "System" }
  ]);

  useEffect(() => {
    // Simulate a WebSocket incoming message every 10 seconds
    const interval = setInterval(() => {
      const newMessage = {
        id: Date.now(),
        text: "New real-time update received!",
        sender: "Server"
      };
      setMessages(prev => [...prev, newMessage]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.example}>
      <h3>✅ Day 40: WebSockets & Socket.io</h3>
      <div style={styles.chatWindow}>
        {messages.map(msg => (
          <div key={msg.id} style={styles.chatMsg}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <p style={styles.hint}>Wait 10 seconds to see a "simulated" socket push...</p>
    </div>
  );
}


// ============================================
// WRAPPER
// ============================================

export default function ApiIntegrationMasterclass() {
  const [tab, setTab] = useState('overview');

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>API & Real-Time Mastery (Days 36–40)</h1>
        <p style={styles.subtitle}>Professional Data Patterns for Vidya Corporation</p>
      </header>
      
      <div style={styles.navigation}>
        <button onClick={() => setTab('overview')} style={styles.tab(tab === 'overview')}>The Strategy</button>
        <button onClick={() => setTab('axios')} style={styles.tab(tab === 'axios')}>Axios/Interceptors</button>
        <button onClick={() => setTab('tanstack')} style={styles.tab(tab === 'tanstack')}>TanStack Query</button>
        <button onClick={() => setTab('socket')} style={styles.tab(tab === 'socket')}>WebSockets</button>
      </div>

      <div style={styles.content}>
        {tab === 'overview' && (
          <div style={styles.explanation}>
            <h2>Data Fetching Maturity Model</h2>
            <ol>
              <li><strong>Level 1:</strong> <code>useEffect</code> + <code>fetch</code> (Beginner)</li>
              <li><strong>Level 2:</strong> <code>Axios</code> + Centralized API Wrapper (Intermediate)</li>
              <li><strong>Level 3:</strong> <code>TanStack Query</code> for Caching & Sync (Professional)</li>
              <li><strong>Level 4:</strong> <code>WebSockets</code> for Real-time push (Expert)</li>
            </ol>
            <div style={styles.recommendationBox}>
              <strong>Intern Rule:</strong> Never use <code>useEffect</code> for data fetching 
              if you can use <code>TanStack Query</code>. It handles loading, error, and caching for you.
            </div>
          </div>
        )}

        {tab === 'axios' && <ApiClientDemo />}
        {tab === 'tanstack' && <TanStackQueryDemo />}
        {tab === 'socket' && <ChatRealTimeDemo />}
      </div>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Inter, sans-serif', color: '#1f2937' },
  header: { textAlign: 'center', marginBottom: '30px' },
  mainTitle: { fontSize: '2.2rem', fontWeight: '800', color: '#111827' },
  subtitle: { color: '#6b7280', fontSize: '1.1rem' },
  navigation: { display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '30px' },
  tab: (active) => ({
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '700',
    backgroundColor: active ? '#4f46e5' : '#ffffff',
    color: active ? '#ffffff' : '#4b5563',
    boxShadow: active ? '0 10px 15px -3px rgba(79, 70, 229, 0.4)' : 'none',
    transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }),
  content: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
  example: { animation: 'fadeIn 0.5s ease-in' },
  infoBox: { backgroundColor: '#f5f3ff', padding: '20px', borderRadius: '12px', borderLeft: '6px solid #8b5cf6', marginBottom: '25px' },
  button: { padding: '12px 24px', backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600' },
  buttonSuccess: { padding: '12px 24px', backgroundColor: '#10b981', color: '#ffffff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '600' },
  codeBox: { backgroundColor: '#111827', color: '#10b981', padding: '20px', borderRadius: '12px', marginTop: '20px', overflowX: 'auto', fontFamily: 'Fira Code, monospace' },
  dashboardCard: { padding: '25px', borderRadius: '16px', border: '2px solid #e5e7eb', textAlign: 'center' },
  chatWindow: { height: '200px', overflowY: 'auto', border: '1px solid #d1d5db', borderRadius: '12px', padding: '15px', backgroundColor: '#f9fafb', marginBottom: '10px' },
  chatMsg: { padding: '8px 12px', backgroundColor: '#ffffff', borderRadius: '8px', marginBottom: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
  hint: { fontSize: '0.85rem', color: '#9ca3af', fontStyle: 'italic' },
  recommendationBox: { marginTop: '20px', padding: '20px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '12px', color: '#9a3412' }
};