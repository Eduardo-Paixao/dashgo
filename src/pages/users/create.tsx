import { Input } from "@/src/components/Form/Input";
import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FieldError,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function CreateUser() {
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "No minimo 8 caracteres"),
      passwordConfirmation: yup
      .string()
      .oneOf([undefined, yup.ref("password")], "As senhas precisam ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  console.log(errors);

  return (
    <Box>
      <Header />
      <Flex w={"100%"} my={"6"} maxWidth={1480} mx={"auto"} px={"6"}>
        <Sidebar />
        <Box
          as="form"
          flex={"1"}
          borderRadius={8}
          bg={"gray.800"}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar Usuário
          </Heading>
          <Divider my={"6"} borderColor={"gray.700"} />
          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
              <Input
                error={errors.name as FieldError}
                {...register("name")}
                name="name"
                label="Nome completo"
                type="text"
              />
              <Input
                error={errors.email as FieldError}
                {...register("email")}
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
              <Input
                error={errors.password as FieldError}
                {...register("password")}
                name="password"
                label="Senha"
                type="password"
              />
              <Input
                error={errors.passwordConfirmation as FieldError}
                {...register("passwordConfirmation")}
                name="passwordConfirmation"
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={"8"} justifyContent={"flex-end"}>
            <HStack spacing={"4"}>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
