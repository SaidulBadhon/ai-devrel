"use client";

import React, { useEffect, useState, createContext } from "react";
import httpClient from "../libs/httpClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const router = useRouter();

  const [loadingCheck, setLoadingCheck] = useState(true);
  const [loading, setLoading] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    if (!isAuthenticated) checkAuth();
  }, []);

  const checkAuth = async () => {
    if (isAuthenticated) {
      return;
    }

    setLoadingCheck(true);

    const accessToken = await localStorage.getItem("accessToken");
    const userId = await localStorage.getItem("userId");

    if (!accessToken || !userId) {
      setLoadingCheck(false);
      setIsAuthenticated(false);

      router.push("/login");
      return;
    }

    await httpClient()
      .get(`/users/${userId}`)
      .then((res) => {
        saveUserData(res.data);
      })
      .catch((err) => {
        console.log("ERROR from Check Auth : ", err);
        // enqueueSnackbar("Failed to login.", { variant: "error" });
        toast("Failed to login.", { type: "error" });
        setLoadingCheck(false);
        setIsAuthenticated(false);

        logout();
      });
  };

  const saveUserData = async (user) => {
    try {
      setLoading(true);

      setIsAuthenticated(true);
      setUser(user);

      user.accessToken &&
        (await localStorage.setItem("accessToken", user.accessToken));

      await localStorage.setItem("userId", user._id || user.id);

      setLoadingCheck(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setLoadingCheck(false);
      setIsAuthenticated(false);
      console.log(err);
    }
  };

  const logout = async () => {
    await localStorage.removeItem("accessToken");
    await localStorage.removeItem("userId");
    await localStorage.removeItem("near_app_wallet_auth_key");

    setUser();
    setIsAuthenticated(false);
    setLoadingCheck(false);
    setLoading(false);

    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        loadingCheck,

        isAuthenticated,
        user,
        // saveAuth,
        checkAuth,
        logout,
        //
        saveUserData,
      }}
    >
      {isAuthenticated === null || loading || loadingCheck ? (
        <LoadingPage />
      ) : (
        <>{props.children}</>
      )}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

const LoadingPage = () => {
  return (
    <div className="min-h-[100vh] h-full w-full flex justify-center items-center">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
