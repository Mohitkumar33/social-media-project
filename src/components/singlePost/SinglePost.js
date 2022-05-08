import { Box, Flex, Text, Icon, HStack, Button } from "@chakra-ui/react";
import { FcBusinessman } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const SinglePost = () => {
  return (
    <Flex
      bg="rgba(128, 128, 128, 0.669)"
      h="100%"
      w="100%"
      align="center"
      justify="center"
      pos="absolute"
      zIndex={1}
    >
      <Box
        border="1px solid #CBD5E0"
        mb="1.2rem"
        bg="white"
        w="50%"
        pos="relative"
        mt="-12rem"
      >
        <Flex justify="space-between" p="1rem 1rem 0 1rem">
          <HStack>
            <Icon
              as={FcBusinessman}
              w="2rem"
              h="2rem"
              borderRadius="50%"
              border="1px solid #CBD5E0"
            />
            <Text>Username</Text>
          </HStack>
          <Button
            m="7px"
            h="1.8rem"
            w="5rem"
            mr="1rem"
            _hover={{ bg: "gray", color: "white" }}
          >
            Follow
          </Button>
        </Flex>
        <Text m="1rem">
          Hello world this is temp post please like share and subscribe this
          post. I am a great man I can achieve any thing Happy mothers day.
        </Text>
        <HStack spacing="1rem" m="0 1rem 1rem 1rem">
          <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
          <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
        </HStack>
        <Icon
          as={AiOutlineClose}
          w="1.3rem"
          h="1.3rem"
          color="gray.600"
          pos="absolute"
          top="0.7rem"
          right="0.7rem"
          borderRadius="50%"
          _hover={{ bg: "gray", color: "white" }}
        />
      </Box>
    </Flex>
  );
};

export { SinglePost };
