import React, { FC, useState } from "react";
import Image from "next/image";

import { EventContentProps, EventProps } from "@/models/contentModels";
import { Box, Flex, HStack, Stack, Tag, Text } from "@chakra-ui/react";

const IncludeCard: FC<EventContentProps> = ({ description, title }) => {
    return (
        <Flex
            flexDir={"column"}
            w={{ base: "full", sm: 52 }}
            backgroundColor={"white"}
            p={4}
            borderRadius={"lg"}
            borderColor={"lightGray"}
            borderWidth={2}
            _hover={{ borderColor: "primary", color: "primary" }}
            cursor={"pointer"}
        >
            <Text textStyle={"body"} fontSize={"sm"}>
                {title}
            </Text>
            <Text fontWeight={"bold"} fontSize={"md"}>
                {description}
            </Text>
        </Flex>
    );
};

const ContentCard: FC<EventContentProps> = ({ description, title }) => {
    return (
        <Flex p={4} flexDir={"column"} backgroundColor={"white"} borderRadius={"lg"}>
            <Tag
                borderRadius="full"
                variant="subtle"
                bgColor="primary"
                width={"fit-content"}
                py={2}
                px={6}
            >
                {title}
            </Tag>
            <Flex mt={4} rowGap={2} flexDir={"column"}>
                {description.map((item, i) => (
                    <HStack align={"baseline"} key={i} gap={2}>
                        <Image src={"/assets/icons/star.svg"} alt={"text"} width={12} height={12} />
                        <Text>{item}</Text>
                    </HStack>
                ))}
            </Flex>
        </Flex>
    );
};

const Content: FC<EventProps> = (props) => {
    return (
        <Flex flexDir={"column"} align={"flex-start"} w={{ lg: "full" }}>
            <Text textStyle={"subHeading"} mb={6} borderBottomWidth={2} borderColor={"primary"}>
                Description
            </Text>
            <Text textStyle={"body"} color={"black"}>
                {props.details}
            </Text>

            <Text
                textStyle={"subHeading"}
                mb={6}
                borderBottomWidth={2}
                borderColor={"primary"}
                mt={10}
            >
                Event highlights:
            </Text>
            <Flex flexWrap={"wrap"} flexDir={"row"} gap={2} rowGap={2} mb={6}>
                {props.shortDescription.map((item, i) => {
                    const j = JSON.parse(item);
                    return <IncludeCard key={i} description={j.description} title={j.title} />;
                })}
            </Flex>

            <Flex
                bgColor={"primaryLight"}
                p={6}
                borderRadius={"lg"}
                w={"full"}
                flexDir={"column"}
                mb={6}
            >
                <Text textStyle={"subHeading"}>Timeline</Text>
                <Flex flexDir={"column"} mt={4} gap={4}>
                    {props.longDescription.map((item, i) => {
                        const j = JSON.parse(item);
                        return <ContentCard key={i} description={j.description} title={j.title} />;
                    })}
                </Flex>
            </Flex>

            <Text textStyle={"subHeading"} mb={2} id="location">
                Location
            </Text>
            <Box w={"full"} h={"xs"}>
                <iframe className="map" src={JSON.parse(props.location).mapUrl}></iframe>
            </Box>
            <Flex
                borderRadius={"lg"}
                w={"full"}
                bgColor={"primaryLight"}
                p={4}
                flexDir={"column"}
                mt={6}
            >
                <Box bgColor={"white"} p={6} borderRadius={"lg"}>
                    <Tag bgColor={"primary"}>{JSON.parse(props.location).city}</Tag>
                    <HStack pt={2} cursor={"pointer"}>
                        <Image
                            src={"/assets/icons/location_pin.svg"}
                            alt={"text"}
                            width={12}
                            height={12}
                        />
                        <Text>{JSON.parse(props.location).address}</Text>
                    </HStack>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Content;
