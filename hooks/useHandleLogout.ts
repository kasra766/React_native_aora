import { signOut } from "@/lib/appWrite";
import { router } from "expo-router";
import { useGlobalContext } from "@/context/useGlobalContext";

export function useHandleLogout() {
  const { setUser, setIsLogin } = useGlobalContext();
  async function handleLogout() {
    await signOut();
    setUser(null);
    setIsLogin(false);
    router.replace("/sign-in");
  }
  return handleLogout
}
