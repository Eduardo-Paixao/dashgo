import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../src/components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../src/services/hooks/useAuth";
import { SignInCredentials } from "../src/types/AuthTypes";

export default function SignIn() {
  const { signIn } = useAuth();

  const signInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInCredentials> = async (values) => {
    await signIn(values);
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
          <Input
            label="E-mail"
            type="email"
            {...register("email")}
            error={errors.email as FieldError}
          />
          <Input
            label="Senha"
            type="password"
            {...register("password")}
            error={errors.password as FieldError}
          />
          <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
