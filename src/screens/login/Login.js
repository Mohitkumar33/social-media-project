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
  Image,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      bgImage="https://res.cloudinary.com/dbfzfqfhl/image/upload/v1652066676/ecom%20item%20images/loginBg_cblnbg.jpg"
      bgPosition="center"
      h="90vh"
      objectFit="cover"
      backgroundRepeat="no-repeat"
      w="100vw"
    >
      <Box w="23rem" h="17rem">
        <Text>Instagram</Text>
        <Input placeholder="username" type="text" />
        <Input placeholder="Password" type="password" />
        <Button w="100%">Login</Button>
      </Box>
    </Box>
  );
};

export { Login };
