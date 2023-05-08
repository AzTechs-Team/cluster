import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const { ref: boxRef, inView: isVisible } = useInView({ threshold: 0.5 });
    const [scrollDown, setScrollDown] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.addEventListener("scroll", () => {
                setScrollDown(window.scrollY > 50);
            });
        });
    }, [isVisible]);

    useEffect(() => {
        // if (scrollDown) {
        //     window.scrollTo({ top: 720, behavior: "smooth" });
        // }
    }, [scrollDown]);

    const handleCTAScroll = () => {
        // setScrollDown(false);
        // window.scrollBy({ top: 720, behavior: "smooth" });
    };

    return (
        <Box mx={{ base: -6, md: -12, lg: -24 }} mt={{ base: -28, xl: -36 }} mb={20}>
            <Box
                ref={boxRef}
                h={"80vh"}
                bgColor={"primary"}
                mb={10}
                display={"flex"}
                flexDir={"column"}
                gap={6}
                justifyContent={{ base: "center" }}
                alignItems={"center"}
                px={{ base: 4, md: 0 }}
            >
                <Image
                    src="/assets/images/style_logo.png"
                    alt="IDTA"
                    loading="eager"
                    style={{ objectFit: "contain" }}
                    width={800}
                    height={450}
                />

                <Stack width={{ base: "auto", md: "2xl", lg: "3xl" }} rowGap={2}>
                    <Text textStyle={"body"} textAlign={"center"} color={"white"} px={4}>
                        short description
                    </Text>
                    <Button
                        variant={"primary"}
                        bgGradient={"linear(to-r, white, primaryLight 50%, primary 50%)"}
                        color={"primaryLight"}
                        borderColor={"white"}
                        _hover={{ color: "primary" }}
                        w={"min-content"}
                        alignSelf={"center"}
                        onClick={handleCTAScroll}
                        zIndex={5}
                    >
                        Learn more
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default Hero;
