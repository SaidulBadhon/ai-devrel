import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React from "react";

const resultData = {
  question: "What is the best AI DevRel strategy?",
  answer:
    "The best AI DevRel strategy is to focus on building a strong community of developers and providing them with valuable resources, support, and opportunities to learn and grow. This can include hosting events, creating tutorials and guides, offering mentorship programs, and providing access to tools and technologies that developers need to be successful. By building a strong community and fostering a culture of collaboration and innovation, companies can create a loyal and engaged developer community that will help drive the success of their AI products and services.",
  suggestions: [
    {
      text: "Can you provide examples of successful AI DevRel strategies?",
      href: "#",
    },
    {
      text: "Can you provide examples of successful AI DevRel strategies?",
      href: "#",
    },
    {
      text: "How can companies measure the success of their AI DevRel efforts?",
      href: "#",
    },
    {
      text: "How can companies measure the success of their AI DevRel efforts?",
      href: "#",
    },
    {
      text: "What are some common challenges companies face when implementing an AI DevRel strategy?",
      href: "#",
    },
  ],
  sources: [
    {
      icon: "https://www.google.com/s2/favicons?domain=en.wikipedia.org",
      url: "https://en.wikipedia.org/wiki/Developer_relations",
      header: "Developer relations",
      description:
        "Developer relations (also known as developer marketing, developer advocacy, or developer evangelism) is a set of business processes, practices, and strategies that aim to improve the communication between a company and its developer community.",
    },

    {
      icon: "https://www.google.com/s2/favicons?domain=github.com",
      url: "https://github.com/ai-devrel-strategy",
      header: "GitHub",
      description:
        "GitHub is a platform for version control and collaboration. It allows you to manage projects, track changes, and work together with others anywhere in the world.",
    },
    {
      icon: "https://www.google.com/s2/favicons?domain=stackoverflow.com",
      url: "https://stackoverflow.com/ai-devrel-strategy",
      header: "Stack Overflow",
      description:
        "Stack Overflow is a question and answer site for professional and enthusiast programmers. It's built and run by you as part of the Stack Exchange network of Q&A sites.",
    },
    {
      icon: "https://www.google.com/s2/favicons?domain=medium.com",
      url: "https://medium.com/ai-devrel-strategy",
      header: "Medium",
      description:
        "Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
    },
    {
      icon: "https://www.google.com/s2/favicons?domain=linkedin.com",
      url: "https://www.linkedin.com/ai-devrel-strategy",
      header: "LinkedIn",
      description:
        "LinkedIn is the world's largest professional network on the Internet. You can use LinkedIn to find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career.",
    },
    {
      icon: "https://www.google.com/s2/favicons?domain=twitter.com",
      url: "https://twitter.com/ai-devrel-strategy",
      header: "Twitter",
      description:
        "Twitter is a microblogging and social networking service on which users post and interact with messages known as 'tweets'. It's a platform for real-time updates and connecting with others.",
    },
    {
      icon: "https://www.google.com/s2/favicons?domain=reddit.com",
      url: "https://www.reddit.com/ai-devrel-strategy",
      header: "Reddit",
      description:
        "Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!",
    },
    {
      icon: "https://www.google.com/s2/favicons?domain=apple.com",
      url: "https://developer.apple.com/ai-devrel-strategy",
      header: "Apple Developer",
      description:
        "Apple Developer is the source for developers looking for information on developing and building apps for Apple platforms.",
    },
  ],
};
export default function Page() {
  return (
    <section className="min-h-[calc(100dvh-64px)] bg-white py-10 dark:bg-slate-950">
      <div className="container mx-auto grid h-full max-w-5xl grid-cols-[6fr_3fr] gap-8">
        <div className="relative flex flex-col gap-8">
          <h1 className="text-2xl font-medium">{resultData?.question}</h1>
          <div>
            <h6 className="mb-2 text-sm font-semibold">
              ANSWER | GPT 3.5-TURBO MODEL
            </h6>
            <div className="text-sm leading-normal  text-black/80 dark:text-white/70">
              <MDXRemote source={resultData?.answer} />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-sm font-semibold">SUGGESTIONS</h6>
            <div className="flex flex-col gap-2">
              {resultData?.suggestions?.map((data, index) => (
                <Link href={data?.href} key={index}>
                  <p className="rounded-md bg-slate-100 p-3 text-sm font-medium">
                    {data?.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="fixed bottom-2 flex w-full max-w-2xl items-center rounded-xl border-2 border-gray-500 p-4">
            <input
              placeholder="Ask followup questions..."
              className="w-full rounded-xl border-none px-2 outline-none"
            />
            <div className="flex items-center gap-4 text-black/70 dark:text-white/80">
              <i class="fa-regular fa-image"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div>
          <h6 className="mb-2 text-sm font-semibold">SOURCES</h6>
          <div className="flex flex-col gap-4">
            {resultData?.sources?.map((data, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="mb-1 flex items-center gap-1 text-xs">
                  <p className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 p-1">
                    {index + 1}
                  </p>
                  <img src={data?.icon} className="h-4 w-4" alt="" />
                  <p className="text-gray-600/90">{convertUrl(data?.url)}</p>
                </div>
                <Link href={data?.url}>
                  <h6 className="text-base font-semibold text-blue-700">
                    {data?.header}
                  </h6>
                </Link>
                <p className="max4Lines text-xs text-black/70 dark:text-white/70">
                  {data?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function convertUrl(url) {
  const urlObject = new URL(url);
  const pathname = urlObject.pathname.substring(1); // Remove the leading slash
  const formattedPathname = pathname.replace(/\//g, " > "); // Replace slashes with ' > '
  const fullString = `${urlObject.hostname} > ${formattedPathname}`;
  return fullString.length > 30
    ? fullString.substring(0, 29) + "..."
    : fullString;
}
