import {
  Box,
  Flex,
  Text,
  Icon,
  HStack,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FcBusinessman } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const SinglePost = () => {
  return (
    <Flex
      bg="rgba(128, 128, 128, 0.669)"
      h="100%"
      w="100%"
      justify="center"
      pos="absolute"
      zIndex={2}
      pt="2rem"
    >
      <Box
        border="1px solid #CBD5E0"
        mb="1.2rem"
        mt="1rem"
        bg="white"
        w="50%"
        pos="fixed"
        maxH="80%"
        overflowY="scroll"
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
            <Text fontWeight={500}>Username</Text>
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
        <Text m="1rem">13 May 2022</Text>
        <Flex m="0 1rem 1rem 1rem" align="center">
          <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
          <Text mr="10px" ml="5px">
            3
          </Text>
          <Icon as={VscComment} w="1.3rem" h="1.3rem" />
          <Text mr="10px" ml="5px">
            1
          </Text>
          <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
        </Flex>
        <Flex ml="1rem" align="center">
          <Text display="inline" fontWeight={500}>
            username{" "}
          </Text>
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
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">This is my commentThis is my comment</Text>
        </Box>
        <Box ml="1rem">
          <Text display="inline">username </Text>
          <Text display="inline">
            This is my commentThis is my commentThis is my commentThis is my
            comment
          </Text>
        </Box>
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
