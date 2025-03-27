import React, { useEffect, useState } from "react";
import styles from "./ChatBot.module.css";
import EmojiPicker from "@emoji-mart/react";
import { sendMessageToGemini } from "../geminiAPI";

function ChatBot() {
      const [message, setMessage] = useState("");
      const [showPicker, setShowPicker] = useState(false);
      const [showChat, setShowChat] = useState(false);
      const [isClicked, setIsClicked] = useState(false);
      const [chatLog, setChatLog] = useState([{ text: "Hi! How can I help you today?", sender: "ai" }]);

      const addEmoji = (emoji) => {
            setMessage((prevMessage) => prevMessage + emoji.native);
            setShowPicker(false); // Hide picker
      };

      const togglePicker = () => {
            setShowPicker((prev) => !prev);
      };
      // Toggle chat + message bubble
      const toggleChat = () => {
            setShowChat((prev) => !prev);
            setIsClicked((prev) => !prev);
      };

      const handleSendMessage = async () => {
            if (!message.trim()) return;

            console.log("Chat log before user message:", chatLog);
            const newUserMessage = { text: message, sender: "user" };
            setChatLog((prevChatLog) => [...prevChatLog, newUserMessage]);
            console.log("Chat log after user message:", chatLog);
            setMessage("");

            try {
                  const aiResponse = await sendMessageToGemini(message);
                  console.log("Chat log before AI message:", chatLog);
                  const newAiMessage = { text: aiResponse, sender: "ai" };
                  setChatLog((prevChatLog) => [...prevChatLog, newAiMessage]);
                  console.log("Chat log after AI message:", chatLog);
            } catch (error) {
                  console.error("Failed to get AI response:", error);
                  // Handle the error
                  setChatLog((prevChatLog) => [
                        ...prevChatLog,
                        {
                              text: "Sorry, something went wrong. Please try again.",
                              sender: "ai",
                        },
                  ]);
            }
      };

      return (
            <div>
                  <button
                        className={`${styles.messageButton} ${isClicked ? styles.noBounce : ""}`}
                        onClick={toggleChat}
                  >
                        💬
                  </button>

                  {showChat && (
                        <div className={styles.chatWindow}>
                              <div className={styles.chatHeader}>
                                    <h1>Tina - Your AI Insurance Policy Assistant</h1>
                              </div>
                              <div className={styles.chatBody}>
                                    {chatLog.map((msg, index) => (
                                          <div
                                                key={index}
                                                className={`${styles.chatMessage} ${
                                                      msg.sender === "user" ? styles.userMessage : styles.aiMessage
                                                }`}
                                          >
                                                <p>{msg.text}</p>
                                          </div>
                                    ))}
                              </div>
                              <div className={styles.chatFooter}>
                                    <input
                                          type="text"
                                          placeholder="Type your message here..."
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <button onClick={togglePicker} className={styles.emojiButton}>
                                          😊
                                    </button>
                                    <button onClick={handleSendMessage} className={styles.sendButton}>
                                          Send
                                    </button>
                              </div>
                              {showPicker && (
                                    <div className={styles.emojiPickerContainer}>
                                          <EmojiPicker onEmojiSelect={addEmoji} />
                                    </div>
                              )}
                        </div>
                  )}
            </div>
      );
}

export default ChatBot;
