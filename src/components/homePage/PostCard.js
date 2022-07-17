import { Box, Flex, Text, Icon, HStack, Button } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { FcBusinessman, FcManager } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";

const PostCard = ({ post }) => {
  return (
    <Box border="1px solid #CBD5E0" mt="1.2rem" mb="1.2rem" key={post._id}>
      <Flex justify="space-between" p="1rem 1rem 0 1rem">
        <HStack>
          <Icon
            as={FcBusinessman}
            w="2rem"
            h="2rem"
            borderRadius="50%"
            border="1px solid #CBD5E0"
          />
          <Text fontSize="1rem" fontWeight="500">
            {post.firstName + " " + post.lastName}
          </Text>
          <Text>@{post.username}</Text>
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
      <Text m="1rem">{post.content}</Text>
      <Flex m="0 1rem 1rem 1rem" align="center">
        <Icon as={BsHeart} w="1.3rem" h="1.3rem" />
        <Text mr="10px" ml="5px" fontWeight={500}>
          {post.likes.likeCount}
        </Text>
        <Icon as={VscComment} w="1.3rem" h="1.3rem" />
        <Text mr="10px" ml="5px" fontWeight={500}>
          {post.comments.length}
        </Text>
        <Icon as={BsBookmark} w="1.3rem" h="1.3rem" />
      </Flex>
      {post.comments.map((comment) => {
        return (
          <Flex ml="1rem" align="center" key={comment._id}>
            <Text display="inline">@{comment.username} </Text>
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
              {comment.votes.upvotedBy.length}
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
              {comment.votes.downvotedBy.length}
            </Text>
            <Text display="inline">{comment.text}</Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export { PostCard };
