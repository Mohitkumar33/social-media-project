import { Flex, Text, Icon } from "@chakra-ui/react";
import { FcManager } from "react-icons/fc";

const UserProfile = () => {
  return (
    <Flex justify="space-between" m="2rem 0.3rem" align="center">
      <Flex align="center">
        <Icon as={FcManager} w="2.3rem" h="2.3rem" mr="7px" />
        <Text>UserName</Text>
      </Flex>
      <Text color="blue">Edit</Text>
    </Flex>
  );
};
export { UserProfile };
