import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import CollegeCard from "./components/CollegeCard";
import aboutContent from "@/configs/aboutContent";
import AnimateEntryBox from "../tokens/AnimateEntryBox";

const About = () => {
    return (
        <Box px={{ base: 0, xl: 10 }}>
            <Heading
                bgGradient="linear(to-r, primaryDark, primary, primaryDark, black)"
                bgClip="text"
            >
                About us
            </Heading>
            <AnimateEntryBox>
                {aboutContent.description.split("\n").map((content, i) => (
                    <Text textStyle={"body"} key={i}>
                        {content} <br />
                        <br />
                    </Text>
                ))}
            </AnimateEntryBox>

            <Heading pt={10} mb={4}>
                Partner Colleges
            </Heading>
            <AnimateEntryBox>
                <Flex flexDir={"column"} rowGap={4} mb={{ base: 20 }}>
                    {aboutContent.colleges.map((item, i) => (
                        <CollegeCard
                            name={item.name}
                            link={item.link}
                            imgUrl={item.imgUrl}
                            key={i}
                        />
                    ))}
                </Flex>
            </AnimateEntryBox>
        </Box>
    );
};

export default About;
