import { Box, Text, Icon, HStack } from "@chakra-ui/react";

import { VscAccount } from "react-icons/vsc";

const WritePost = () => {
  return (
    <HStack border="1px solid #CBD5E0" p="1rem">
      <Icon as={VscAccount} w="3rem" h="3rem" color="gray.600" />
      <Box
        border="1px solid #CBD5E0"
        w="100%"
        h="2.5rem"
        m="1rem"
        borderRadius="20px"
        _hover={{
          bg: "#CBD5E0",
        }}
      >
        <Text align="left" mt="5px" pl="1rem">
          Start a post
        </Text>
      </Box>
    </HStack>
  );
};

export { WritePost };
