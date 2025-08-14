import React, { useState, useEffect } from 'react';

const words = ["Verse", "Build", "Grow", "Learn", "Hub"];

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const speed = isDeleting ? 75 : 150;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, charIndex, wordIndex]);

  return (
    <span className="text-2xl font-semibold text-white-800 font-bold   font-mono text-black dark:text-white ">
      Skill
      <span className="typing-effect text-orange-400 ml-0" >  <span className="hidden lg:inline ">{displayText}</span></span>
      <style>{`
        /* The animation is defined only once, using a CSS variable for color */
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: var(--cursor-color); }
        }

        /* We set the default color for light mode on the root element */
        :root {
          --cursor-color: white;
        }
        
        /* We override that color for dark mode */
        @media (prefers-color-scheme: dark) {
          :root {
            --cursor-color: dark;
          }
        }

        /* This is your element that applies the animation */
        .typing-effect {
          border-right: 2px solid;
          animation: blink-caret 0.75s step-end infinite;
        }
      `}</style>
    </span>
  );
};

export default TypingEffect;
