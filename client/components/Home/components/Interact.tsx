import React from "react";
import Image from "next/image";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Interact = () => {
    return (
        <Flex
            mx={{ base: -6, md: "auto" }}
            bgColor={"primaryLight"}
            borderRadius={"xl"}
            align={"center"}
            py={10}
            px={{ base: 4, lg: 24 }}
            flexDir={"column"}
            className="dots"
            mb={20}
        >
            <Box bgColor={"rgba(0,0,0,0.2)"} borderRadius={"full"} p={1} mb={8}>
                <Text
                    borderRadius={"full"}
                    textTransform={"uppercase"}
                    bgColor={"white"}
                    px={6}
                    fontWeight={700}
                >
                    discover. connect. create
                </Text>
            </Box>

            <Heading mb={20} textAlign={"center"}>
                Interact with different{" "}
                <Box
                    display={"inline"}
                    mr={3}
                    bgColor={"primary"}
                    color={"white"}
                    borderRadius={"xl"}
                    px={2}
                >
                    communities
                </Box>
                and get a glimpse of{" "}
                <Box
                    display={"inline"}
                    mr={3}
                    bgColor={"primary"}
                    color={"white"}
                    borderRadius={"xl"}
                    px={2}
                >
                    events
                </Box>
            </Heading>

            <Flex
                flexDir={{ base: "column", md: "row" }}
                justify={"center"}
                align={"center"}
                gap={10}
                mb={24}
            >
                <Flex
                    w={{ base: "full", md: "xl" }}
                    flexDir={"column"}
                    align={{ base: "center", md: "flex-start" }}
                    textAlign={{ base: "center", md: "left" }}
                >
                    <Image
                        src="/assets/images/home/events_logo.png"
                        alt="events"
                        loading="eager"
                        style={{ objectFit: "contain" }}
                        width={60}
                        height={60}
                    />
                    <Heading mb={4}>Moments to remember</Heading>
                    <Text textStyle={"body"} mb={4}>
                    What is an event? Simply put, an event is a gathering of people for 
                    a specific purpose. This purpose can be anything from celebrating 
                    a milestone to learning new skills.
                    </Text>
                    <Button variant={"secondary"} w={"fit-content"}>
                        <Link href="/pricing">
                            Explore events
                        </Link>
                    </Button>
                </Flex>

                <Flex flexDir={"column"} className="hover">
                    <Image
                        src="/assets/images/home/event_card_illustration.png"
                        alt="events"
                        loading="eager"
                        style={{ objectFit: "contain" }}
                        width={300}
                        height={300}
                    />
                    <Image
                        src="/assets/images/home/loc_card_illustration.png"
                        alt="events"
                        loading="eager"
                        style={{ objectFit: "contain" }}
                        width={200}
                        height={200}
                    />
                </Flex>
            </Flex>

            <Flex
                flexDir={{ base: "column", md: "row-reverse" }}
                justify={"center"}
                align={"center"}
                gap={10}
            >
                <Flex
                    w={{ base: "full", md: "xl" }}
                    flexDir={"column"}
                    align={{ base: "center", md: "flex-end" }}
                    textAlign={{ base: "center", md: "right" }}
                >
                    <Image
                        src="/assets/images/home/community_logo.png"
                        alt="events"
                        loading="eager"
                        style={{ objectFit: "contain", float: "right" }}
                        width={60}
                        height={60}
                    />
                    <Heading mb={4}>With great anticipation</Heading>
                    <Text textStyle={"body"} mb={4}>
                        Community events provide a wonderful opportunity for people to come 
                        together, connect, and celebrate. With great anticipation, we look 
                        forward to these events as they offer a chance to meet new people, 
                        learn new things, and enjoy shared experiences. 
                    </Text>
                    <Button variant={"secondary"} w={"fit-content"}>
                        <Link href="/pricing">
                            Explore events
                        </Link>
                    </Button>
                </Flex>

                <Flex flexDir={"column"} className="hover">
                    <Image
                        src="/assets/images/home/small_community_card_illustration.png"
                        alt="events"
                        loading="eager"
                        style={{ objectFit: "contain", marginBottom: "-6rem" }}
                        width={300}
                        height={300}
                    />
                    <Image
                        src="/assets/images/home/community_card_illustration.png"
                        alt="events"
                        loading="eager"
                        style={{ objectFit: "contain" }}
                        width={550}
                        height={550}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Interact;
