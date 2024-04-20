import Link from "next/link";
import React from "react";
import { IoAddOutline } from "react-icons/io5";

export default function AddProjectButton() {
  return (
    <Link
      className="flex flex-col justify-center items-center bg-white rounded-lg p-4 border transition-all border-cyan-900/0 hover:bg-cyan-600/5 hover:border-cyan-900/50"
      href="/docs/add"
    >
      <IoAddOutline className="h-20 w-20" />

      <p className="text-sm mt-4">Add a project</p>
    </Link>
  );
}
