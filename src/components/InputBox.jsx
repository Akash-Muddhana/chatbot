import { useState } from "react";
import "./ChatInput.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

function InputBox({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    if (!inputText.trim() || loading) return;

    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };
    const newMessages = [...chatMessages, userMessage];
    setChatMessages(newMessages);
    setInputText("");
    setLoading(true);

    try {
      console.log("API KEY:", import.meta.env.VITE_GEMINI_API_KEY);

      const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(inputText);
      const response = await result.response;
      const text = response.text();

      const botMessage = {
        message: text,
        sender: "robot",
        id: crypto.randomUUID(),
      };
      setChatMessages([...newMessages, botMessage]);
    } catch (err) {
      console.error("Gemini Error:", err);
      setChatMessages([
        ...newMessages,
        {
          message: "Error: " + err.message,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="chat-Input-container">
      <input
        placeholder="Enter your message"
        onChange={saveInputText}
        value={inputText}
        className="chat-Input"
        disabled={loading}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage} className="send-button" disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}

export default InputBox;
