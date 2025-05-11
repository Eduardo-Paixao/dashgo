import React from "react";
import { Header } from "../src/components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: { enabled: false },
  },
  colors: [theme.colors.gray[600]],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2023-03-18T00:00:00.000z",
      "2023-03-19T00:00:00.000z",
      "2023-03-20T00:00:00.000z",
      "2023-03-21T00:00:00.000z",
      "2023-03-22T00:00:00.000z",
      "2023-03-23T00:00:00.000z",
      "2023-03-24T00:00:00.000z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "serei1",
    data: [31, 88, 34, 124, 34, 54, 110],
  },
];

export default function Dashboard() {
  return (
    <Flex flexDirection={"column"} h={"100vh"}>
      <Header />
      <Flex w={"100%"} my={"6"} maxWidth={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <SimpleGrid
          flex={"1"}
          gap={"4"}
          minChildWidth={"320px"}
          alignItems={"flex-start"}
        >
          <Box p={["6", "8"]} bg={"gray.800"} borderRadius={8}>
            <Text fontSize={"lg"} mb={"4"}>
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["6", "8"]} bg={"gray.800"} borderRadius={8}>
            <Text fontSize={"lg"} mb={"4"}>
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
