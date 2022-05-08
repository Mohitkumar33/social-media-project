import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import { BsBookmarks } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { FcManager } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <Flex
        justify="space-between"
        p="0.7rem 20%"
        borderTop="1px solid #CBD5E0"
        borderBottom="1px solid #CBD5E0"
        align="center"
      >
        <Text fontFamily="cursive" fontSize="1.4rem" fontWeight={540}>
          Instagram
        </Text>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search"
              w="13rem"
              variant="filled"
            />
          </InputGroup>
        </Box>
        <HStack spacing="1.8rem">
          <Icon as={GoHome} w="2rem" h="2rem" />
          <Icon as={BsPeople} w="2rem" h="2rem" />
          <Icon as={BsBookmarks} w="2rem" h="2rem" />
          <Icon as={FcManager} w="2rem" h="2rem" />
        </HStack>
      </Flex>
    </div>
  );
};

export { Navbar };
