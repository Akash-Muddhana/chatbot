import { useState } from "react";
import InputBox from "./components/InputBox";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello! Ask me anything.",
      sender: "robot",
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <InputBox chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App;
