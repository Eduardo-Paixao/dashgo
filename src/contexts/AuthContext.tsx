import { createContext } from "react";
import {
  AuthContextData,
  AxiosErrorWithResponse,
  ProviderProps,
  SignInCredentials,
} from "../types/AuthTypes";
import { AuthApi, api } from "../services/api";
import { useToastfy } from "../services/hooks/useToastfy";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: ProviderProps) {
  const { push } = useRouter();
  const { showError, showSuccess } = useToastfy();

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { data } = await api.post("sessions", {
        email,
        password,
      });
      console.log(data);
      setCookie("dashgoToken", data);
      showSuccess("Usuario autenticado com sucesso");
      push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        const { response } = error as AxiosErrorWithResponse;
        console.log({ ...response?.data, isAuthenticated: false });
        showError('Credenciais inválidas');
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
