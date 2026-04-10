import { useState, Suspense, lazy } from "react";


const LazyDashboard = lazy(() => import("./lazyDashboard"));

function CodeSplittingDemo() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>Code Splitting</h3>

      {!show ? (
        <button onClick={() => setShow(true)}>
          Load Dashboard
        </button>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyDashboard />
        </Suspense>
      )}
    </div>
  );
}

export default CodeSplittingDemo;