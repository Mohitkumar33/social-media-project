import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FcBusinessman } from "react-icons/fc";
const PersonProfile = () => {
  return (
    <Box p="0.7rem 20%">
      <Flex
        align="center"
        gap="3rem"
        borderBottom="1px solid #CBD5E0"
        p="1rem 0"
      >
        <Icon as={FcBusinessman} w="6rem" h="6rem" />
        <Box>
          <Text mb="10px">userName</Text>
          <Text mb="10px">29 posts</Text>
          <Text>First name</Text>
        </Box>
      </Flex>
      <Flex
        justify="center"
        gap="2rem"
        m="1rem 0"
        fontSize="1.2rem"
        color="gray"
        mb="2rem"
      >
        <Text>Posts</Text>
      </Flex>
      <Flex wrap="wrap" gap="1rem" justify="center">
        <Box h="13rem" w="13rem" border="1px solid gray" overflow="hidden">
          <Text p="10px">
            Hello world this is temp post please like share and subscribe this
            post. I am a great man I can achieve any thing Happy mothers day.
            Hello world this is temp post please like share and subscribe this
            post. I am a great man I can achieve any thing Happy mothers day.
            Hello world this is temp post please like share and subscribe this
            post. I am a great man I can achieve any thing Happy mothers day.
            Hello world this is temp post please like share and subscribe this
            post. I am a great man I can achieve any thing Happy mothers day.
          </Text>
        </Box>
        <Box h="13rem" w="13rem" border="1px solid gray"></Box>
        <Box h="13rem" w="13rem" border="1px solid gray"></Box>
        <Box h="13rem" w="13rem" border="1px solid gray"></Box>
        <Box h="13rem" w="13rem" border="1px solid gray"></Box>
        <Box h="13rem" w="13rem" border="1px solid gray"></Box>
      </Flex>
    </Box>
  );
};

export { PersonProfile };
