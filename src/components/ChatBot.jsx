import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Odette's AI assistant 👋 Ask me anything.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
      sender: "user",
    };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);

    const updatedMessages = [
      {
        role: "system",
        content:
          "You are Odette's professional AI portfolio assistant. Answer professionally, friendly, and concise. Help users learn about Odette's skills, projects, services, and experience.",
      },

      // Previous chat history
      ...messages.map((msg) => ({
        role: msg.role,
        content: msg.text,
      })),

      // Latest user message
      {
        role: "user",
        content: input,
      },
    ];

    setInput("");
    setLoading(true);

    try {
      // Calls your Vercel backend API
      const response = await axios.post("/api/chat", {
        messages: updatedMessages,
      });

      const botReply =
        response.data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: botReply,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(
        error.response?.data || error.message
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Sorry, the AI assistant is currently unavailable.",
          sender: "bot",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-cyan-500 text-black px-5 py-3 rounded-full shadow-lg hover:bg-cyan-400 transition z-50 font-semibold"
      >
        Odette AI
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-[350px] h-[500px] bg-slate-900 border border-cyan-500 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col">

          {/* Header */}
          <div className="bg-cyan-500 text-black p-4 font-bold text-lg">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-black ml-auto"
                    : "bg-slate-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-slate-700 text-white p-3 rounded-2xl w-fit animate-pulse">
                AI is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex border-t border-slate-700 bg-slate-800">

            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              className="flex-1 bg-transparent text-white px-4 py-4 outline-none"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-cyan-500 text-black px-5 hover:bg-cyan-400 transition font-semibold"
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