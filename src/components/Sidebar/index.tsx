import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { SiderbarNav } from "./SiderBarNav";
import { useSiderbarDrawer } from "@/src/contexts/SiderbarDrawerContext";

export const Sidebar = () => {
  const isDrawerSiderbar = useBreakpointValue({
    lg: false, // se lg for true retorna a base false
    base: true,
  });

  const { isOpen, onClose } = useSiderbarDrawer();

  if (isDrawerSiderbar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"gray.800"} p={"4"}>
            <DrawerCloseButton
              mt={"6"}
              bg={"pink.500"}
              _hover={{ bg: "pink.600" }}
            />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SiderbarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w={"64"} mr={"8"}>
      <SiderbarNav />
    </Box>
  );
};
