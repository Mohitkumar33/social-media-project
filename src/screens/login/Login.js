import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";

const Login = () => {
  const outerBoxStyles = {
    w: "100vw",
    h: "89vh",
    pos: "relative",

    pt: "5rem",
    background:
      "url(https://res.cloudinary.com/dbfzfqfhl/image/upload/v1652066676/ecom%20item%20images/loginBg_cblnbg.jpg) center/cover no-repeat",
  };

  const innerBoxStyles = {
    display: "flex",
    flexDirection: "column",
    h: "18rem",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    w: "23rem",
    pos: "absolute",
    right: "1rem",
    mr: "2rem",
    p: "1rem",
    borderRadius: "5px",
  };
  return (
    <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="10%">
        <Text mb="1rem" fontSize="1.6rem" textAlign="center">
          Instagram
        </Text>
        <Input
          placeholder="username"
          type="text"
          mb="1rem"
          _placeholder={{ color: "white", opacity: 0.8 }}
        />
        <Input
          placeholder="Password"
          type="password"
          mb="1rem"
          _placeholder={{ color: "white", opacity: 0.8 }}
        />
        <Button w="100%" colorScheme="blue">
          Login
        </Button>
        <Flex
          fontSize="1rem"
          fontWeight="200"
          justify="space-between"
          mt="10px "
        >
          <Text>Forgot password?</Text>
          <Text>Create new account</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export { Login };
