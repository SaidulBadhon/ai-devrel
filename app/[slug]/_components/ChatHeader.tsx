"use client";

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function ChatHeader(props: PropsType) {
  const { title, avatar, isActive } = props;

  const { logout } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={avatar} alt={title} className="w-12 h-12 rounded-full" />
        <div className="ml-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-500">
            {/* SShow a green dot if onlihne */}
            {isActive && (
              <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-1"></span>
            )}
            {isActive ? "Active Now" : "Offline"}
          </p>
        </div>
      </div>

      {/* Logout button */}
      <button
        className="text-cyan-600 hover:text-cyan-700"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
}
