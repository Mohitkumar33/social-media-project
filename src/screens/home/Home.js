import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  HStack,
  Button,
} from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

import { Tooltip } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FcBusinessman, FcManager } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
const Home = () => {
  return (
    <Flex p="0.7rem 20%">
      <Box w="65%" mr="1rem" mt="5rem">
        <HStack border="1px solid #CBD5E0" p="1rem">
          <Icon as={VscAccount} w="3rem" h="3rem" color="gray.600" />
          <Box
            border="1px solid #CBD5E0"
            w="100%"
            h="2.5rem"
            m="1rem"
            borderRadius="20px"
            _hover={{
              bg: "#CBD5E0",
            }}
          >
            <Text align="left" mt="5px" pl="1rem">
              Start a post
            </Text>
          </Box>
        </HStack>
        <Box border="1px solid #CBD5E0" mt="1.2rem" mb="1.2rem">
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
              <Text>@deepakgoyal</Text>
              <Text>2min</Text>
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
          <Flex m="0 1rem 1rem 1rem" align="center">
            <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              3
            </Text>
            <Icon as={VscComment} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              1
            </Text>
            <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
          </Flex>
          <Flex ml="1rem" align="center">
            <Text display="inline">username </Text>
            <Tooltip label="up vote" placement="auto-start" hasArrow>
              <ArrowUpIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                ml="5px"
                p="1px"
                bg="gray.400"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="5px" fontWeight={500}>
              1
            </Text>
            <Tooltip label="down vote" hasArrow>
              <ArrowDownIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                bg="gray.400"
                p="1px"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="10px" fontWeight={500}>
              1
            </Text>
            <Text display="inline">This is my commentThis is my comment</Text>
          </Flex>
          <Box ml="1rem">
            <Text display="inline">username </Text>
            <Text display="inline">
              This is my commentThis is my commentThis is my commentThis is my
              comment
            </Text>
          </Box>
        </Box>
        <Box border="1px solid #CBD5E0" mt="1.2rem" mb="1.2rem">
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
              <Text>@deepakgoyal</Text>
              <Text>2min</Text>
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
          <Flex m="0 1rem 1rem 1rem" align="center">
            <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              3
            </Text>
            <Icon as={VscComment} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              1
            </Text>
            <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
          </Flex>
          <Flex ml="1rem" align="center">
            <Text display="inline">username </Text>
            <Tooltip label="up vote" placement="auto-start" hasArrow>
              <ArrowUpIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                ml="5px"
                p="1px"
                bg="gray.400"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="5px" fontWeight={500}>
              1
            </Text>
            <Tooltip label="down vote" hasArrow>
              <ArrowDownIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                bg="gray.400"
                p="1px"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="10px" fontWeight={500}>
              1
            </Text>
            <Text display="inline">This is my commentThis is my comment</Text>
          </Flex>
          <Box ml="1rem">
            <Text display="inline">username </Text>
            <Text display="inline">
              This is my commentThis is my commentThis is my commentThis is my
              comment
            </Text>
          </Box>
        </Box>
        <Box border="1px solid #CBD5E0" mt="1.2rem" mb="1.2rem">
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
              <Text>@deepakgoyal</Text>
              <Text>2min</Text>
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
          <Flex m="0 1rem 1rem 1rem" align="center">
            <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              3
            </Text>
            <Icon as={VscComment} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              1
            </Text>
            <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
          </Flex>
          <Flex ml="1rem" align="center">
            <Text display="inline">username </Text>
            <Tooltip label="up vote" placement="auto-start" hasArrow>
              <ArrowUpIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                ml="5px"
                p="1px"
                bg="gray.400"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="5px" fontWeight={500}>
              1
            </Text>
            <Tooltip label="down vote" hasArrow>
              <ArrowDownIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                bg="gray.400"
                p="1px"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="10px" fontWeight={500}>
              1
            </Text>
            <Text display="inline">This is my commentThis is my comment</Text>
          </Flex>
          <Box ml="1rem">
            <Text display="inline">username </Text>
            <Text display="inline">
              This is my commentThis is my commentThis is my commentThis is my
              comment
            </Text>
          </Box>
        </Box>
        <Box border="1px solid #CBD5E0" mt="1.2rem" mb="1.2rem">
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
              <Text>@deepakgoyal</Text>
              <Text>2min</Text>
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
          <Flex m="0 1rem 1rem 1rem" align="center">
            <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              3
            </Text>
            <Icon as={VscComment} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              1
            </Text>
            <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
          </Flex>
          <Flex ml="1rem" align="center">
            <Text display="inline">username </Text>
            <Tooltip label="up vote" placement="auto-start" hasArrow>
              <ArrowUpIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                ml="5px"
                p="1px"
                bg="gray.400"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="5px" fontWeight={500}>
              1
            </Text>
            <Tooltip label="down vote" hasArrow>
              <ArrowDownIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                bg="gray.400"
                p="1px"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="10px" fontWeight={500}>
              1
            </Text>
            <Text display="inline">This is my commentThis is my comment</Text>
          </Flex>
          <Box ml="1rem">
            <Text display="inline">username </Text>
            <Text display="inline">
              This is my commentThis is my commentThis is my commentThis is my
              comment
            </Text>
          </Box>
        </Box>
        <Box border="1px solid #CBD5E0" mt="1.2rem" mb="1.2rem">
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
              <Text>@deepakgoyal</Text>
              <Text>2min</Text>
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
          <Flex m="0 1rem 1rem 1rem" align="center">
            <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              3
            </Text>
            <Icon as={VscComment} w="1.3rem" h="1.3rem" />
            <Text mr="10px" ml="5px" fontWeight={500}>
              1
            </Text>
            <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
          </Flex>
          <Flex ml="1rem" align="center">
            <Text display="inline">username </Text>
            <Tooltip label="up vote" placement="auto-start" hasArrow>
              <ArrowUpIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                ml="5px"
                p="1px"
                bg="gray.400"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="5px" fontWeight={500}>
              1
            </Text>
            <Tooltip label="down vote" hasArrow>
              <ArrowDownIcon
                w="1.2rem"
                h="1.2rem"
                color="white"
                bg="gray.400"
                p="1px"
                borderRadius="50%"
              />
            </Tooltip>
            <Text mr="10px" fontWeight={500}>
              1
            </Text>
            <Text display="inline">This is my commentThis is my comment</Text>
          </Flex>
          <Box ml="1rem">
            <Text display="inline">username </Text>
            <Text display="inline">
              This is my commentThis is my commentThis is my commentThis is my
              comment
            </Text>
          </Box>
        </Box>
      </Box>
      <Box w="35%">
        <Box pos="sticky" top="5rem">
          <Flex justify="space-between" m="2rem 0.3rem" align="center">
            <Flex align="center">
              <Icon as={FcManager} w="2.3rem" h="2.3rem" mr="7px" />
              <Text>UserName</Text>
            </Flex>
            <Text color="blue">Edit</Text>
          </Flex>

          <Text>Suggestions For you</Text>
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
        </Box>
      </Box>
    </Flex>
  );
};

export { Home };
