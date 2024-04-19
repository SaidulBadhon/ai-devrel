"use client";

export default function ChatFooter() {
  const handleSend = () => {
    const newMessage = {
      message: "Hello",
      sender: "me",
    };

    alert("Message sent!");
  };

  return (
    <div className="p-4 border-t">
      <div className="flex items-center">
        <textarea
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-md"
          style={{ maxHeight: "5rem", resize: "none" }}
          rows={5}
        ></textarea>

        <button
          className="bg-accent text-white py-2 px-8 ml-2 rounded-md"
          onClick={() => handleSend()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
