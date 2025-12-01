"use client";
import { MicrophoneIconTwo } from "@/components/shared/Icons/MicrophoneIconTwo";
import { PaperClipIcon } from "@/components/shared/Icons/PaperClipIcon";
import { SendIconTwo } from "@/components/shared/Icons/SendIconTwo";
import { useState } from "react";

export const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex space-x-4 px-5.5 py-2 shadow-md shadow-black/5"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 px-4 py-3 w-full border-none outline-none text-[#22303E66] text-sm focus:outline-none focus:text-slate-900"
      />
      <div className="flex gap-5">
        <button>
          <MicrophoneIconTwo />
        </button>
        <button>
          <PaperClipIcon />
        </button>
        <button
          type="submit"
          className="flex justify-center items-center gap-2.5 px-4 py-2 rounded-sm bg-primaryColor text-white"
        >
          <p>Send</p>
          <SendIconTwo />
        </button>
      </div>
    </form>
  );
}
