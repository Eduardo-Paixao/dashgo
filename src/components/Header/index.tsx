import { Flex } from "@chakra-ui/react";
import React from "react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export const Header = () => {
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
      <Logo />
      <SearchBox />
      <Flex alignContent={"center"} ml={"auto"}>
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};
