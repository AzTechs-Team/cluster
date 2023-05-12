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
                setScrollDown(window.scrollY > 100);
            });
        });
    }, [isVisible]);

    // useEffect(() => {
    //     if (scrollDown) {
    //         window.scrollTo({ top: 720, behavior: "smooth" });
    //     }
    // }, [scrollDown]);

    const handleCTAScroll = () => {
        setScrollDown(false);
        window.scrollBy({ top: 720, behavior: "smooth" });
    };

    return (
        <Box mx={{ base: -6, md: -12, lg: -24 }} mt={{ base: -28, xl: -36 }} mb={20}>
            <Box
                ref={boxRef}
                h={"110vh"}
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
                    alt="Cluster"
                    loading="eager"
                    style={{ objectFit: "contain", marginTop: "14rem" }}
                    width={900}
                    height={500}
                />
                <Text textStyle={"subHeading"} textAlign={"center"} color={"white"} px={4}>
                    One-stop platform to get all details about university events, community, or
                    otherwise.
                </Text>

                <Box display={{ base: "none", lg: "block" }}>
                    <Image
                        src="/assets/images/home/hero_b.svg"
                        alt="Cluster"
                        loading="eager"
                        className="hover"
                        style={{ objectFit: "contain", marginTop: "-28rem" }}
                        width={1350}
                        height={550}
                    />
                </Box>

                <Stack width={{ base: "auto", md: "2xl", lg: "3xl" }} rowGap={2}>
                    {/* <Button
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
                    </Button> */}
                </Stack>
            </Box>
        </Box>
    );
};

export default Hero;
