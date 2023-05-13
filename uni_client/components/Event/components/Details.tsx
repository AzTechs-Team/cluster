import React, { FC } from "react";
import Image from "next/image";
import {
    Box,
    Divider,
    Flex,
    Heading,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Tag,
    Text,
    useDisclosure,
    Button,
    useToast,
} from "@chakra-ui/react";
import { EventProps } from "@/models/contentModels";
import Link from "next/link";
import Content from "./Content";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userDetailsState } from "@/provider";
import { getUserDetails } from "@/helpers/appwrite";

interface OverviewModel {
    icon: string;
    name: string;
    description: string;
}

const Overview: React.FC<OverviewModel> = (props) => {
    return (
        <HStack spacing={4}>
            <Box pos={"relative"} w={12} h={12}>
                <Image src={props.icon} fill alt={props.name} style={{ objectFit: "contain" }} />
            </Box>
            <Stack>
                <Text textStyle={"body"} mb={-2}>
                    {props.name}
                </Text>
                <Text textStyle={"subHeading"} fontSize={"sm"}>
                    {props.description}
                </Text>
            </Stack>
        </HStack>
    );
};

const Details: FC<EventProps> = (props) => {
    const toast = useToast();
    const [user, setUser] = useRecoilState(userDetailsState);

    const register = async () => {
        try {
            const res = await axios.post(
                "https://cloud.appwrite.io/v1/functions/645ebd0ede1ec7a939f6/executions",
                {
                    data: JSON.stringify({ eventId: props.$id, participantId: user.id }),
                    async: true,
                },
                {
                    headers: {
                        "X-Appwrite-Project": "6456b0de0dcdeaf88721",
                    },
                }
            );
            console.log(res);

            const r = await getUserDetails(user.id);
            if (r) {
                setUser({
                    bio: r.bio,
                    id: r.$id,
                    eventId: r.eventId,
                    userEmail: r.userEmail,
                    userName: r.userName,
                    userType: r.userType,
                    onBoarded: r.onBoarded,
                });

                localStorage.removeItem("user");

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        bio: r.bio,
                        id: r.$id,
                        eventId: r.eventId,
                        userEmail: r.userEmail,
                        userName: r.userName,
                        userType: r.userType,
                        onBoarded: r.onBoarded,
                    })
                );
            }

            toast({
                title: "Thank you for registering!",
                status: "success",
                duration: 4000,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box pt={12} px={{ base: 0, xl: 10 }} mb={{ base: 20, lg: 36 }}>
                <Flex
                    align={"flex-end"}
                    backgroundImage={props.previewImage}
                    backgroundSize={"cover"}
                    backgroundPosition={"center"}
                    h={{ base: 80, lg: 80 }}
                    borderRadius={"lg"}
                    mb={10}
                    overflow={"hidden"}
                >
                    <Stack
                        h={"fit-content"}
                        m={4}
                        p={6}
                        bgColor={"white"}
                        borderRadius={"lg"}
                        w={"full"}
                        align={"flex-start"}
                    >
                        <Heading>{props.name}</Heading>
                        <Text textTransform={"uppercase"} textStyle={"body"} fontSize="xs">
                            {props.university}
                        </Text>
                    </Stack>
                </Flex>

                <Flex flexDir={{ base: "column", lg: "row" }} gap={10}>
                    <Content {...props} />

                    <Flex
                        w={{ base: "md" }}
                        flexDir={"column"}
                        align={"flex-start"}
                        display={{ base: "none", lg: "flex" }}
                    >
                        <Stack
                            w={"full"}
                            borderRadius="lg"
                            bgColor={"primaryLight"}
                            spacing={4}
                            p={6}
                            mb={6}
                        >
                            <Overview
                                icon={"/assets/images/event/time.png"}
                                name={"Date"}
                                description={props.date}
                            />
                            <Overview
                                icon={"/assets/images/event/time.png"}
                                name={"Time"}
                                description={props.time}
                            />
                        </Stack>
                        <Flex className={"glassEffect"} p={2} borderRadius="full" w={"full"}>
                            <Button variant={"primary"} size={"md"} w={"full"} onClick={register}>
                                Register now
                            </Button>
                        </Flex>
                    </Flex>

                    <Box
                        display={{ base: "block", lg: "none" }}
                        pos={"fixed"}
                        w={"full"}
                        left={0}
                        bottom={1}
                        zIndex={20}
                        px={{ base: 6, md: 12, lg: 24 }}
                    >
                        <Flex
                            className={"glassEffect"}
                            p={2}
                            borderRadius="full"
                            flexDir={"row"}
                            justify={"space-between"}
                            align={"center"}
                        >
                            <Button variant={"primary"} size={"lg"} w={"full"} onClick={register}>
                                Register now
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Details;
