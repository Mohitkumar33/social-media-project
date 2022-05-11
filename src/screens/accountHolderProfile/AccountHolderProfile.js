import { Box, Flex, Text, Icon, Button } from "@chakra-ui/react";
import { FcManager } from "react-icons/fc";
const AccountHolderProfile = () => {
  return (
    <Box p="0.7rem 20%">
      <Flex
        align="center"
        gap="3rem"
        borderBottom="1px solid #CBD5E0"
        p="1rem 0"
      >
        <Icon as={FcManager} w="6rem" h="6rem" />
        <Box>
          <Text mb="10px">userName</Text>
          <Text mb="10px">29 posts 192followers</Text>
          <Text>First name</Text>
        </Box>
        <Button
          _hover={{ bg: "gray", color: "white" }}
          h="2rem"
          w="auto"
          fontWeight={400}
        >
          Edit Profile
        </Button>
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
        <Text>Bookmarks</Text>
      </Flex>
      <Flex wrap="wrap" gap="1rem" justify="center">
        <Box h="13rem" w="13rem" border="1px solid gray">
          <Text p="10px" overflow="hidden">
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

export { AccountHolderProfile };
