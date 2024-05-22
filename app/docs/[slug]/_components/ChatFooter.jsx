"use client";
import { useEffect, useRef, useState } from "react";
import { IoAttach } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";

export default function ChatFooter() {
  const handleSend = () => {
    const newMessage = {
      message: "Hello",
      sender: "me",
    };

    alert("Message sent!");
  };

  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  const maxHeight = 180; // Maximum height in pixels

  useEffect(() => {
    // Reset textarea height to auto (to shrink if necessary)
    textareaRef.current.style.height = "auto";
    // Determine the new height and apply the maximum cap
    const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
    textareaRef.current.style.height = `${newHeight}px`;

    // Enable or disable scrolling based on the new height
    textareaRef.current.style.overflowY =
      newHeight >= maxHeight ? "auto" : "hidden";
  }, [value]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent the default action to stop a new line
      // Handle form submission here
      console.log("Form submitted with:", value);
      //      alert("Form submitted!");
      onClick();
    }
  };

  return (
    <div className="pb-2">
      <div className="mx-auto flex max-w-3xl items-center px-4">
        <div className="flex w-full items-end justify-between rounded-3xl bg-gray-200 p-2 dark:bg-gray-800">
          <div className="mb-1 flex h-full w-9 items-center justify-center">
            <IoAttach className="text-3xl text-gray-500" />
          </div>
          <textarea
            ref={textareaRef}
            className="textarea box-border min-h-10 w-full resize-none overflow-hidden border-none bg-transparent p-2 text-gray-200 transition-colors focus:outline-none"
            placeholder="Message AI DevRel.."
            value={value}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            rows="1"
          ></textarea>
          <button
            className="mb-1 rounded-full bg-gray-300 p-1 dark:bg-gray-600 dark:text-white"
            onClick={() => handleSend()}
          >
            <IoArrowUp className="text-2xl" />
          </button>
        </div>
      </div>
      <p className="w-full pt-2 text-center text-xs text-gray-500">
        Empowering Innovation, One Line of Code at a Time with AI DevRel
      </p>
    </div>
  );
}
