import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ErrorCard = () => {
    return (
        <Flex
            justify={"center"}
            align={"center"}
            w={"full"}
            h={"lg"}
            flexDir={"column"}
            textAlign={"center"}
        >
            <Heading>Oops! Something went wrong...</Heading>
            <Text textStyle={"body"} mt={3} fontSize={"md"}>
                Error loading this page
            </Text>
            <Button variant={"primary"} mt={8}>
                <Link href={"/"}>Go back home</Link>
            </Button>
        </Flex>
    );
};

export default ErrorCard;
