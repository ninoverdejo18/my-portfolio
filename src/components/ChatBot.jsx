import React, { useState } from "react";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Nino's AI assistant 👋",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    let botReply = "I am still learning.";

    if (input.toLowerCase().includes("hello")) {
      botReply = "Hello! Welcome to Nino's portfolio.";
    }

    if (input.toLowerCase().includes("skills")) {
      botReply =
        "Nino specializes in React.js, Tailwind CSS, QA Testing, Graphic Design, and Customer Service.";
    }

    if (input.toLowerCase().includes("projects")) {
      botReply = "Check out the projects section below.";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          sender: "bot",
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-cyan-500 text-black px-5 py-3 rounded-full shadow-lg hover:bg-cyan-400 transition"
      >
        AI Chat
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-slate-900 border border-cyan-500 rounded-2xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-cyan-500 text-black p-4 font-bold">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-black ml-auto"
                    : "bg-slate-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex border-t border-slate-700">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-800 text-white px-4 py-3 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-cyan-500 text-black px-4 hover:bg-cyan-400"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;