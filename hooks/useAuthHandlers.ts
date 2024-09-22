import { useState } from "react";
import { Alert } from "react-native";
import { createUser, getCurrentUser, signIn } from "@/lib/appWrite";
import { router } from "expo-router";
import { useGlobalContext } from "@/context/useGlobalContext";

export function useSignInHandlers() {
  const { setUser, setIsLogin } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit() {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogin(true);
      Alert.alert("Success", "User signed in successfully");

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return { handleSubmit, form, setForm, isSubmitting };
}

export function useSignUpHandlers() {
  const { setUser, setIsLogin } = useGlobalContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit() {
    if (!form.email || !form.username || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    try {
      setIsSubmitting(true);
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogin(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return { form, handleSubmit, isSubmitting, setForm };
}
