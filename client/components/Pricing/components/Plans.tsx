import {
    Box,
    Flex,
    HStack,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Card1 = (props: any) => {
    const benifits = ["item 1", "item 2", "item 3", "itme 4", "item 5"];

    return (
        <Flex
            w={{ base: "full", md: "md" }}
            flexDir={"column"}
            align={"flex-start"}
            bgColor={"primaryLight"}
            p={6}
            boxShadow={"lg"}
            borderRadius={"lg"}
        >
            <Image
                src="/assets/images/home/events_logo.png"
                alt="IDTA"
                loading="eager"
                style={{ objectFit: "contain" }}
                width={60}
                height={60}
            />
            <Heading mt={4} fontSize={"3xl"}>
                Moments to remember
            </Heading>
            <Text textStyle={"subHeading"} fontSize={"4xl"}>
                {`₹${props.monthly ? 10 : 10 * 12}/mth`}
            </Text>
            {benifits.map((item, i) => (
                <HStack align={"baseline"} gap={2} key={i}>
                    <Image src={"/assets/icons/tick.svg"} alt={"text"} width={12} height={12} />
                    <Text>{item}</Text>
                </HStack>
            ))}
        </Flex>
    );
};

const Card2 = (props: any) => {
    const benifits = ["item 1", "item 2", "item 3", "itme 4", "item 5"];

    return (
        <Flex
            w={{ base: "full", md: "md" }}
            flexDir={"column"}
            align={"flex-start"}
            bgColor={"primary"}
            className="dots"
            p={6}
            boxShadow={"lg"}
            borderRadius={"lg"}
        >
            <Image
                src="/assets/images/home/community_logo.png"
                alt="IDTA"
                loading="eager"
                style={{ objectFit: "contain" }}
                width={60}
                height={60}
            />
            <Heading mt={4} fontSize={"3xl"}>
                Moments to remember
            </Heading>
            <Text textStyle={"subHeading"} fontSize={"4xl"}>
                {`₹${props.monthly ? 100 : 100 * 12}/mth`}
            </Text>
            {benifits.map((item, i) => (
                <HStack align={"baseline"} gap={2} key={i}>
                    <Image src={"/assets/icons/tick.svg"} alt={"text"} width={12} height={12} />
                    <Text>{item}</Text>
                </HStack>
            ))}
        </Flex>
    );
};

const Plans = () => {
    return (
        <Box mb={20} px={{ base: "auto", md: 6, lg: 20 }}>
            <Heading mb={4}>Flexible plans</Heading>
            <Text textStyle={"body"} mb={8}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt fugiat
                magni dolorum odio ex facere asperiores corporis dolore impedit temporibus, fugit
                maxime autem, voluptate, quas aliquam mollitia? Unde, ad.
            </Text>

            <Tabs variant="soft-rounded" size={"sm"} alignSelf={"flex-start"}>
                <TabList bg={"primaryDark"} borderRadius={"full"} p={1} w={"fit-content"}>
                    <Tab color={"white"} _selected={{ color: "black", bg: "primaryLight" }}>
                        Monthly
                    </Tab>
                    <Tab color={"white"} _selected={{ color: "black", bg: "primaryLight" }}>
                        Yearly
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex
                            flexDir={{ base: "column", md: "row" }}
                            justify={"center"}
                            align={"center"}
                            gap={10}
                        >
                            <Card1 monthly={true} />
                            <Card2 monthly={true} />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex
                            flexDir={{ base: "column", md: "row" }}
                            justify={"center"}
                            align={"center"}
                            gap={10}
                        >
                            <Card1 monthly={false} />
                            <Card2 monthly={false} />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Plans;
