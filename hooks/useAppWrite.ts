import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function useAppWrite<T>(cb: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await cb();
      setData(res);
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => fetchData();

  return { isLoading, data, reFetch };
}
