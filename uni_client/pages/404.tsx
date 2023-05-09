import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
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
                Could not find the page you are looking for
            </Text>
            <Button variant={"primary"} mt={8}>
                <Link href={"/"}>Back to home</Link>
            </Button>
        </Flex>
    );
};

export default PageNotFound;
