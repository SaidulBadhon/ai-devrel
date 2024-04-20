"use client";

import { useState } from "react";
import { toast } from "sonner";

import DetailsSection from "./_components/DetailsSection";
import SelectRepoSection from "./_components/SelectRepoSection";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import httpClient from "@/libs/httpClient";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function AddDocPage() {
  const [page, setPage] = useState(2);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);

  const [owner, setOwner] = useState(null);
  const [repo, setRepo] = useState(null);

  const [Loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const body = {
      name,
      description,
      featuredImage,
      owner,
      repo,
    };

    // Call the API to add the doc
    httpClient()
      .post("/github/docs", body)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    toast.success("Doc added successfully");
  };

  return (
    <div
      className="container relative mx-auto flex h-full w-full flex-col items-start justify-start gap-4 py-4"
      style={{
        minHeight: "max(calc(100vh - 4rem), 800px)",
      }}
    >
      <LoadingOverlay Loading={Loading} />

      {/* Back button */}

      <div className="">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md bg-gray-300 px-8 py-2 text-gray-500 transition-all hover:bg-cyan-600 hover:text-white"
        >
          <IoArrowBack />

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg> */}
          <span>Back</span>
        </Link>
      </div>

      <h1 className="text-2xl font-semibold">Lat's add your doc</h1>
      <p className="text-gray-500">
        Start by adding your doc name and a featured image
      </p>

      {page === 1 && (
        <DetailsSection
          page={page}
          setPage={setPage}
          //
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          setFeaturedImage={setFeaturedImage}
        />
      )}
      {page === 2 && (
        <SelectRepoSection
          page={page}
          setPage={setPage}
          //
          owner={owner}
          setOwner={setOwner}
          repo={repo}
          setRepo={setRepo}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
