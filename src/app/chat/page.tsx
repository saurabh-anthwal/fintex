"use client";
import React, { useState, FormEvent, useRef, useEffect } from 'react';

// Define types for conversation entries
interface ConversationEntry {
  role: 'user' | 'bot';
  message: string;
}

const ChatBot = () => {
  const conversationEndRef = useRef<HTMLDivElement | null>(null);
  const [chatInput, setChatInput] = useState<string>('');
  const [conversation, setConversation] = useState<ConversationEntry[]>([
    { role: 'bot', message: 'Hello! I am your assistant. How can I help you today?' },
  ]);

  // Dummy responses for user inputs
  const getDummyResponse = (question: string): string => {
    if (question.includes('what is your name')) {
      return "I'm Chatbot LLM!";
    } else if (question.includes('what can you do')) {
      return 'I can answer questions, help you with tasks, and chat with you!';
    } else {
      return 'Sorry, I do not understand that. Can you ask something else?';
    }
  };

  // Handle the form submission when user sends a message
  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    if (chatInput.trim() === '') return;

    // Append user message to the conversation
    const newConversation: ConversationEntry[] = [
      ...conversation,
      { role: 'user', message: chatInput },
    ];

    // Get dummy response based on user input
    const botResponse = getDummyResponse(chatInput.toLowerCase());

    // Append bot response to the conversation
    setConversation([
      ...newConversation,
      { role: 'bot', message: botResponse },
    ]);

    // Clear chat input
    setChatInput('');
  };

  const scrollToBottom = ()=>{
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  useEffect(()=>{
    scrollToBottom()
  },[conversation])
  return (
    <div className=" p-6 bg-white shadow-lg rounded-lg mt-10">
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">Chat with Specialized LLM</h3>
      <div className="conversation h-80 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
        {conversation.map((chat, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-lg max-w-md ${
              chat.role === 'user'
                ? 'bg-green-200 ml-auto text-right'
                : 'bg-blue-200 mr-auto text-left'
            }`}
          >
            <b>{chat.role === 'user' ? 'You: ' : 'Bot: '}</b>
            {chat.message}
          </div>
        ))}
        <div ref={conversationEndRef} />
      </div>
      <form onSubmit={handleSend} className="flex items-center space-x-3">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Type your question..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
