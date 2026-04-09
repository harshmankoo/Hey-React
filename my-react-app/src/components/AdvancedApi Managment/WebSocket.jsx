import { useState, useEffect } from "react";

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
    <div>
      <h3>Day 40: WebSockets & Socket.io</h3>

      <div>
        {messages.map(msg => (
          <div key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <p>Wait 10 seconds to see a "simulated" socket push...</p>
    </div>
  );
}

export default ChatRealTimeDemo;