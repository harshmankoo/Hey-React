// (Memo + Callback Target)

import { memo } from "react";

const OptimizedButton = memo(({ incr, label }) => {
  console.log("Re-rendered !!")
  return <button onClick={incr}>{label}</button>;
  
});

export default OptimizedButton;