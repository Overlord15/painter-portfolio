import React from "react";
import {
  Card,
  CardBody,
  Center,
  Image,
} from "@chakra-ui/react"; // Assuming you're using Chakra UI

const CustomCard = ({ photoNumber }) => {
  const imageSrc = `/photos/${photoNumber}.jpg`;
  return (
    <Card maxW="300px" mt="40px">
      <CardBody>
        <Center>
          <Image
            src={imageSrc}
            alt="None"
            borderRadius="lg"
            width="350px"
            height="150px"
            objectFit="cover"
          />
        </Center>
      </CardBody>
    </Card>
  );
};

export default CustomCard;
