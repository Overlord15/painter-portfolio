import {
  Box,
  Flex,
  Link,
  Spacer,
  useMediaQuery,
  Container,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaintRoller } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import ThemeToggleButton from "./Theme-toggler-button";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import More from "@/pages/More";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
  // const [isLargerThan6502] = useMediaQuery('(max-width: 650px)');
  return (
    <>
      <Box
        as="nav"
        position="fixed"
        zIndex={1}
        backdropFilter="auto"
        backdropBlur="8px"
        w="100%"
        pt="2"
        pb="2"
      >
        <Container
          maxW="container.md"
          display="flex"
          alignItems="center"
          w="100%"
        >
          <Link
            href="/"
            passHref
            scroll={false}
            _hover={{ textDecoration: "none" }}
          >
            <Link
              alignItems="center"
              fontFamily="'M PLUS Rounded 1c', sans-serif;"
              display="flex"
              as="button"
              cursor="pointer"
              fontSize="18.5"
              p="5px"
              textDecoration="none"
              href="/"
              _hover={{ textDecoration: "none" }}
            >
              <Flex alignItems="center">
                <FaPaintRoller color="#00FFFF" />
                &nbsp;&nbsp;&nbsp;&nbsp;Rohit Painter
              </Flex>
            </Link>
          </Link>
          <Flex alignItems="center">
            <Box ml="5" mr="">
              <MdWork color="#E73673" fontSize="18.5px" />
            </Box>
            <Link
              mr="6px"
              ml="6px"
              href="/More"
              size="sm"
              _hover={{ color: "pink.500", textDecoration: "underline" }}
              fontWeight="400"
              fontSize="18.5px"
            >
              Works
            </Link>
            <ExternalLinkIcon fontSize="18.5px" />
          </Flex>
          <Spacer></Spacer>
          <ThemeToggleButton />
          <div></div>
        </Container>
      </Box>
    </>
  );
}
