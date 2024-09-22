import React from "react";

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export interface TGlobalContext {
  isLoading: boolean;
  setIsLoading: StateSetter<boolean>;
  isLogin: boolean;
  setIsLogin: StateSetter<boolean>;
  user: any;
  setUser: StateSetter<any>;
}
