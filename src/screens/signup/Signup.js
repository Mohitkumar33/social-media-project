import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { Footer } from "../../components/footer/Footer";

const Signup = () => {
  const outerBoxStyles = {
    w: "100vw",
    h: "89vh",
    pos: "relative",

    pt: "5rem",
    background:
      "url(https://res.cloudinary.com/dbfzfqfhl/image/upload/v1652156881/ecom%20item%20images/aaron-burden-AvqpdLRjABs-unsplash_1_gxyi3r.jpg) center/cover no-repeat",
  };

  const innerBoxStyles = {
    display: "flex",
    flexDirection: "column",
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
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="40%">
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
          placeholder="First Name"
          type="text"
          mb="1rem"
          _placeholder={{ color: "white", opacity: 0.8 }}
        />
        <Input
          placeholder="Last Name"
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
          Signup
        </Button>
        <Text textAlign="center" fontSize="1rem" fontWeight="200" mt="1rem">
          Alread have an account
        </Text>
      </Box>
    </Box>
  );
};

export { Signup };
