import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Suggestions = () => {
  return (
    <Box border="1px solid #CBD5E0" mt="1rem">
      <Flex justify="space-between" align="center" m="8px 8px">
        <Flex align="center">
          <Icon
            as={MdOutlineAccountCircle}
            w="2.3rem"
            h="2.3rem"
            mr="7px"
            color="gray.500"
          />
          <Text>UserName</Text>
        </Flex>
        <Text color="blue">Follow</Text>
      </Flex>
      <Flex justify="space-between" align="center" m="8px 8px">
        <Flex align="center">
          <Icon
            as={MdOutlineAccountCircle}
            w="2.3rem"
            h="2.3rem"
            mr="7px"
            color="gray.500"
          />
          <Text>UserName</Text>
        </Flex>
        <Text color="blue">Follow</Text>
      </Flex>
    </Box>
  );
};

export { Suggestions };
