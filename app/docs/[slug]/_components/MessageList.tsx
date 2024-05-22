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
    <div className="overflow-y-auto px-4">
      <div className="mx-auto max-w-3xl">{props.children}</div>
      <div ref={endOfMessagesRef} />
    </div>
  );
}
