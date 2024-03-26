import styled from "@emotion/styled";
import {
  Box,
  Text,
  Card,
  useColorModeValue,
  CardBody,
  Link,
  Image,
  Heading,
  Stack,
  Flex,
  Spacer,
  Center,
  useMediaQuery,
  Container,
  keyframes,
} from "@chakra-ui/react";
import Section from "../components/Section";
import Head from "next/head";

export default function Home() {
  const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
  const [isLargerThan6502] = useMediaQuery("(max-width: 650px)");

  const BioSection = styled(Box)`
    padding-left: 3.4em;
    text-indent: -3.4em;
    font-weight: 400;
    padding-bottom: 10px;
  `;

  const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1em;
    font-weight: 400;
  `;

  const styles = {
    img: {
      height: "150px",
      width: "150px",
      animation: "spin 2s linear infinite",
    },
  };

  return (
    <>
      <Head>
        <title>Rohit Painter</title>
        <link rel="apple-touch-icon" href="paint.png" />
        <link rel="icon" href="paint.png" />
      </Head>
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        },
        img: {
          height: "150px",
          width: "150px",
          animation: "spin 1s linear infinite",
        },
      `}</style>
      <Container pt="1" maxW="container.sm">
        <Section delay={0.1}>
          <Center>
            <Image border="2px white" src="brush.png" alt="brush" style={styles.img} />
          </Center>
          <Box
            fontSize="15px"
            fontWeight="semibold"
            border="lg"
            mb="5"
            mt="10"
            p="3"
            textAlign="center"
            borderRadius="8px"
            bg={useColorModeValue("whiteAlpha.400", "whiteAlpha.200")}
            style={{ backdropFilter: "blur(10px)" }}
          >
            Welcome! I&apos;m Rohit, an experienced house painter dedicated to
            bringing color and life to homes across India.
          </Box>
        </Section>

        <Section delay={0.3}>
          <Text
            mt="50px"
            fontSize={20}
            t
            pl="2"
            style={{
              fontWeight: "bold",
              lineHeight: 1,
              marginBottom: 4,
              marginTop: 3,
              textDecoration: "underline",
              textDecorationColor: "#525252",
              textDecorationThickness: 4,
              textUnderlineOffset: 6,
            }}
          >
            About Me
          </Text>
        </Section>
        <Section delay={0.5}>
          <Center>
            <Box ml="2" pb="3" mt="3">
              <BioSection>
                <BioYear>
                  Name
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </BioYear>
                &nbsp;Rohit
              </BioSection>
              <BioSection>
                <BioYear>
                  Mobile Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </BioYear>
                <a
                  href="tel:+918001276607"
                  _hover={{ cursor: "pointer", fontStyle: "underline" }}
                  isExternal
                >
                  +91 8001276607
                </a>
              </BioSection>
              <BioSection>
                <BioYear>WhatsApp Number &nbsp;&nbsp;</BioYear>
                <a
                  href="https://wa.me/918001276607"
                  _hover={{ cursor: "pointer", fontStyle: "underline" }}
                  target="blank"
                >
                  +91 8001276607
                </a>
              </BioSection>
            </Box>
          </Center>
        </Section>
        <Section delay={0.7}>
          <Text
            fontSize={20}
            t
            pl="2"
            style={{
              fontWeight: "bold",
              lineHeight: 1,
              marginBottom: 4,
              marginTop: 3,
              textDecoration: "underline",
              textDecorationColor: "#525252",
              textDecorationThickness: 4,
              textUnderlineOffset: 6,
            }}
          >
            Works Completed
          </Text>
          <div>
            {isLargerThan650 && (
              <p>
                <Flex>
                  <Card maxW="300px" mt="40px">
                    <CardBody>
                      <Center>
                        <Image
                          src="/photos/1.jpg"
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width="250px"
                          height="150px"
                          objectFit="cover"
                        />
                      </Center>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">Trident Galaxy</Heading>
                        <Text>
                          Trident Galaxy, Ghatikia, Kalinga Nagar, Bhubaneswar-
                          751003. J-311 & G-205 Block
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                  <Spacer />
                  <Link to="More"></Link>
                  <Card maxW="300px" mt="40px" as={Link} href="/More">
                    <CardBody>
                      <Center>
                        <Image
                          src="photos/2.jpg"
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width="250px"
                          height="150px"
                          objectFit="cover"
                        />
                      </Center>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">More Works +</Heading>
                        <Text>Click to view</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </Flex>
              </p>
            )}
          </div>
          <div>
            {isLargerThan6502 && (
              <p>
                <Flex direction="column" alignItems="center">
                  <Card maxW="300px" mt="40px">
                    <CardBody>
                      <Center>
                        <Image
                          src="/photos/1.jpg"
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width="250px"
                          height="150px"
                          objectFit="cover"
                        />
                      </Center>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">Trident Galaxy</Heading>
                        <Text>
                          J-311, Trident Galaxy, Ghatikia, Kalinga Nagar,
                          Bhubaneswar- 751003.
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                  <Spacer />
                  <Link to="More"></Link>
                  <Card maxW="300px" mt="40px" as={Link} href="/More">
                    <CardBody>
                      <Center>
                        <Image
                          src="/photos/2.jpg"
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width="250px"
                          height="150px"
                          objectFit="cover"
                        />
                      </Center>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">More Works +</Heading>
                        <Text>Click to view</Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </Flex>
              </p>
            )}
          </div>
        </Section>
        <Section delay={0.9}>
          <Text
            fontSize={20}
            t
            pl="2"
            mb="10px"
            style={{
              fontWeight: "bold",
              lineHeight: 1,
              marginBottom: 18,
              marginTop: 3,
              textDecoration: "underline",
              textDecorationColor: "#525252",
              textDecorationThickness: 4,
              textUnderlineOffset: 6,
            }}
          >
            Places Worked
          </Text>
          <Text pl="2">
            Bhubaneshwar, Kharagpur, Hydrabad and many more states.
          </Text>
          <Center>
            <Text mt="12" mb="" fontSize="10">
              Copyright 2024
            </Text>
          </Center>
        </Section>
      </Container>
    </>
  );
}
