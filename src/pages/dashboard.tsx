import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {};

const series = [{ name: "series1", data: [578, 678, 631, 598, 650] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        {/* here goes the side bar and the dashboard */}
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Taxa de Abertura</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
