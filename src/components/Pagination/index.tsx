import { Box, Stack, Text } from "@chakra-ui/react";
import { last } from "lodash.mergewith/node_modules/@types/lodash";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCount: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblings = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCount,
  currentPage = 1,
  onPageChange,
  registersPerPage = 10,
}: PaginationProps) {
  const lasPage = Math.floor(totalCount / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - siblings - 1, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lasPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblings, lasPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{registersPerPage}</strong> de <strong>{totalCount}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblings && (
          <PaginationItem onPageChange={onPageChange} number={1} />
        )}

        {currentPage > 2 + siblings && (
          <Text color="gray.300" w="8" textAlign="center">
            ...
          </Text>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                number={page}
                key={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                number={page}
                key={page}
              />
            );
          })}

        {currentPage + 1 + siblings < lasPage && (
          <Text color="gray.300" w="8" textAlign="center">
            ...
          </Text>
        )}

        {currentPage + siblings < lasPage && (
          <PaginationItem onPageChange={onPageChange} number={lasPage} />
        )}
      </Stack>
    </Stack>
  );
}
