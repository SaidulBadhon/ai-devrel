import React from "react";

export default function DetailsSection({ page, setPage, setFeaturedImage }) {
  const uploadFileUpdateState = async (body) => {
    const res = await fetch("https://ipfs.near.social/add", {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });

    const data = await res.json();

    // https://ipfs.near.social/ipfs/bafkreidcawiea3ngptjyggu444xqpfs2isqp5vwerpwkcvvi5xvtggcdsy
    const url = `https://ipfs.near.social/ipfs/${data.cid}`;
    console.log(url);
    setFeaturedImage(url);
  };

  const filesOnChange = (files) => {
    if (files) {
      uploadFileUpdateState(files[0]);
    }
  };

  return (
    <form
      className={`${page === 1 ? "" : "hidden"} flex w-full flex-col gap-4 overflow-hidden`}
      onSubmit={(e) => {
        e.preventDefault();
        setPage(2);
      }}
    >
      {/* Name: */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-gray-500">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          className="rounded-md border border-gray-300 p-2"
          placeholder="Enter doc name"
        />
      </div>

      {/* description */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm text-gray-500">
          Description
        </label>
        <textarea
          required
          id="description"
          className="rounded-md border border-gray-300 p-2"
          placeholder="Enter doc description"
          rows={10}
        />
      </div>

      {/* Featured Image */}
      <div className="flex flex-col gap-2">
        <label htmlFor="featuredImage" className="text-sm text-gray-500">
          Featured Image
        </label>

        <input
          id="featuredImage"
          type="file"
          multiple={false}
          accepts={["image/*"]}
          minFileSize={1}
          clickable
          onChange={(e) => filesOnChange(e.target.files)}
        />
      </div>

      <div className="absolute bottom-4">
        <button
          className="rounded-md bg-cyan-600 px-8 py-2 text-white"
          type="submit"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
