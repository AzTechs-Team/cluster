import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { events } from "@/configs/eventsContent";
import { users } from "@/configs/userContent";
import { EventProps } from "@/models/contentModels";
import EventCard from "@/components/tokens/EventCard";

const PastEvents = () => {
    const user = users[0];
    const pastEvents: Array<EventProps> = [];

    user.registeredEvents.forEach((e) => {
        const details = events.filter((ev) => ev.id === e)[0];
        if (new Date(details.date).getTime() < new Date().getTime()) {
            pastEvents.push(details);
        }
    });

    return (
        <Flex flexDir={"column"} align={"flex-start"} mb={20}>
            <Heading mb={8} textAlign={"center"}>
                Past events
            </Heading>
            <Button variant={"primary"} mb={8}>Add new event</Button>
            <Flex flexDir={"row"} flexWrap={"wrap"} gap={10} justify={"center"}>
                {pastEvents.map((event, i) => (
                    <EventCard {...event} key={i} />
                ))}
            </Flex>
        </Flex>
    );
};

export default PastEvents;
