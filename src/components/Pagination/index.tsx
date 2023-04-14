import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

export const Pagination = () => {
  return (
    <Stack
      direction={"row"}
      mt={"8"}
      justifyContent={"space-between"}
      alignContent={"center"}
      spacing={"6"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={"row"} spacing={"2"}>
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
};
