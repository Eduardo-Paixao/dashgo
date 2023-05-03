import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useRouter } from "next/router";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { resolve } from "path";

export default function SignIn() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((resolve) => setTimeout(() => {}, 2000));
    console.log(values, "aqui");
    // router.push("/dashboard")
  };
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input label="E-mail" type="email" {...register("email")} />
          <Input label="Senha" type="password" {...register("password")} />
          <Button
            type="submit"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
