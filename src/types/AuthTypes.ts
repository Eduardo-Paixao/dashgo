import { ReactNode } from "react";

export type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
};

export type ProviderProps = {
  children: ReactNode;
};

export interface AxiosErrorWithResponse extends Error {
  response: {
    data: {
      error: boolean;
      message: string;
    };
    status: number;
    statusText: string;
  };
}