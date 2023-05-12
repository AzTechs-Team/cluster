import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const CTASection = () => {
    return (
        <Box mb={20} textAlign={"center"}>
            <Heading mb={2}>What are you waiting for?</Heading>
            <Text textStyle={"body"} mb={8}>
            Seize the opportunity and take action now. Don't let indecision hold 
            you back from reaching your goals and potential.
            </Text>
            <Button variant={"primary"} size={"lg"}>
                Get started now!
            </Button>
        </Box>
    );
};

export default CTASection;
