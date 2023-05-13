import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import FOOTER_ITEMS from "@/configs/footerItems";

const Footer = () => {
    return (
        <Box flexShrink={0} zIndex={30} mt={10}>
            <Box bgColor={"primaryLight"} py={6}>
                <Box px={{ base: 6, md: 12, lg: 24 }} mb={6}>
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
