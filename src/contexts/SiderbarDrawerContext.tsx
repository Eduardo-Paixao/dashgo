import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useContext, useEffect } from "react";

interface SiderbarDrawerProviderProps {
  children: ReactNode;
}

// type SiderbarDrawerContextData = UseDisclosureReturn;

const SiderbarDrawerContext = createContext({} as UseDisclosureReturn);

export const SiderbarDrawerProvider = ({
  children,
}: SiderbarDrawerProviderProps) => {
  const disclusure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclusure.onClose;
  }, [router.asPath]);
  return (
    <SiderbarDrawerContext.Provider value={disclusure}>
      {children}
    </SiderbarDrawerContext.Provider>
  );
};

export const useSiderbarDrawer = () => useContext(SiderbarDrawerContext);
