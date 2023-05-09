import EventCard from "@/components/tokens/EventCard";
import { events } from "@/configs/eventsContent";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const EventsGrid = () => {
    return (
        <Box mb={20}>
            <Heading mb={8} textAlign={"center"}>
                More upcoming events
            </Heading>
            <Flex flexDir={"row"} flexWrap={"wrap"} gap={10} justify={"center"}>
                {events.map((event, i) => (
                    <EventCard {...event} key={i} />
                ))}
            </Flex>
        </Box>
    );
};

export default EventsGrid;
