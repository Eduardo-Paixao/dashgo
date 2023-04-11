import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";
import React from "react";

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
      <Text
        fontSize={"3xl"}
        fontWeight={"bold"}
        letterSpacing={"tight"}
        w={"64"}
      >
        Dashgo
        <Text as={"span"} ml={"1"} color={"pink.500"}>
          .
        </Text>
      </Text>
      <Flex
        as={"label"}
        flex={"1"}
        py={"4"}
        px={"8"}
        ml={"6"}
        maxWidth={400}
        alignSelf={"center"}
        color={"gray.200"}
        position={"relative"}
        bg={"gray.800"}
        borderRadius={"full"}
      >
        <Input
          color={"gray.50"}
          variant={"unstyled"}
          px={"4"}
          mx={"4"}
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize={"20"} />
      </Flex>
      <Flex alignContent={"center"} ml={"auto"}>
        <HStack
          spacing={"8"}
          mx={"8"}
          pr={"8"}
          py={"1"}
          color={"gray.300"}
          borderRightWidth={1}
          borderColor={"gray.700"}
        >
          <Icon as={RiNotificationLine} fontSize={"20"} />
          <Icon as={RiUserAddLine} fontSize={"20"} />
        </HStack>
        <Flex alignContent={"center"}>
          <Box mr={"4"} textAlign={"right"}>
            <Text>Eduardo Paixão</Text>
            <Text color={"gray.300"} fontSize={"small"}>
              eduardo.mmpj@gmail.com
            </Text>
          </Box>
          <Avatar size={'md'} name="Eduardo Paixão" src="https://github.com/Eduardo-Paixao.png"/>
        </Flex>
      </Flex>
    </Flex>
  );
};
