import React from "react";
import { Box, Flex, Heading, Input, Divider, Button } from "@chakra-ui/react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        background="blackAlpha.900"
      >
        <Box boxShadow="md" p="6" rounded="md" bg="gray.200" m={5}>
          <Heading mb={7} textAlign="center">
            Log in
          </Heading>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              placeholder="Masukkan username"
              type="text"
              mb={2}
              onChange={this.handleChange}
              />
            <Input
              name="password"
              placeholder="Masukkan password"
              type="password"
              mb={4}
              onChange={this.handleChange}
            />
            <Divider orientation="horizontal" colorScheme="blackAlpha.1000" />
            <Button type="submit" colorScheme="blue" size="md" width="100%">
              Log in
            </Button>
          </form>
        </Box>
      </Flex>
    );
  }
}

export default LoginForm;
