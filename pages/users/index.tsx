import { Header } from "@/src/components/Header";
import { Pagination } from "@/src/components/Pagination";
import { Sidebar } from "@/src/components/Sidebar";
import { api } from "@/src/services/api";
import { getUsersList } from "@/src/services/fetchers/getUsersList";
import { useCurrentPage } from "@/src/services/hooks/useCurrentPage";
import { useUsersList } from "@/src/services/hooks/useUsersList";
import { makeServer } from "@/src/services/mirage";
import { queryClient } from "@/src/services/queryClient";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
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
import { RiAddLine, RiPencilLine, RiRefreshLine } from "react-icons/ri";

export default function UserList() {
  const { currentPage } = useCurrentPage();
  const { data, error, isLoading, isFetching, refetch } =
    useUsersList(currentPage);

  const isWideVersion = useBreakpointValue({
    lg: true,
    base: false,
  });
  const router = useRouter();
  const usersList = data?.users || [];

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const { data } = await api.get(`users/${userId}`);
        return data;
      },
      {
        staleTime: 1000 * 60 * 10,
      }
    );
  }

  return (
    <Box>
      <Header />
      <Flex w={"100%"} my={"6"} maxWidth={"1480"} mx={"auto"} px={"6"}>
        <Sidebar />
        <Box flex={"1"} borderRadius={8} bg={"gray.800"} p={"8"}>
          <Flex mb={"8"} justifyContent={"space-between"} alignItems={"center"}>
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuários{" "}
              {!isLoading && isFetching && (
                <Spinner size={"sm"} color="gray.500" ml={4} />
              )}
            </Heading>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Icon
                as={RiRefreshLine}
                fontSize={"16"}
                onClick={() => refetch()}
              />
              <Button
                as={"a"}
                size={"sm"}
                fontSize={"sm"}
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={"20"} />}
                onClick={() => router.push("users/create")}
              >
                Criar novo usuário
              </Button>
            </Flex>
          </Flex>
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex>
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color={"gray.300"} width={"8"} />
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width={"8"} />
                  </Tr>
                </Thead>
                <Tbody>
                  {usersList?.map((user: any) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => {
                              handlePrefetchUser(user.id);
                            }}
                          >
                            <Text fontWeight={"bold"}>{user.name}</Text>
                          </Link>
                          <Text fontSize={"sm"} color={"gray.300"}>
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        {isWideVersion ? (
                          <Button
                            as={"a"}
                            size={"sm"}
                            fontSize={"sm"}
                            colorScheme="purple"
                            leftIcon={
                              <Icon as={RiPencilLine} fontSize={"16"} />
                            }
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
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
