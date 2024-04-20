"use client";

import httpClient from "@/libs/httpClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    httpClient()
      .get("/projects")
      .then((res) => {
        if (res.data === "alive")
          return toast.error("Route for projects not found");

        setData(res.data.data);

        toast.success("Data fetched successfully");
      })
      .catch((err) => {
        console.log(err);

        toast.error("Failed to fetch data");
      });
  };

  return (
    <div
      className="container relative mx-auto flex flex-col items-start "
      style={{
        minHeight: "max(calc(100vh - 4rem), 800px)",
      }}
    >
      <div className="py-4 ">
        <h3 className="text-left text-2xl font-semibold text-gray-800">
          Featured
        </h3>
        <p className="text-left text-sm font-medium text-gray-400">
          Discover top pickss from this week
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectItem
          title="Project 1"
          description="This is a description of project 1"
        />
        <ProjectItem
          title="Project 2"
          description="This is a description of project 2"
        />
        <ProjectItem
          title="Project 3"
          description="This is a description of project 3"
        />
        <ProjectItem
          title="Project 4"
          description="This is a description of project 4"
        />
        <ProjectItem
          title="Project 5"
          description="This is a description of project 5"
        />
      </div>
    </div>
  );
}

const ProjectItem = ({ _id, title, description, image }) => {
  return (
    <Link
      href={`/docs/${_id}`}
      className="flex rounded-md border border-cyan-900/0 bg-white p-4 transition-all hover:border-cyan-900/50 hover:bg-cyan-600/5"
    >
      <div className="h-48 rounded-md bg-gray-200">
        <img
          src={image}
          alt="project"
          className="aspect-square h-full w-full rounded-md object-cover"
        />
      </div>

      <div className="ml-4 flex flex-col justify-center">
        <h4 className="mt-4 text-lg font-semibold text-gray-800">{title}</h4>
        <p className="mt-1 text-sm font-medium text-gray-400">{description}</p>
      </div>
    </Link>
  );
};
