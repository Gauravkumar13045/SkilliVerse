import React, { useState, useEffect } from "react";

export default function Theme() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("mode")) {
      return localStorage.getItem("mode");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className=" rounded-full bg-orange-300 dark:bg-black focus:outline-none  transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {mode === "dark" ? (
        <img
          src="src/images/moon.png"
          className="w-9 hidden dark:inline cursor-pointer"
          alt="Moon icon"
        />
      ) : (
        <img
          src="src/images/sun.png"
          className="w-10 inline dark:hidden cursor-pointer"
          alt="Sun icon"
        />
      )}
    </button>
  );
}
