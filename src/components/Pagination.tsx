import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>1</strong> de <strong>5</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
