import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "../../features/posts/postSlice";
import { PostCard } from "../../components/homePage/PostCard";
import { WritePost } from "../../components/homePage/writePost";
import { Suggestions } from "../../components/homePage/Suggestions";
import { UserProfile } from "../../components/homePage/UserProfile";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { posts, status } = useSelector((store) => store.posts);
  const { token } = useSelector((store)=>store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts());
    }
  }, [dispatch, status]);

  if(!token) navigate("/login")
  
  return (
    <Flex p="0.7rem 20%">
      <Box w="65%" mr="1rem">
        <WritePost />
        {posts.map((item) => {
          return <PostCard post={item} />;
        })}
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
