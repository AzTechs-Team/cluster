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
    const benifits = ["Create and manage up to 10 events","Basic event page templates","Basic registration management","Basic attendance tracking","Basic communication with students","Limited customer support","No personalized branding","No analytics","No advanced features"];

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
                Basic Plan
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
    const benifits = ["Create and manage unlimited events","Advanced registration management","Advanced attendance tracking","Advanced communication with students","Priority customer support","Personalized branding with university colors","Analytics and insights on student engagement","Advanced features, such as gamification and sponsor promotion"];

    return (
        <Flex
            w={{ base: "full", md: "md" }}
            flexDir={"column"}
            align={"flex-start"}
            bgColor={"primaryDark"}
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
                Premium Plan
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
            Our website offers flexible pricing plans that can be customized to fit the specific needs 
            and budget of each university. With our plans, universities can choose from a range of features, 
            including personalized branding, advanced analytics, and premium support. Whether you are a 
            small institution or a large university, our flexible plans can help you create and manage student events with ease.
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
