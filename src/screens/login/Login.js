import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const outerBoxStyles = {
    w: "100vw",
    h: "100vh",
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = { username: "", password: "" };
  const { token } = useSelector((store) => store.auth);
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = async (username, password) => {
    console.log("login called", username, password)
    const response = await dispatch(loginUser({ username, password }));
    console.log(`this is response --> ${response}`)
    if (response?.payload.encodedToken) {
      navigate("/");
    }
  };

  useEffect(()=>{
    if(token) navigate("/")
  },[])
  

  return (
    <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="10%">
        <Text mb="1rem" fontSize="1.6rem" textAlign="center">
          Instagrem
        </Text>
        <Input
          placeholder="Username"
          name="username"
          type="text"
          mb="1rem"
          value={formValues.username}
          onChange={handleChange}
          _placeholder={{ color: "white", opacity: 0.8 }}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={formValues.password}
          mb="1rem"
          onChange={handleChange}
          _placeholder={{ color: "white", opacity: 0.8 }}
        />
        <Button
          w="100%"
          colorScheme="blue"
          mb="5px"
          variant="outline"
          backgroundColor={"rgba(181, 181, 181, 0.8)"}
          onClick={() => loginHandler("mohitkumar", "mohitkumar123")}
        >
          Test Login
        </Button>
        <Button
          w="100%"
          colorScheme="blue"
          onClick={() => loginHandler(formValues.username, formValues.password)}
        >
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
