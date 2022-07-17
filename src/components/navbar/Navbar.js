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
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Box pos="sticky" top={0} zIndex={1}>
      <Flex
        justify="space-between"
        p="0.7rem 20%"
        borderTop="1px solid #CBD5E0"
        borderBottom="1px solid #CBD5E0"
        align="center"
        bg="white"
        width="100%"
      >
        <Link to="/">
          <Text fontFamily="cursive" fontSize="1.4rem" fontWeight={540}>
            Instagrem
          </Text>
        </Link>
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
        <HStack spacing="1.3rem">
          <Link to="/">
            <Icon as={GoHome} w="2rem" h="2rem" />
          </Link>
          <Icon as={BsPeople} w="2rem" h="2rem" />
          <Icon as={BsBookmarks} w="2rem" h="2rem" />
          <Link to="/accountHolderProfile">
            <Icon as={FcManager} w="2rem" h="2rem" />
          </Link>
          <Icon
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(logout());
              localStorage.removeItem("accessToken");
              localStorage.removeItem("profileUser");
            }}
            as={FiLogOut}
            w="2rem"
            h="2rem"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export { Navbar };
