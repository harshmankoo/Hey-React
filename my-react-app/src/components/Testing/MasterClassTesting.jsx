// React Testing Masterclass: Unit, Integration, and Best Practices
// Topics: Jest, React Testing Library (RTL), Mocking, and the Testing Pyramid

import { useState } from 'react';

// ============================================
// THE PHILOSOPHY: WHY WE TEST
// ============================================

/* THE GOAL:
- Confidence: Knowing that a change in the Header won't break the Checkout page.
- Documentation: Tests tell new interns at Vidya Corp exactly how a component should behave.
- Refactoring: Allows us to rewrite messy code safely.



THE TESTING PYRAMID:
1. Unit Tests (Base): Test individual functions or components in isolation. (Fast & Cheap)
2. Integration Tests (Middle): Test how components work together (e.g., Form + API).
3. E2E Tests (Top): Test the whole app in a real browser (e.g., Cypress/Playwright). (Slow & Expensive)
*/


// ============================================
// UNIT TESTING (Jest & RTL)
// ============================================

/* REACT TESTING LIBRARY (RTL) RULE:
"Test what the user sees, not how it works internally."
Don't test the 'state' variable; test that the text on the screen changed.

JEST BASICS:
- describe(): Groups related tests.
- test() or it(): A single test case.
- expect(): The "Assertion" (checking if the result is correct).
*/

function UnitTestingDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.example}>
      <h3>✅ Day 46-47: Unit Testing Concepts</h3>
      <div style={styles.infoBox}>
        <strong>Core Concept:</strong> Instead of checking <code>state === 1</code>, 
        RTL checks <code>screen.getByText(/count is 1/i)</code>.
      </div>
      
      <div style={styles.card}>
        <p data-testid="count-display">Current Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)} 
          style={styles.button}
          aria-label="increment-btn"
        >
          Increment
        </button>
      </div>

      <div style={styles.codeBox}>
        <h4>What the Test looks like:</h4>
        <pre>{`test('increments count on click', () => {
  render(<Counter />);
  const btn = screen.getByLabelText('increment-btn');
  fireEvent.click(btn);
  expect(screen.getByTestId('count-display')).toHaveTextContent('1');
});`}</pre>
      </div>
    </div>
  );
}


// ============================================
// INTEGRATION TESTING
// ============================================

/* INTEGRATION TESTING:
Focuses on the communication between parts. 
Example: Does the "Submit" button correctly trigger the "Success Message" 
after the API mock returns a 200 OK?
*/

function IntegrationDemo() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async () => {
    setStatus('loading');
    // Simulate API Call
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div style={styles.example}>
      <h3>✅ Day 48-49: Integration User Flows</h3>
      <div style={styles.infoBox}>
        <strong>Mocking:</strong> In integration tests, we never hit the real 
        database. We use <code>jest.mock()</code> to fake the API response.
      </div>

      <div style={styles.card}>
        {status === 'idle' && <button onClick={handleSubmit} style={styles.buttonSuccess}>Submit Application</button>}
        {status === 'loading' && <p>⏳ Sending to Vidya Corp Servers...</p>}
        {status === 'success' && <p style={{color: '#10b981', fontWeight: 'bold'}}>✅ Application Received!</p>}
      </div>
    </div>
  );
}


// ============================================
// BEST PRACTICES & TDD
// ============================================

/* TEST DRIVEN DEVELOPMENT (TDD):
1. Red: Write a test that fails (because the feature doesn't exist yet).
2. Green: Write the minimum code to make the test pass.
3. Refactor: Clean up the code while the test stays green.

WHAT TO TEST?
- User interactions (clicks, typing).
- Conditional rendering (Does the error message show?).
- Edge cases (What if the API returns an empty array?).
*/

function TestingPyramidTable() {
  return (
    <div style={styles.example}>
      <h3>✅ Day 50: Testing Strategy</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type</th>
            <th style={styles.th}>Focus</th>
            <th style={styles.th}>Tool</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}><strong>Unit</strong></td>
            <td style={styles.td}>Logic, Buttons, Utilities</td>
            <td style={styles.td}>Jest + RTL</td>
          </tr>
          <tr>
            <td style={styles.td}><strong>Integration</strong></td>
            <td style={styles.td}>Forms, Routing, API Data</td>
            <td style={styles.td}>MSW + RTL</td>
          </tr>
          <tr>
            <td style={styles.td}><strong>E2E</strong></td>
            <td style={styles.td}>Checkout flow, Login flow</td>
            <td style={styles.td}>Cypress / Playwright</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


// ============================================
// WRAPPER
// ============================================

export default function TestingMasterclass() {
  const [tab, setTab] = useState('intro');

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Testing & QA Mastery (Days 46–50)</h1>
        <p style={styles.subtitle}>Vidya Corporation Quality Standards</p>
      </header>
      
      <div style={styles.navigation}>
        <button onClick={() => setTab('intro')} style={styles.tab(tab === 'intro')}>The Strategy</button>
        <button onClick={() => setTab('unit')} style={styles.tab(tab === 'unit')}>Unit Testing</button>
        <button onClick={() => setTab('integration')} style={styles.tab(tab === 'integration')}>Integration</button>
        <button onClick={() => setTab('best')} style={styles.tab(tab === 'best')}>Best Practices</button>
      </div>

      <div style={styles.content}>
        {tab === 'intro' && (
          <div style={styles.explanation}>
            <h2>Why Interns Must Test Code</h2>
            <p>At <strong>Vidya Corporation</strong>, we ship high-quality software. Bugs cost time and money. Automated tests act as your "Safety Net."</p>
            <div style={styles.recommendationBox}>
              <strong>Rule of Thumb:</strong> Aim for 80% code coverage, but focus 
              on testing the "Happy Path" and "Common Errors" first.
            </div>
          </div>
        )}

        {tab === 'unit' && <UnitTestingDemo />}
        {tab === 'integration' && <IntegrationDemo />}
        {tab === 'best' && <TestingPyramidTable />}
      </div>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Inter, sans-serif', color: '#1f2937' },
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
    transition: '0.3s'
  }),
  content: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
  example: { animation: 'fadeIn 0.5s ease-in' },
  infoBox: { backgroundColor: '#f5f3ff', padding: '15px', borderRadius: '12px', borderLeft: '6px solid #8b5cf6', marginBottom: '25px' },
  card: { padding: '20px', borderRadius: '12px', border: '2px solid #e5e7eb', textAlign: 'center', backgroundColor: '#f9fafb' },
  button: { padding: '10px 20px', backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' },
  buttonSuccess: { padding: '10px 20px', backgroundColor: '#10b981', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' },
  codeBox: { backgroundColor: '#111827', color: '#10b981', padding: '15px', borderRadius: '12px', marginTop: '20px', textAlign: 'left', fontFamily: 'monospace', fontSize: '0.9rem' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
  th: { textAlign: 'left', padding: '12px', borderBottom: '2px solid #e5e7eb' },
  td: { padding: '12px', borderBottom: '1px solid #f3f4f6' },
  recommendationBox: { marginTop: '20px', padding: '20px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '12px', color: '#9a3412' }
};