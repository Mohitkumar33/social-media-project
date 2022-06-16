import { Box, Flex, Text, Icon, Button } from "@chakra-ui/react";
const FollowingFollowers = () => {
  return (
    <Box p="0.7rem 20%">
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
      <Flex gap="1rem" justify="center" align="center" direction="column">
        <Box w="100%" border="1px solid gray">
          <Text p="10px" overflow="hidden">
            Hello world this is temp post please like share and subscribe this
            post. I am a great man I can achieve any thing Happy mothers day.
          </Text>
        </Box>
        <Box h="13rem" w="13rem" border="1px solid gray"></Box>
      </Flex>
    </Box>
  );
};

export { FollowingFollowers };
