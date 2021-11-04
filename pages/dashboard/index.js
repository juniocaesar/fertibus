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
import Link from 'next/link';

function DashboardDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
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
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Pemakaian Barang
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Penyesuaian Persediaan
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Daftar Produk
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Daftar Satuan
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Input Saldo Awal
                    </Text>
                  </Button>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Laporan-Laporan
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Persediaan Produk</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Arus Masuk Keluar Produk</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Riwayat Produk</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Pemakaian Barang</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Penyesuaian Persediaan</Text></Button>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

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
                      Pembelian
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Retur Pembelian
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Pembayaran Hutang
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Penyesuaian Hutang
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Daftar Pemasok
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Input Saldo Hutang
                    </Text>
                  </Button>
                  
                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Laporan-Laporan
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Rangkuman Pembelian</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Rangkuman Retur Pembelian</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Rangkuman Hutang Dagang</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Riwayat Pemasok</Text></Button>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

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
                      Penjualan
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Point of Sales (POS)
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Retur Penjualan
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Penerimaan Piutang
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Penyesuaian Piutang
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Penyesuaian Piutang
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Daftar Pelanggan
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Input Saldo Piutang
                    </Text>
                  </Button>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Laporan-Laporan
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Rangkuman Penjualan</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Rangkuman Retur Penjualan</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Pembayaran Pelanggan</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Piutang Dagang</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Riwayat Pelanggan</Text></Button>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

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
                      Input Jurnal
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Persetujuan Input Jurnal
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Laporan Jurnal Umum
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Buku Besar
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Neraca
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Laporan Laba/Rugi
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Arus Kas
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Laporan Perubahan Ekuitas
                    </Text>
                  </Button>

                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Aset Tetap
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Manajemen Aset Tetap</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Penyusutan Aset Tetap</Text></Button>
                        <Button variant="ghost" w="100%"><Text textAlign="left" w="100%" fontWeight="normal">Laporan Aset Tetap</Text></Button>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Daftar Akun
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Tutup Buku Akhir Tahun
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
                      Tutup
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Tutup Semua
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
                      Tutorial
                    </Text>
                  </Button>
                  <Button variant="ghost" w="100%">
                    <Text textAlign="left" w="100%" fontWeight="normal">
                      Tentang
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
    </>
  );
}

export default function index() {
  return (
    <div>
      <Box h="100vh" maxW="100vw" bg="gray.50" p={0} centerContent>
        <Box h="70px" maxW="100vw" bg="teal" p={0} boxShadow="md" centerContent>
          <Flex>
            <DashboardDrawer />
            <Spacer />
            <Square mt={3}>
              <Text fontSize="2xl" p={0} textColor="white">
                <Link href="" passHref><a><b>MJ</b><small>Accounting</small></a></Link>
              </Text>
            </Square>
            <Spacer />
            <Box mr={20} ml={3} mt={3}></Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
