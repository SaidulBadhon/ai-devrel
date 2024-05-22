"use client";

import httpClient from "@/libs/httpClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const featureImage =
  "https://images.unsplash.com/photo-1602189188215-c4a3566f90fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
    <section className="dark:bg-gray-900">
      <div className="container relative mx-auto flex h-[calc(100dvh-65px)] flex-col items-start px-4 ">
        <div className="py-4 ">
          <h3 className="text-left text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Featured
          </h3>
          <p className="text-left text-sm font-medium text-gray-400">
            Discover top pickss from this week
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ProjectItem
            image={featureImage}
            title="Project 1"
            description="This is a description of project 1"
          />
          <ProjectItem
            image={featureImage}
            title="Project 2"
            description="This is a description of project 2"
          />
          <ProjectItem
            image={featureImage}
            title="Project 3"
            description="This is a description of project 3"
          />
          <ProjectItem
            image={featureImage}
            title="Project 4"
            description="This is a description of project 4"
          />
          <ProjectItem
            image={featureImage}
            title="Project 5"
            description="This is a description of project 5"
          />
        </div>
      </div>
    </section>
  );
}

const ProjectItem = ({ _id, title, description, image }) => {
  return (
    <Link
      href={`/docs/${_id}`}
      className="flex rounded-md border border-cyan-900/0 bg-white p-4 transition-all hover:border-cyan-900/50 hover:bg-cyan-600/5 dark:bg-gray-800"
    >
      <div className="dakb:bg-gray-200 h-48 rounded-md">
        <img
          src={image}
          alt="project"
          className="aspect-square h-full w-full rounded-md object-cover"
        />
      </div>

      <div className="ml-4 flex flex-col justify-center">
        <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h4>
        <p className="mt-1 text-sm font-medium text-gray-400">{description}</p>
      </div>
    </Link>
  );
};
