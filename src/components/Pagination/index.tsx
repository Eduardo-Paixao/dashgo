import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";
import { useUsersList } from "@/src/services/hooks/useUsersList";
import { generatePagesArray } from "@/src/utils";
import { useCurrentPage } from "@/src/services/hooks/useCurrentPage";

export const Pagination = () => {
  const { currentPage = 1 } = useCurrentPage();
  const { data } = useUsersList(currentPage);
  const lastPage = data?.meta?.total_pages || 1;
  const siblingsCount = 1;
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

      return (
    <Stack
      direction={["column", "row"]}
      mt={"8"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={"6"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={"row"} spacing={"2"}>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color={"gray.300"} width={8} textAlign={"center"}>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem number={page} key={page} />
          ))}
        <PaginationItem number={currentPage} isCurrent={true} />

        {nextPages.length > 0 &&
          nextPages.map((page) => <PaginationItem number={page} key={page} />)}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color={"gray.300"} width={8} textAlign={"center"}>
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};
