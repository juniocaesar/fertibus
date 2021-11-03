import { Box, Flex, Heading, Input, Divider, Button } from "@chakra-ui/react";
import Link from 'next/link'

export default function login() {
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
        <Input placeholder="Masukkan username" type="text" mb={2} />
        <Input placeholder="Masukkan password" type="password" mb={4} />
        <Divider orientation="horizontal" colorScheme="blackAlpha.1000" />
        <Link href='/dashboard' passHref>
        <Button colorScheme="blue" size="md" width="100%">
          Log in
        </Button>
        </Link>
      </Box>
    </Flex>
  );
}
