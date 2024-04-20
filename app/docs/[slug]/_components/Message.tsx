import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

interface MessageProps {
  message: string;
  sender: string;
}

export default function Message(props: MessageProps) {
  const { message, sender } = props;

  const avatar = `https://source.boringavatars.com/marble/120/${sender}?colors=${
    sender === "me" ? "#3b82f6" : "#cccccc"
  }`;

  return sender === "me" ? (
    <div className="flex justify-end items-start mb-4">
      <div className="bg-accent text-white py-2 px-4 rounded-md">
        <MDXRemote source={message} />
      </div>

      <img src={avatar} alt={sender} className="w-8 h-8 rounded-full ml-2" />
    </div>
  ) : (
    <div className="flex justify-start items-start mb-4">
      <img src={avatar} alt={sender} className="w-8 h-8 rounded-full mr-2" />

      {/* md:prose-lg lg:prose-xl */}
      <article className="prose bg-gray-100 py-2 px-4 rounded-md">
        <MDXRemote source={message} />
      </article>
    </div>
  );
}
