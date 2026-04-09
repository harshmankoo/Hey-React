import { useState } from "react";

function AnimationDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3>Animation</h3>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Panel" : "Open Panel"}
      </button>

      <div
        style={{
          height: isOpen ? "100px" : "0px",
          opacity: isOpen ? 1 : 0, // Controls visibilty here
          transform: isOpen
            ? "translateY(0)" // Normal Position
            : "translateY(-20px)", // Shifts Upwards
          overflow: "hidden", // Hides the text when size is small
          transition: "0.5s" // Add a smooth Transition here
        }}
      >
        <p>Animated Content</p>
      </div>
    </div>
  );
}

export default AnimationDemo;