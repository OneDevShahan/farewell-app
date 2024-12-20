import React, { useState, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi"; // Import icons

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");
  const [cardColor, setCardColor] = useState("#6b46c1"); // Default card background color

  // Load messages from localStorage on initial load
  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  const addMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        name: name.trim(),
        text: newMessage.trim(),
        color: cardColor,
      };
      const updatedMessages = [...messages, newMsg];
      setMessages(updatedMessages); // Update state
      setNewMessage(""); // Clear the message input
      setName(""); // Clear the name input
      setCardColor("#6b46c1"); // Reset to default color
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-600 to-teal-500 text-white">
      {/* Left: Message Input */}
      <div className="w-2/5 p-6 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Leave a Farewell Message
        </h2>
        <input
          type="text"
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Enter your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full h-40 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 resize-none"
          placeholder="Write your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <div className="mt-4 flex items-center gap-3">
          <label
            htmlFor="color-picker"
            className="text-gray-800 dark:text-gray-200"
          >
            Card Color:
          </label>
          <input
            type="color"
            id="color-picker"
            value={cardColor}
            onChange={(e) => setCardColor(e.target.value)}
            className="w-10 h-10 border-2 border-gray-400 rounded cursor-pointer"
          />
        </div>
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-green-600 disabled:bg-gray-400 w-full flex items-center justify-center"
          onClick={addMessage}
          disabled={!newMessage.trim()}
        >
          <FiMessageCircle className="inline mr-2 text-xl" /> Add Message
        </button>
      </div>

      {/* Right: Messages Display */}
      <div className="w-3/5 max-h-screen overflow-y-auto bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-6">
        <h3 className="text-xl font-semibold mb-4">
          Bag of wishes - {messages.length}
        </h3>
        {messages.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No messages yet. Be the first to leave one!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-500 text-white break-words overflow-hidden"
                style={{
                  backgroundColor: msg.color,
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {/* Show name if provided */}
                {msg.name && (
                  <p className="text-sm font-semibold text-yellow-300 mb-2 text-center">
                    {msg.name}
                  </p>
                )}
                <p className="text-lg font-medium text-center">{msg.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBoard;
