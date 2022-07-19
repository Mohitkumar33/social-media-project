import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/users/userSlice";

const Suggestions = () => {
  const { allUsers, usersStatus } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usersStatus === "idle") dispatch(getAllUsers());
  }, [dispatch, usersStatus]);
  return (
    <Box border="1px solid #CBD5E0" mt="1rem">
      {allUsers?.users?.map((item) => {
        return (
          <Flex
            justify="space-between"
            align="center"
            m="8px 8px"
            key={item._id}
          >
            <Flex align="center">
              <Icon
                as={MdOutlineAccountCircle}
                w="2.3rem"
                h="2.3rem"
                mr="7px"
                color="gray.500"
              />
              <Text>{item.username}</Text>
            </Flex>
            <Text color="blue">Follow</Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export { Suggestions };
