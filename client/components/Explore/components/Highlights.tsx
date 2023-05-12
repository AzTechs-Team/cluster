import React, { useEffect, useState } from "react";

import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { EventProps } from "@/models/contentModels";
import EventHighlightCard from "../../tokens/EventHighlightCard";
import { highlightEvents } from "@/configs/eventsContent";
import { useRecoilState } from "recoil";
import { eventsState } from "@/provider";

const Highlights = () => {
    const [events, setEvents] = useRecoilState(eventsState);
    // const [active, setActive] = useState<EventProps>(events[0]);
    // const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {
    //     if (activeIndex < highlightEvents.length && activeIndex >= 0)
    //         setActive(highlightEvents[activeIndex]);
    //     else if (activeIndex < 0) setActiveIndex(highlightEvents.length - 1);
    //     else setActiveIndex(0);
    // }, [activeIndex]);

    return (
        <Box mb={20}>
            <Box width={"fit-content"} bgColor={"rgba(0,0,0,0.2)"} borderRadius={"full"} p={1}>
                <Text
                    borderRadius={"full"}
                    textTransform={"uppercase"}
                    bgColor={"primary"}
                    px={6}
                    fontWeight={700}
                    color={"white"}
                >
                    embark on an adventure
                </Text>
            </Box>
            <Heading mb={8}>Explore community and events</Heading>
            <Flex
                mx={{ base: -6, md: "auto" }}
                bgColor={"primary"}
                borderRadius={"xl"}
                align={"center"}
                py={10}
                px={{ base: 4, lg: 24 }}
                flexDir={"column"}
                className="dots"
                mb={20}
                boxShadow={"dark-lg"}
            >
                <Box
                    alignSelf={"flex-end"}
                    pt={4}
                    display={highlightEvents.length > 1 ? "flex" : "none"}
                    flexDir={"row"}
                    justifyContent={"flex-end"}
                    mb={4}
                >
                    {/* <IconButton
                        icon={<ArrowBackIcon color={"white"} />}
                        onClick={() => setActiveIndex(activeIndex - 1)}
                        aria-label="prev"
                        variant={"outline"}
                        mr={2}
                    ></IconButton>
                    <IconButton
                        icon={<ArrowForwardIcon color={"white"} />}
                        onClick={() => setActiveIndex(activeIndex + 1)}
                        aria-label="next"
                        variant={"outline"}
                    ></IconButton> */}
                </Box>
                {/* <Flex flexDir={"row"} align={"center"}>
                    {highlightEvents.map((item, i) => (
                        <Box key={i} className={item.id === active.id ? "showCard" : "hideCard"}> */}
                <EventHighlightCard {...events[0]} />
                {/* </Box> */}
                {/* ))}
                </Flex> */}
            </Flex>
        </Box>
    );
};

export default Highlights;
