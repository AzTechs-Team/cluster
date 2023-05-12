import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, HStack, Text, Badge, Flex, Button, Avatar, StackDivider } from "@chakra-ui/react";
import { EventProps } from "@/models/contentModels";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const EventCard: FC<EventProps> = (props) => {
    const height = 60;
    return (
        <Link legacyBehavior href={`/event/${props.slug}`}>
            <a>
                <Box width={"fit-content"} bgColor={"rgba(0,0,0,0.2)"} borderRadius={"lg"} p={2}>
                    <Flex
                        flexDir={"column"}
                        bgColor={"white"}
                        borderRadius={"lg"}
                        p={{ base: 4, md: 2 }}
                        align={"flex-start"}
                        gap={3}
                        className={"imageAnimation cardWithPrimaryButtonAnimation"}
                    >
                        <Box
                            pos={"relative"}
                            w={"full"}
                            h={40}
                            borderRadius={"lg"}
                            overflow={"hidden"}
                        >
                            <Image
                                src={props.previewImage}
                                fill
                                alt={props.name}
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                        <Box
                            w={"xs"}
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"space-evenly"}
                            h={height}
                        >
                            <Text
                                textStyle={"subHeading"}
                                fontSize={"md"}
                                textTransform={"uppercase"}
                                cursor={"pointer"}
                            >
                                {props.name}
                            </Text>
                            <Text textTransform={"uppercase"} textStyle={"body"} fontSize="xs">
                                {props.university}
                            </Text>
                            <Text
                                textStyle={"body"}
                                className="multilineWrap"
                                pr={4}
                                mb={1}
                                mt={3}
                                cursor={"pointer"}
                            >
                                {props.previewDetails}
                            </Text>
                            <Flex flexWrap={"wrap"} mb={2} gap={2}>
                                {props.tags.map((tag, i) => (
                                    <Badge key={i} variant={"primary"} px={2}>
                                        {tag}
                                    </Badge>
                                ))}
                            </Flex>
                            <HStack
                                w={"full"}
                                divider={<StackDivider />}
                                borderTop={"1px"}
                                borderBottom={"1px"}
                                borderColor={"gray.400"}
                                py={2}
                            >
                                <Text flexGrow={1}>
                                    {props.date}
                                </Text>
                                <Text flexGrow={1}>{props.time}</Text>
                            </HStack>
                            <Button
                                alignSelf={"flex-start"}
                                variant={"secondary"}
                                size="sm"
                                rightIcon={<ArrowForwardIcon />}
                            >
                                Register now
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </a>
        </Link>
    );
};

export default EventCard;
