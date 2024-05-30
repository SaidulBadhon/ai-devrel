"use client";

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const pathname = usePathname();

  return (
    <header className="outline-b bg-slate-200/40 dark:bg-gray-900">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-cyan-600">AI DevRel</h1>
          </Link>

          <Link
            href="/discover"
            className={`ml-4 rounded-md ${pathname === "/discover" ? "bg-cyan-600/10 text-cyan-600" : "bg-gray-500/10 text-gray-700 dark:text-gray-400"} px-4 py-2 text-sm font-medium transition-all hover:bg-cyan-600/10 hover:text-cyan-600`}
          >
            Discover
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="right-4 flex items-center  gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome, {user?.name}
            </p>
            <button onClick={logout} className="text-sm text-cyan-600">
              Logout
            </button>
          </div>
        ) : (
          pathname !== "/login" && (
            <Link
              href="/login"
              className="rounded-md border border-cyan-900/50 bg-cyan-600/5 px-4 py-2 text-sm font-medium text-cyan-600 transition-all hover:bg-cyan-600/50 hover:text-white"
            >
              Login
            </Link>
          )
        )}
      </div>
    </header>
  );
}
