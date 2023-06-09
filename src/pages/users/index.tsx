import { Header } from "@/src/components/Header";
import { Pagination } from "@/src/components/Pagination";
import { Sidebar } from "@/src/components/Sidebar";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    lg: true,
    base: false,
  });
  const router = useRouter();
  return (
    <Box>
      <Header />
      <Flex w={"100%"} my={"6"} maxWidth={"1480"} mx={"auto"} px={"6"}>
        <Sidebar />
        <Box flex={"1"} borderRadius={8} bg={"gray.800"} p={"8"}>
          <Flex mb={"8"} justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuários
            </Heading>
            <Button
              as={"a"}
              size={"sm"}
              fontSize={"sm"}
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize={"20"} />}
              onClick={()=>router.push('users/create')}
            >
              Criar novo usuário
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color={"gray.300"} width={"8"}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width={"8"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={"bold"}>Eduardo Paixão</Text>
                    <Text fontSize={"sm"} color={"gray.300"}>
                      eduardo.mmpj@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Abril, 2023 </Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as={"a"}
                      size={"sm"}
                      fontSize={"sm"}
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize={"16"} />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <Button
                      as={"a"}
                      size={"sm"}
                      fontSize={"sm"}
                      colorScheme="purple"
                    >
                      <Icon as={RiPencilLine} fontSize={"16"} />
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
