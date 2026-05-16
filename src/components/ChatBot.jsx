import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Odette's AI assistant 👋 Ask me anything.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are Odette's professional AI portfolio assistant. Answer questions professionally and helpfully.",
            },
            {
              role: "user",
              content: userInput,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_OPENAI_API_KEY
            }`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, something went wrong.",
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
        className="fixed bottom-5 right-5 bg-cyan-500 text-black px-5 py-3 rounded-full shadow-lg hover:bg-cyan-400 transition z-50"
      >
        Odette
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-slate-900 border border-cyan-500 rounded-2xl shadow-2xl overflow-hidden z-50">

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

            {loading && (
              <div className="bg-slate-700 text-white p-3 rounded-xl w-fit">
                Typing...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex border-t border-slate-700">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
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