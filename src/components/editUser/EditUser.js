import { Box, Flex, Input, Icon, Text, Button } from "@chakra-ui/react";
import { FcManager } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const EditUser = () => {
  return (
    <Flex
      bg="rgba(128, 128, 128, 0.669)"
      h="100vh"
      w="100%"
      justify="center"
      pos="fixed"
      zIndex={1}
    >
      <Box
        w="24rem"
        h="17rem"
        border="1px solid #CBD5E0"
        p="1rem"
        bg="white"
        pos="relative"
        pt="2.4rem"
        mt="5rem"
      >
        <Flex align="center" justify="space-between" mb="1rem">
          <Icon as={FcManager} w="3rem" h="3rem" color="gray.600" />
          <Input borderRadius="0px" h="2.2rem" w="15rem" />
        </Flex>
        <Flex align="center" justify="space-between" mb="1rem">
          <Text>First Name</Text>
          <Input borderRadius="0px" h="2.2rem" w="15rem" />
        </Flex>
        <Flex align="center" justify="space-between" mb="1rem">
          <Text>Last Name</Text>
          <Input borderRadius="0px" h="2.2rem" w="15rem" />
        </Flex>
        <Flex justify="center">
          <Button _hover={{ bg: "gray", color: "white" }}>Save</Button>
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

export { EditUser };
