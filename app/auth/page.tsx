"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import httpClient from "@/libs/httpClient";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "sonner";

export default function Page({ params }: { params: { code: string } }) {
  const router = useRouter();

  const { saveUserData } = useContext(AuthContext);

  useEffect(() => {
    console.log("Use effect called");

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      // Redirect to the login page
      router.push("/login");
      return;
    }

    // Use the code to authenticate the user

    httpClient()
      .post("/auth/github", { code })
      .then((res: any) => {
        saveUserData(res.data);

        toast.success(
          "You have been successfully authenticated! Redirecting...",
        );

        // Redirect to the dashboard
        router.push("/");
      })
      .catch(() => {
        // Redirect to the login page
        router.push("/login");

        toast.error(
          "An error occurred while authenticating you. Please try again.",
        );
      });
  }, []);

  return <div>page</div>;
}

// if (res.status === 200) {
//     localStorage.setItem("accessToken", res.data.accessToken);
//     router.push("/dashboard");
//   } else {
//     // Redirect to the login page
//     router.push("/login");
//   }
