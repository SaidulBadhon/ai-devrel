import Link from "next/link";
import React from "react";
import { IoAddOutline } from "react-icons/io5";

export default function AddProjectButton() {
  return (
    <Link
      className="flex flex-col items-center justify-center rounded-lg border border-cyan-900/0 bg-white p-4 transition-all hover:border-cyan-900/50 hover:bg-cyan-600/5 dark:bg-gray-800"
      href="/docs/add"
    >
      <IoAddOutline className="h-20 w-20 dark:text-gray-300" />

      <p className="mt-4 text-sm dark:text-gray-100">Add a project</p>
    </Link>
  );
}
