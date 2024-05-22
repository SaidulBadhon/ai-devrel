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
    <div className="mb-4 flex items-start justify-end">
      <div className="rounded-3xl bg-gray-200 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-100">
        <MDXRemote source={message} />
      </div>

      {/* <img src={avatar} alt={sender} className="ml-2 h-8 w-8 rounded-full" /> */}
    </div>
  ) : (
    <div className="mb-4 flex items-start justify-start">
      <img src={avatar} alt={sender} className="mr-2 h-8 w-8 rounded-full" />

      {/* md:prose-lg lg:prose-xl */}
      <article className="prose rounded-3xl bg-gray-200 p-2 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-100 dark:prose-headings:text-white ">
        <MDXRemote source={message} />
      </article>
    </div>
  );
}
