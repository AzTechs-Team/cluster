import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    SimpleGrid,
    Stack,
    VisuallyHidden,
    Text,
    useToast,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import FOOTER_ITEMS from "@/configs/footerItems";

const Footer = () => {
    const toast = useToast();
    const [email, setEmail] = useState("");

    const addToNewsLetter = async () => {
        try {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (email.length > 0 && email.match(emailRegex)) {
                const data = { email };
                const res = await fetch("/api/subscribe-to-newsletter", {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (res.status == 200) {
                    setEmail("");
                    toast({
                        title: "Thank you for subscribing!",
                        status: "success",
                        duration: 4000,
                    });
                } else if (res.status == 201) {
                    setEmail("");
                    toast({
                        title: "You are already subscribed!",
                        status: "success",
                        duration: 4000,
                    });
                } else {
                    toast({
                        title: "Something went wrong! Please try again",
                        status: "error",
                        duration: 4000,
                    });
                }
            } else {
                toast({
                    title: "Enter valid email",
                    status: "error",
                    duration: 4000,
                });
            }
        } catch (e) {
            console.error("Error in adding email to newsletter");
        }
    };

    return (
        <Box flexShrink={0} zIndex={30} mt={10}>
            <Box bgColor={"primaryLight"} py={6}>
                <Box px={{ base: 6, md: 12, lg: 24 }} mb={6}>
                    {/* <Stack
                        spacing={{ base: 2, md: 10 }}
                        direction={{ base: "column", lg: "row" }}
                        align={"center"} 
                        mb={6}
                    >
                        <Heading>Newsletter</Heading>
                        <Stack w={"full"} direction={{ base: "column", md: "row" }}>
                            <Input
                                placeholder={"Your email address"}
                                bg={"white"}
                                border={0}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <Button
                                px={8}
                                variant="primary"
                                rightIcon={<ArrowForwardIcon />}
                                onClick={addToNewsLetter}
                            >
                                Subscribe
                            </Button>
                        </Stack>
                    </Stack> */}

                    <SimpleGrid
                        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
                        spacing={8}
                    >
                        {FOOTER_ITEMS.map((item, i) => (
                            <Stack
                                key={i}
                                display={"flex"}
                                alignItems={{ base: "center", md: "flex-start" }}
                            >
                                <Text textStyle={"subHeading"} color="primary">
                                    {item.heading}
                                </Text>
                                {item.items.map((data, j) => (
                                    <Link href={data.link} key={j}>
                                        {data.label}
                                    </Link>
                                ))}
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
            <Box bgColor={"primaryLight"} py={6} bgGradient="linear(to-r, primary, primaryDark)">
                <Flex w={"full"} h={{ base: 20, md: 16 }} pos={"relative"} justify={"center"}> 
                    <Image
                        src={"/assets/images/text_logo.png"}
                        fill
                        alt="IDTA Logo"
                        style={{ objectFit: "contain" }}
                    />
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
