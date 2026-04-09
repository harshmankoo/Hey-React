import { useState } from "react";

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
    <div>
      <h3>Day 38-39: Server State & Optimistic Updates</h3>

      <div>
        <strong>Optimistic UI:</strong> Makes the app feel faster by assuming the server will succeed.
      </div>

      <div>
        <p>
          Current Server Value: <strong>{serverValue}</strong>
        </p>

        <button onClick={handleOptimisticUpdate} disabled={isUpdating}>
          {isUpdating ? "Syncing with DB..." : "Update Data Instantly"}
        </button>
      </div>
    </div>
  );
}

export default TanStackQueryDemo;