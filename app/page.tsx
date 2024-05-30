import AddProjectButton from "@/components/AddProjectButton";
import ProjectItem from "@/components/ProjectItem";

const image =
  "https://images.unsplash.com/photo-1713403955914-b938e1bd1b2f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const projects = [
  {
    _id: "1",
    title: "Project 1",
    description: "This is a description of project 1",
    // image: image,
  },
  {
    _id: "2",
    title: "Project 2",
    description: "This is a description of project 2",
    // image: image,
  },
  {
    _id: "3",
    title: "Project 3",
    description: "This is a description of project 3",
    // image: image,
  },
  {
    _id: "4",
    title: "Project 4",
    description: "This is a description of project 4",
    // image: image,
  },
  {
    _id: "5",
    title: "Project 5",
    description: "This is a description of project 5",
    // image: image,
  },
  {
    _id: "6",
    title: "Project 6",
    description: "This is a description of project 6",
    // image: image,
  },
  {
    _id: "7",
    title: "Project 7",
    description: "This is a description of project 7",
    // image: image,
  },
  {
    _id: "8",
    title: "Project 8",
    description: "This is a description of project 8",
    // image: image,
  },
  {
    _id: "9",
    title: "Project 9",
    description: "This is a description of project 9",
    // image: image,
  },
  {
    _id: "10",
    title: "Project 10",
    description: "This is a description of project 10",
    // image: image,
  },
  {
    _id: "11",
    title: "Project 11",
    description: "This is a description of project 11",
    // image: image,
  },
  {
    _id: "12",
    title: "Project 12",
    description: "This is a description of project 12",
    // image: image,
  },
  {
    _id: "13",
    title: "Project 13",
    description: "This is a description of project 13",
    // image: image,
  },
];

export default function Home() {
  return (
    <main className="h-[calc(100dvh-64px)] bg-slate-200/40 py-10 dark:bg-slate-950">
      <section className="container relative mx-auto flex  flex-col items-start px-4">
        <h3 className="py-4 text-center text-2xl font-semibold dark:text-gray-100">
          Recent projects
        </h3>

        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          <AddProjectButton />

          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

import React from "react";
