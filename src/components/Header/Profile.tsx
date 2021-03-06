import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Bignotto</Text>
          <Text color="gray.300" fontSize="small">
            bignotto@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Thiago Bignotto"
        src="https://github.com/Bignotto.png"
      />
    </Flex>
  );
}
