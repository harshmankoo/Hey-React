import { useState } from "react";

function StyledComponentDemo() {
  const [isPrimary, setIsPrimary] = useState(true);

  const dynamicStyle = {
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
    backgroundColor: isPrimary ? "#3b82f6" : "#94a3b8",
    color: "white",
    boxShadow: isPrimary
      ? "0 4px 14px 0 rgba(59, 130, 246, 0.39)"
      : "none"
  };

  return (
    <div>
      <h3>CSS-in-JS</h3>

      <button
        style={dynamicStyle}
        onClick={() => setIsPrimary(!isPrimary)} 
      >
        {isPrimary ? "Primary Style" : "Secondary Style"}
      </button>
    </div>
  );
}

export default StyledComponentDemo;