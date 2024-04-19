"use client";

import React, { useEffect, useRef } from "react";

interface MessageListProps {
  children: React.ReactNode;
}

export default function MessageList(props: MessageListProps): JSX.Element {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {props.children}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
