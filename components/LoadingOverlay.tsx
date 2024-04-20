import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadingOverlay({ loading }: { loading: boolean }) {
  return (
    <div
      className={`${!loading ? "hidden" : ""} fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-50`}
    >
      <div className="border-t-3 absolute h-[48px] w-[48px] animate-spin rounded-full border-[3px] border-gray-300" />
      <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin text-cyan-600" />
    </div>
  );
}
