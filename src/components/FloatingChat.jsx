import React from "react";
import "./FloatingChat.css";
import { FaTelegramPlane } from "react-icons/fa";

const FloatingChat = () => {
  return (
    <a
      href="https://t.me/yonvathana"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-chat animate-bounce"
      aria-label="Chat on Telegram"
    >
      <FaTelegramPlane className="chat-icon" />
    </a>
  );
};

export default FloatingChat;
