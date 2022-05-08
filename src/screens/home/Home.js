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
const Home = () => {
  return (
    <HStack p="0.7rem 20%" spacing="1rem">
      <Box w="65%">
        <Box bg="red">Type Post</Box>
        <Box bg="blue">Posts</Box>
      </Box>
      <Box bg="yellow" w="35%">
        Box2
      </Box>
    </HStack>
  );
};

export { Home };
