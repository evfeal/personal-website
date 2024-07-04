"use client";
import React, { useRef } from "react";

interface ScrollButtonProps {
  section: string;
  text: string;
}

const ScrollButton = (props: ScrollButtonProps) => {
  const handleClick = () => {
    // Adjust the behavior to scroll to the desired section
    // For example, scroll to the section with id="about"
    const scrollSection = document.getElementById(props.section);
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="scroll-down-button" onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default ScrollButton;
