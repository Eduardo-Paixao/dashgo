import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useSiderbarDrawer } from "@/src/contexts/SiderbarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {
  const { onOpen } = useSiderbarDrawer();
  const isWideVersion = useBreakpointValue({
    lg: true, //se for true retorna true na base
    base: false,
  }) as boolean;
  return (
    <Flex
      as={"header"}
      w={"100%"}
      maxWidth={1480}
      h={"20"}
      mx={"auto"}
      mt={"4"}
      px={"6"}
      align={"center"}
      // justifyContent={"center"}
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize={"24"}
          variant={"unstyled"}
          onClick={onOpen}
          mr={"2"}
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex alignContent={"center"} ml={"auto"}>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
