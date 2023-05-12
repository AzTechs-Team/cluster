import React from "react";
import Image from "next/image";
import {
    Box,
    Button,
    Flex,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Features = () => {
    return (
        <Flex
            mx={{ base: -6, md: "auto" }}
            bgColor={"primary"}
            borderRadius={"xl"}
            align={"center"}
            py={10}
            px={{ base: 4, lg: 24 }}
            flexDir={"column"}
            className="dots"
            mb={20}
            boxShadow={"dark-lg"}
        >
            <Box mb={14}>
                <Heading mb={2}>Features that you’ll need</Heading>
                <Text textStyle={"body"}>
                Cluster offers you the best features that you'll ever need and can provide a
                 variety of features to enhance the user experience. 
                These may include features such as search functionality, interactive, 
                media content like images and videos, social sharing buttons, and personalized
                 recommendations based on user behavior. Additionally, websites may also offer
                  features like e-commerce capabilities, customer reviews and ratings, and user 
                  account creation and management.{" "}
                </Text>
            </Box>
            <Tabs variant="soft-rounded" size={"sm"} alignSelf={"flex-start"} color={"white"}>
                <TabList bg={"primaryDark"} borderRadius={"full"} p={1} w={"fit-content"}>
                    <Tab color={"white"} _selected={{ color: "black", bg: "primaryLight" }}>
                        For students
                    </Tab>
                    <Tab color={"white"} _selected={{ color: "black", bg: "primaryLight" }}>
                        For universities
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex
                            flexDir={{ base: "column", md: "row" }}
                            justify={"center"}
                            align={"center"}
                            gap={4}
                        >
                            <Box w={{ base: "full", md: "xl" }}>
                                <Heading mb={4}>For Students</Heading>
                                <Text textStyle={"body"}>
                                Connect students with shared interests and facilitate in-person gatherings. 
                                These may include search functionality to find relevant meetups based on 
                                location or topic, user profiles to share information about interests and 
                                availability,  like messaging and comments to coordinate logistics and stay in touch.{" "}
                                </Text>
                            </Box>
                            <Image
                                src="/assets/images/home/features_1.png"
                                alt="IDTA"
                                loading="eager"
                                style={{ objectFit: "contain" }}
                                width={350}
                                height={350}
                            />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            flexDir={{ base: "column", md: "row" }}
                            justify={"center"}
                            align={"center"}
                            gap={4}
                        >
                            <Box w={{ base: "full", md: "xl" }}>
                                <Heading mb={4}>For Universities</Heading>
                                <Text textStyle={"body"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus sem ex, vestibulum sed enim ac, consequat feugiat
                                    ante. Etiam velit lorem, efficitur vitae vestibulum nec,
                                    condimentum eu ligula. Quisque fermentum lacinia arcu, vel
                                    mattis ligula porta vitae. In eu fringilla tortor. Sed et ligula
                                    velit. Donec vitae ultricies sem. Suspendisse a gravida ante.{" "}
                                </Text>
                            </Box>
                            <Image
                                src="/assets/images/home/features_1.png"
                                alt="IDTA"
                                loading="eager"
                                style={{ objectFit: "contain" }}
                                width={350}
                                height={350}
                            />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Button variant={"primary"} alignSelf={"flex-start"} px={20}>
                <Link href="/pricing">
                    See Pricing
                </Link>
            </Button>
        </Flex>
    );
};

export default Features;
