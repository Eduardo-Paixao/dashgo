import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex alignContent={"center"}>
      <Box mr={"4"} textAlign={"right"}>
        <Text>Eduardo Paixão</Text>
        <Text color={"gray.300"} fontSize={"small"}>
          eduardo.mmpj@gmail.com
        </Text>
      </Box>
      <Avatar
        size={"md"}
        name="Eduardo Paixão"
        src="https://github.com/Eduardo-Paixao.png"
      />
    </Flex>
  );
}
