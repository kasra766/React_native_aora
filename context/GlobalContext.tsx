import React, { useEffect, useState } from "react";
import { GlobalContext } from "@/context/useGlobalContext";
import { getCurrentUser } from "@/lib/appWrite";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        const res = await getCurrentUser();
        setIsLogin(true);
        setUser(res);
      } catch (e) {
        console.error(e);
        setIsLogin(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isLoading, setIsLoading, isLogin, setIsLogin, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
