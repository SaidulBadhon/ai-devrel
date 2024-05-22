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
    <section className="dark:bg-gray-900">
      <div className="container relative mx-auto flex h-[calc(100dvh-64px)] w-full flex-col items-start justify-start gap-4 py-4">
        <LoadingOverlay Loading={Loading} />

        {/* Back button */}

        <div className="">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-gray-200 px-8 py-2 text-gray-500 transition-all hover:bg-cyan-600 hover:text-white dark:bg-gray-600 dark:text-gray-200"
          >
            <IoArrowBack />
            <span>Back</span>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold dark:text-gray-100">
          Let&apos;s add your doc
        </h1>
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
    </section>
  );
}
