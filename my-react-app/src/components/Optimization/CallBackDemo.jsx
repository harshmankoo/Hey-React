// (useCallback)

import { useState, useCallback } from "react";
import OptimizedButton from "./optimizedButton";

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h3>useCallback</h3>

      <p>{count}</p>

      <OptimizedButton
        incr={increment}
        label="Incr"
      />
    </div>
  );
}

export default CallbackDemo;