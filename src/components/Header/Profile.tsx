import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  console.log(showProfileData);
  return (
    <Flex alignContent={"center"}>
      {showProfileData && (
        <Box mr={"4"} textAlign={"right"}>
          <Text>Eduardo Paixão</Text>
          <Text color={"gray.300"} fontSize={"small"}>
            eduardo.mmpj@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={"md"}
        name="Eduardo Paixão"
        src="https://github.com/Eduardo-Paixao.png"
      />
    </Flex>
  );
}
