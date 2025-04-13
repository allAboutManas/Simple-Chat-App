import { useState, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  // Initialize messages from localStorage
  const [messages, setMessages] = useState(() => {
    try {
      const savedMessages = localStorage.getItem('chatMessages');
      return savedMessages ? JSON.parse(savedMessages) : [];
    } catch (error) {
      console.error('Error loading messages from localStorage:', error);
      return [];
    }
  });

  // Save messages to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages to localStorage:', error);
    }
  }, [messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      isOwn: true,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate a response after 1 second
    setTimeout(() => {
      const responseMessage = {
        id: Date.now() + 1,
        text: `Echo: ${text}`,
        timestamp: new Date().toISOString(),
        isOwn: false,
      };
      setMessages(prevMessages => [...prevMessages, responseMessage]);
    }, 1000);
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl px-4 py-6 sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-2xl font-bold text-gray-800">Chat App</h1>
                  <button
                    onClick={clearMessages}
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Clear Chat
                  </button>
                </div>
                <div className="h-[400px] overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                      isOwn={message.isOwn}
                    />
                  ))}
                </div>
                <ChatInput onSendMessage={handleSendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;