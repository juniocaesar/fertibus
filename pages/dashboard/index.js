import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Spacer,
  Text,
  Square,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
export default function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const initialFocusRef = React.useRef();

  return (
    <div>
      <Box h="100vh" maxW="100vw" bg="gray.50" p={0} centerContent>
        <Box h="70px" maxW="100vw" bg="teal" p={0} boxShadow="md" centerContent>
          <Flex>
            {/* Hamburger Button */}
            <Button
              mr={5}
              ml={3}
              mt={3}
              variant="ghost"
              textColor="white"
              fontSize="xx-large"
              ref={btnRef}
              onClick={onOpen}
            >
              <HamburgerIcon />
            </Button>
            {/* End Hamburger Button */}

            {/* Drawer  */}
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader> Menu </DrawerHeader>

                <DrawerBody>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Umum
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar Persetujuan
                          </Text>
                        </Button>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar Jenis Pembayaran
                          </Text>
                        </Button>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Maintenance
                          </Text>
                        </Button>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Logout
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Produk
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Pembelian
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Penjualan
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Akuntansi
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Jendela
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Bantuan
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={1}>
                        <Button variant="ghost" w="100%">
                          <Text textAlign="left" w="100%" fontWeight="normal">
                            Daftar User
                          </Text>
                        </Button>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
            {/* End Drawer */}

            <Spacer />

            {/* Logo Text */}
            <Square mt={3}>
              <Text fontSize="2xl" p={0} textColor="white">
                Maju<b>Jaya</b>
              </Text>
            </Square>
            {/* End Logo Text */}

            <Spacer />

            {/* Empty Space */}
            <Box mr={20} ml={3} mt={3}></Box>
            {/* End Empty Space */}
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
