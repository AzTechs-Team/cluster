import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const CTASection = () => {
    return (
        <Box mb={20} textAlign={"center"}>
            <Heading mb={2}>What are you waiting for?</Heading>
            <Text textStyle={"body"} mb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex,
                vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae
                vestibulum nec, condimentum eu ligula. Quisque
            </Text>
            <Button variant={"primary"} size={"lg"}>
                <Link href="/pricing">
                    Get started now!
                </Link>
            </Button>
        </Box>
    );
};

export default CTASection;
