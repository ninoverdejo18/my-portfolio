import { useState, useRef, useEffect } from "react";
import axios from "axios";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm your AI assistant 👋 Ask me anything.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const updatedMessages = [
      {
        role: "system",
        content:
          "You are a professional AI portfolio assistant. Be friendly, concise, and helpful.",
      },
      ...messages.map((msg) => ({
        role: msg.role,
        content: msg.text,
      })),
      {
        role: "user",
        content: input,
      },
    ];

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", {
        messages: updatedMessages,
      });

      const botReply = response.data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: botReply,
          sender: "bot",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "AI assistant is currently unavailable.",
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
        className="fixed bottom-5 right-5 px-5 py-3 rounded-full font-semibold text-black shadow-lg transition z-50
        bg-gradient-to-r from-[#CDFF45] to-[#A3E635]
        hover:scale-105 hover:shadow-lg hover:shadow-[#CDFF45]/20"
      >
        AI Assistant
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-[350px] h-[500px] bg-black/90 border border-[#CDFF45]/30 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col backdrop-blur-xl">

          {/* Header */}
          <div className="bg-gradient-to-r from-[#CDFF45] to-[#A3E635] text-black p-4 font-bold text-lg">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#CDFF45] text-black ml-auto"
                    : "bg-slate-800 text-white border border-[#CDFF45]/10"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-slate-800 text-white p-3 rounded-2xl w-fit animate-pulse border border-[#CDFF45]/30">
                AI is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex border-t border-[#CDFF45]/20 bg-slate-900">

            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent text-white px-4 py-4 outline-none focus:ring-1 focus:ring-[#CDFF45]"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="px-5 font-semibold text-black transition
              bg-gradient-to-r from-[#CDFF45] to-[#A3E635]
              hover:opacity-90"
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