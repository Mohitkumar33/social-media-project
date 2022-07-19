import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "../../features/posts/postSlice";
import { PostCard } from "../../components/homePage/PostCard";
import { WritePost } from "../../components/homePage/writePost";
import { Suggestions } from "../../components/homePage/Suggestions";
import { UserProfile } from "../../components/homePage/UserProfile";
import { PostsSkeleton } from "../../components/PostsSkeleton";

const Home = () => {
  const { posts, postsStatus } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(loadPosts());
    }
  }, [dispatch, postsStatus]);
  return (
    <Flex p="0.7rem 20%">
      <Box w="65%" mr="1rem">
        <WritePost />
        {postsStatus === "loading" ? (
          <PostsSkeleton />
        ) : (
          posts.map((item) => {
            return <PostCard key={item._id} post={item} />;
          })
        )}
      </Box>
      <Box w="35%">
        <Box pos="sticky" top="7rem">
          <UserProfile />
          <Text>Suggestions For you</Text>
          <Suggestions />
        </Box>
      </Box>
    </Flex>
  );
};

export { Home };
