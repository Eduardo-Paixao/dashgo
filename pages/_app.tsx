import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa o CSS do Toastify
import "../src/styles/toastify-custom.css";
import { ToastContextProvider } from "@/src/contexts/ToastfyContext";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { SiderbarDrawerProvider } from "@/src/contexts/SiderbarDrawerContext";
import { CurrentPageProvider } from "@/src/contexts/CurrentPageContext";
import { theme } from "@/src/styles/theme";
import { queryClient } from "@/src/services/queryClient";
import { makeServer } from "@/src/services/mirage";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (!window.mirage) {
        window.mirage = true;
        makeServer();
      }
    }
  }, [pathname]);
  return (
    <ToastContextProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <SiderbarDrawerProvider>
              <CurrentPageProvider>
                <Component {...pageProps} />
                <ToastContainer theme="dark"/>
              </CurrentPageProvider>
            </SiderbarDrawerProvider>
          </ChakraProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AuthProvider>
    </ToastContextProvider>
  );
}
