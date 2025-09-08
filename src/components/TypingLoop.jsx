import React, { useEffect, useState } from "react";
import "./TypingLoop.css";

const TypingLoop = ({ words, speed = 150, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = speed;

    if (isDeleting) typingSpeed /= 2;

    const typing = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, wordIndex, words, speed, delay]);

  return (
    <h1 className="text">
      {displayText}
      <span className="border-r-2 animate-blink ml-1"></span>  
    </h1>
  );
};

export default TypingLoop;
