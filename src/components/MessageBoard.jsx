import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase"; // Ensure you have a properly configured Firestore instance
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");
  const [cardColor, setCardColor] = useState("#6b46c1");

  // Fetch messages from Firestore on component mount
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
      const loadedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(loadedMessages);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const addMessage = async () => {
    if (newMessage.trim()) {
      try {
        await addDoc(collection(db, "messages"), {
          name: name.trim(),
          text: newMessage.trim(),
          color: cardColor,
          timestamp: serverTimestamp(), // Add the timestamp here
        });
        setNewMessage("");
        setName("");
        setCardColor("#6b46c1");
      } catch (error) {
        console.error("Error adding message: ", error);
      }
    }
  };

  const getContrastColor = (hexColor) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for light colors and white for dark colors
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "Just now";
    const date = timestamp.toDate();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-600 to-teal-500 text-white">
      {/* Left: Message Input */}
      <div className="w-2/5 py-16 px-8 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100 flex flex-col">
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
          <HiOutlineChatBubbleOvalLeft className="inline mr-2 text-xl" /> Add
          Message
        </button>
      </div>

      {/* Right: Messages Display */}
      <div className="w-3/5 py-16 px-8 max-h-screen overflow-y-auto bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-6">
        <h3 className="text-xl font-semibold mb-6">
          Bag of wishes - {messages.length}
        </h3>
        {messages.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No messages yet. Be the first to leave one!
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-500 text-white break-words overflow-hidden"
                style={{
                  backgroundColor: msg.color,
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {msg.name && (
                  <p
                    className="text-sm font-semibold mb-2 text-center"
                    style={{
                      color: getContrastColor(msg.color),
                    }}
                  >
                    {msg.name}
                  </p>
                )}
                <p className="text-lg font-medium text-center">{msg.text}</p>
                <p
                  className="text-xs text-center mt-2"
                  style={{
                    color: getContrastColor(msg.color),
                  }}
                >
                  {formatTimestamp(msg.timestamp)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBoard;
