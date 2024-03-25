import Section from "@/components/Section";
import {
  Box,
  useColorModeValue,
  Text,
  Center,
  Flex,
  useMediaQuery,
  Card,
  CardBody,
  Stack,
  Heading,
  Spacer,
  Link,
  Image,
  Container,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import CustomCard from "@/components/Card";

export default function More() {
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
  const photoCount = 47;
  const photoNumbers = Array.from(
    { length: photoCount },
    (_, index) => index + 1
  );
  const styles = {
    img: {
      height: "150px",
      width: "150px",
      animation: "spin 2s linear infinite",
    },
  };
  return (
    <>
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
          animation: "spin 2s ease-in-out infinite",
        },
      `}</style>
      <Container pt="1" maxW="container.sm">
        <Center>
          <Image src="brush.png" style={styles.img} />
        </Center>
        <Section delay={0.1}>
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
        </Section>
      </Container>
      <Section delay={0.7}>
        <div>
          {isLargerThan650 && (
            <p>
              <Flex direction="column" alignItems="center">
                {photoNumbers.map((number) => (
                  <CustomCard
                    key={number}
                    photoNumber={number}
                    headingText="Trident Galaxy" // Example heading text
                    bodyText="J-311, Trident Galaxy, Ghatikia, Kalinga Nagar, Bhubaneswar- 751003." // Example body text
                  />
                ))}
              </Flex>
            </p>
          )}
        </div>
        <div>
          {isLargerThan6502 && (
            <p>
              <Flex direction="column" alignItems="center">
                {photoNumbers.map((number) => (
                  <CustomCard src={number} />
                ))}
              </Flex>
            </p>
          )}
        </div>
      </Section>
    </>
  );
}
