import {
  Box,
  Flex,
  Text,
  Icon,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const NewPost = () => {
  return (
    <Flex
      bg="rgba(128, 128, 128, 0.669)"
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      pos="fixed"
      zIndex={1}
    >
      <Box
        h="19rem"
        w="24rem"
        border="1px solid #CBD5E0"
        p="1rem"
        bg="white"
        pos="relative"
        mt="-12rem"
      >
        <Text
          borderBottom="1px solid gray"
          fontSize="2xl"
          pb="0.5rem"
          mb="1rem"
        >
          Create a post
        </Text>
        <Flex align="center" gap="1rem" mb="1rem">
          <Icon
            as={FcBusinessman}
            w="2.2rem"
            h="2.2rem"
            borderRadius="50%"
            border="1px solid #CBD5E0"
          />
          <Text>UserName</Text>
        </Flex>
        <Textarea
          w="100%"
          h="6rem"
          placeholder="Type the post"
          mb="1rem"
        ></Textarea>
        <Flex justify="right">
          <Button _hover={{ bg: "gray", color: "white" }}>Post</Button>
        </Flex>
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
export { NewPost };
