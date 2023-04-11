import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg={"gray.800"}
        p={8}
        borderRadius={8}
        flexDirection={"column"}
      >
        <Stack spacing={4}>
          <Input label="E-mail" name="email" type="email" />
          <Input label="Senha" name="password" type="password" />
          <Button type="submit" colorScheme="pink">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
